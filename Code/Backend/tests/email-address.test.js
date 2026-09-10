/**
 * Tests for lib/email-address.js
 *
 * Anchored on a real incident: on 2026-08-23 a lead reached the wizard with a
 * malformed email address, the address was accepted and handed to Resend four
 * times, Resend rejected all four with "Invalid `to` field", nothing classified
 * that as permanent, and the homeowner never received anything.
 *
 * These tests cover both halves of the fix: catch the address locally, and
 * classify the provider's rejection as permanent so the queue stops retrying.
 */

const {
  validateEmailAddress,
  classifyEmailError,
  permanentEmailError,
} = require("../src/lib/email-address");

describe("validateEmailAddress", () => {
  test.each([
    ["plain", "homeowner@example.com"],
    ["subdomain", "a@mail.example.co.uk"],
    ["plus tag", "chad+solar@gmail.com"],
    ["dots in local part", "first.last@example.com"],
    ["digits and dashes in domain", "user@my-utility-2026.com"],
    ["long but legal tld", "user@example.solutions"],
  ])("accepts %s", (_label, address) => {
    const result = validateEmailAddress(address);
    expect(result.valid).toBe(true);
    expect(result.normalized).toBe(address.toLowerCase());
  });

  test("lower-cases the domain but preserves the local part", () => {
    const result = validateEmailAddress("Chad.Simpson@EXAMPLE.COM");
    expect(result.valid).toBe(true);
    // Local parts are technically case-sensitive; lower-casing one can change
    // the mailbox on a small number of systems.
    expect(result.normalized).toBe("Chad.Simpson@example.com");
  });

  test("trims surrounding whitespace", () => {
    expect(validateEmailAddress("  a@b.com  ").normalized).toBe("a@b.com");
  });

  test.each([
    ["empty string", ""],
    ["whitespace only", "   "],
    ["no at sign", "homeowner.example.com"],
    ["nothing before at", "@example.com"],
    ["nothing after at", "homeowner@"],
    ["no dot in domain", "homeowner@localhost"],
    ["internal space", "home owner@example.com"],
    ["comma separator", "a@b.com,c@d.com"],
    ["semicolon separator", "a@b.com;c@d.com"],
    ["leading dot in local", ".a@b.com"],
    ["trailing dot in local", "a.@b.com"],
    ["double dot in local", "a..b@c.com"],
    ["double dot in domain", "a@b..com"],
    ["leading dash in domain", "a@-b.com"],
    ["trailing dash in domain", "a@b-.com"],
    ["single-char tld", "a@b.c"],
    ["numeric tld", "a@b.12"],
  ])("rejects %s", (_label, address) => {
    const result = validateEmailAddress(address);
    expect(result.valid).toBe(false);
    expect(result.normalized).toBeNull();
    expect(typeof result.reason).toBe("string");
    expect(result.reason.length).toBeGreaterThan(0);
  });

  test("rejects the display-name form, because this codebase never builds one", () => {
    // Resend itself accepts "Name <a@b.com>", but our senders always pass a bare
    // address, so seeing brackets here means the field was mis-populated upstream.
    expect(validateEmailAddress("Chad Simpson <chad@example.com>").valid).toBe(false);
  });

  test.each([
    ["null", null],
    ["undefined", undefined],
    ["number", 12345],
    ["object", { email: "a@b.com" }],
    ["array", ["a@b.com"]],
  ])("rejects non-string input: %s", (_label, value) => {
    const result = validateEmailAddress(value);
    expect(result.valid).toBe(false);
    expect(result.reason).toBe("not a string");
  });

  test("rejects an address over 254 characters", () => {
    const long = `${"a".repeat(60)}@${"b".repeat(200)}.com`;
    expect(validateEmailAddress(long).valid).toBe(false);
  });

  test("rejects a local part over 64 characters", () => {
    const result = validateEmailAddress(`${"a".repeat(65)}@example.com`);
    expect(result.valid).toBe(false);
    expect(result.reason).toMatch(/local part/);
  });
});

describe("classifyEmailError", () => {
  test("classifies the exact 2026-08-23 Resend rejection as permanent", () => {
    const actual = new Error(
      "Invalid `to` field. The email address needs to follow the `email@example.com` or `Name <email@example.com>` format."
    );
    const result = classifyEmailError(actual);
    expect(result.kind).toBe("permanent");
    expect(result.reason).toMatch(/invalid `to` field/i);
  });

  test("respects an explicit permanent flag", () => {
    const err = permanentEmailError("nope", "because I said so");
    const result = classifyEmailError(err);
    expect(result.kind).toBe("permanent");
    expect(result.reason).toBe("because I said so");
  });

  test.each([
    ["validation_error", "validation_error"],
    ["invalid_parameter", "invalid_parameter"],
    ["missing_required_field", "missing_required_field"],
    ["restricted_api_key", "restricted_api_key"],
  ])("classifies provider error name %s as permanent", (_label, name) => {
    const err = new Error("something");
    err.name = name;
    expect(classifyEmailError(err).kind).toBe("permanent");
  });

  test.each([422, 400, 401, 403, 404])("classifies HTTP %i as permanent", (status) => {
    const err = new Error("rejected");
    err.statusCode = status;
    expect(classifyEmailError(err).kind).toBe("permanent");
  });

  test.each([429, 500, 502, 503, 504])("classifies HTTP %i as transient", (status) => {
    const err = new Error("upstream trouble");
    err.statusCode = status;
    expect(classifyEmailError(err).kind).toBe("transient");
  });

  test("defaults to transient when it cannot tell", () => {
    // Deliberate bias: a wasted retry is cheaper than silently dropping a real
    // homeowner's email.
    expect(classifyEmailError(new Error("socket hang up")).kind).toBe("transient");
    expect(classifyEmailError(new Error("")).kind).toBe("transient");
  });

  test("handles a missing error object without throwing", () => {
    expect(classifyEmailError(null).kind).toBe("transient");
    expect(classifyEmailError(undefined).kind).toBe("transient");
  });

  test("reads the status field as well as statusCode", () => {
    const err = new Error("rejected");
    err.status = 422;
    expect(classifyEmailError(err).kind).toBe("permanent");
  });
});

describe("permanentEmailError", () => {
  test("produces an error already marked permanent", () => {
    const err = permanentEmailError("bad address", "local validation");
    expect(err).toBeInstanceOf(Error);
    expect(err.permanent).toBe(true);
    expect(err.permanentReason).toBe("local validation");
    expect(err.name).toBe("validation_error");
  });

  test("falls back to the message when no reason is given", () => {
    expect(permanentEmailError("bad address").permanentReason).toBe("bad address");
  });
});
