/**
 * Tests for lib/svix-signature.js
 *
 * The Resend delivery webhook can write to email_logs and to leads, so it must
 * fail closed. These tests exist mainly to prove it does: no secret, bad secret,
 * missing headers, stale timestamp and tampered body must all be rejected.
 */

const crypto = require("crypto");
const { verifySvixSignature, TOLERANCE_SECONDS } = require("../src/lib/svix-signature");

const SECRET_BYTES = Buffer.from("a-thirty-two-byte-test-signing-key");
const SECRET = `whsec_${SECRET_BYTES.toString("base64")}`;

/** Build the headers Svix would send for a given body. */
function sign(body, { id = "msg_test_1", timestamp, secret = SECRET_BYTES } = {}) {
  const ts = String(timestamp ?? Math.floor(Date.now() / 1000));
  const signed = `${id}.${ts}.${body}`;
  const mac = crypto.createHmac("sha256", secret).update(signed, "utf8").digest("base64");
  return {
    "svix-id": id,
    "svix-timestamp": ts,
    "svix-signature": `v1,${mac}`,
  };
}

const BODY = JSON.stringify({
  type: "email.delivered",
  created_at: "2026-09-10T04:00:00.000Z",
  data: { email_id: "abc-123", to: ["homeowner@example.com"] },
});

describe("verifySvixSignature — accepts a genuine signature", () => {
  test("passes for a correctly signed request", () => {
    const result = verifySvixSignature({
      rawBody: Buffer.from(BODY),
      headers: sign(BODY),
      secret: SECRET,
    });
    expect(result.ok).toBe(true);
    expect(result.reason).toBeNull();
  });

  test("accepts the secret with or without the whsec_ prefix", () => {
    const headers = sign(BODY);
    const withPrefix = verifySvixSignature({ rawBody: BODY, headers, secret: SECRET });
    const withoutPrefix = verifySvixSignature({
      rawBody: BODY,
      headers,
      secret: SECRET_BYTES.toString("base64"),
    });
    expect(withPrefix.ok).toBe(true);
    expect(withoutPrefix.ok).toBe(true);
  });

  test("accepts a string body as well as a Buffer", () => {
    expect(verifySvixSignature({ rawBody: BODY, headers: sign(BODY), secret: SECRET }).ok).toBe(true);
  });

  test("accepts when several signatures are presented and one matches", () => {
    // Svix sends multiple v1 entries during a secret rotation.
    const headers = sign(BODY);
    const other = crypto
      .createHmac("sha256", Buffer.from("a-different-key"))
      .update("nonsense", "utf8")
      .digest("base64");
    headers["svix-signature"] = `v1,${other} ${headers["svix-signature"]}`;
    expect(verifySvixSignature({ rawBody: BODY, headers, secret: SECRET }).ok).toBe(true);
  });

  test("accepts the webhook-* header aliases", () => {
    const svix = sign(BODY);
    const headers = {
      "webhook-id": svix["svix-id"],
      "webhook-timestamp": svix["svix-timestamp"],
      "webhook-signature": svix["svix-signature"],
    };
    expect(verifySvixSignature({ rawBody: BODY, headers, secret: SECRET }).ok).toBe(true);
  });
});

describe("verifySvixSignature — fails closed", () => {
  test("rejects when no secret is configured", () => {
    const result = verifySvixSignature({ rawBody: BODY, headers: sign(BODY), secret: "" });
    expect(result.ok).toBe(false);
    expect(result.reason).toMatch(/no signing secret/);
  });

  test.each([null, undefined, 0, {}])("rejects a non-string secret: %p", (secret) => {
    expect(verifySvixSignature({ rawBody: BODY, headers: sign(BODY), secret }).ok).toBe(false);
  });

  test("rejects a secret that is not valid base64", () => {
    const result = verifySvixSignature({
      rawBody: BODY,
      headers: sign(BODY),
      secret: "whsec_!!!not base64!!!",
    });
    expect(result.ok).toBe(false);
  });

  test("rejects an empty body", () => {
    const result = verifySvixSignature({
      rawBody: Buffer.alloc(0),
      headers: sign(BODY),
      secret: SECRET,
    });
    expect(result.ok).toBe(false);
    expect(result.reason).toMatch(/empty body/);
  });

  test.each(["svix-id", "svix-timestamp", "svix-signature"])(
    "rejects when %s is missing",
    (missing) => {
      const headers = sign(BODY);
      delete headers[missing];
      const result = verifySvixSignature({ rawBody: BODY, headers, secret: SECRET });
      expect(result.ok).toBe(false);
      expect(result.reason).toMatch(/missing/);
    }
  );

  test("rejects a tampered body", () => {
    const headers = sign(BODY);
    const tampered = BODY.replace("email.delivered", "email.bounced");
    const result = verifySvixSignature({ rawBody: tampered, headers, secret: SECRET });
    expect(result.ok).toBe(false);
    expect(result.reason).toMatch(/no presented signature matched/);
  });

  test("rejects a signature made with a different key", () => {
    const headers = sign(BODY, { secret: Buffer.from("some-other-signing-key") });
    expect(verifySvixSignature({ rawBody: BODY, headers, secret: SECRET }).ok).toBe(false);
  });

  test("rejects a swapped svix-id, since the id is part of the signed content", () => {
    const headers = sign(BODY, { id: "msg_original" });
    headers["svix-id"] = "msg_attacker";
    expect(verifySvixSignature({ rawBody: BODY, headers, secret: SECRET }).ok).toBe(false);
  });

  test("rejects a timestamp outside tolerance, blunting replay", () => {
    const stale = Math.floor(Date.now() / 1000) - (TOLERANCE_SECONDS + 60);
    const result = verifySvixSignature({
      rawBody: BODY,
      headers: sign(BODY, { timestamp: stale }),
      secret: SECRET,
    });
    expect(result.ok).toBe(false);
    expect(result.reason).toMatch(/outside tolerance/);
  });

  test("rejects a timestamp too far in the future", () => {
    const future = Math.floor(Date.now() / 1000) + (TOLERANCE_SECONDS + 60);
    const result = verifySvixSignature({
      rawBody: BODY,
      headers: sign(BODY, { timestamp: future }),
      secret: SECRET,
    });
    expect(result.ok).toBe(false);
  });

  test("accepts a timestamp just inside tolerance", () => {
    const nowSeconds = 1_800_000_000;
    const result = verifySvixSignature({
      rawBody: BODY,
      headers: sign(BODY, { timestamp: nowSeconds - (TOLERANCE_SECONDS - 5) }),
      secret: SECRET,
      nowSeconds,
    });
    expect(result.ok).toBe(true);
  });

  test("rejects a non-numeric timestamp", () => {
    const headers = sign(BODY);
    headers["svix-timestamp"] = "not-a-number";
    const result = verifySvixSignature({ rawBody: BODY, headers, secret: SECRET });
    expect(result.ok).toBe(false);
    expect(result.reason).toMatch(/not a number/);
  });

  test("rejects a signature header with no v1 entry", () => {
    const headers = sign(BODY);
    headers["svix-signature"] = "v0,abc123";
    const result = verifySvixSignature({ rawBody: BODY, headers, secret: SECRET });
    expect(result.ok).toBe(false);
    expect(result.reason).toMatch(/no v1 signature/);
  });

  test("does not throw on a signature of the wrong byte length", () => {
    // timingSafeEqual throws on a length mismatch; the guard must catch that.
    const headers = sign(BODY);
    headers["svix-signature"] = `v1,${Buffer.from("short").toString("base64")}`;
    expect(() => verifySvixSignature({ rawBody: BODY, headers, secret: SECRET })).not.toThrow();
    expect(verifySvixSignature({ rawBody: BODY, headers, secret: SECRET }).ok).toBe(false);
  });
});
