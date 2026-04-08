/**
 * Tests for supabase-wrapper.js
 * Covers: withRetry exponential backoff logic
 */

jest.mock("../src/lib/supabase", () => ({
  supabaseAdmin: { mocked: true },
}));

const { withRetry, supabaseAdmin } = require("../src/lib/supabase-wrapper");

describe("withRetry", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("returns result on first success", async () => {
    const operation = jest.fn().mockResolvedValue({ data: [1], error: null });
    const result = await withRetry(operation);
    expect(result).toEqual({ data: [1], error: null });
    expect(operation).toHaveBeenCalledTimes(1);
  });

  test("retries on ConnectTimeoutError and succeeds", async () => {
    const operation = jest
      .fn()
      .mockResolvedValueOnce({
        data: null,
        error: { message: "ConnectTimeoutError: connect timed out" },
      })
      .mockResolvedValueOnce({ data: [1], error: null });

    const result = await withRetry(operation, {
      maxRetries: 2,
      baseDelay: 10,
      label: "test",
    });

    expect(result).toEqual({ data: [1], error: null });
    expect(operation).toHaveBeenCalledTimes(2);
  });

  test("retries on fetch failed error", async () => {
    const operation = jest
      .fn()
      .mockResolvedValueOnce({
        data: null,
        error: { message: "fetch failed" },
      })
      .mockResolvedValueOnce({ data: ["ok"], error: null });

    const result = await withRetry(operation, {
      maxRetries: 2,
      baseDelay: 10,
    });

    expect(result).toEqual({ data: ["ok"], error: null });
    expect(operation).toHaveBeenCalledTimes(2);
  });

  test("retries on 502/503/504 errors", async () => {
    for (const code of ["502", "503", "504"]) {
      const operation = jest
        .fn()
        .mockResolvedValueOnce({
          data: null,
          error: { message: `${code} Bad Gateway` },
        })
        .mockResolvedValueOnce({ data: "ok", error: null });

      const result = await withRetry(operation, {
        maxRetries: 1,
        baseDelay: 10,
      });
      expect(result).toEqual({ data: "ok", error: null });
    }
  });

  test("does NOT retry non-retryable errors", async () => {
    const operation = jest.fn().mockResolvedValue({
      data: null,
      error: { message: "PGRST116: no rows" },
    });

    const result = await withRetry(operation, {
      maxRetries: 2,
      baseDelay: 10,
    });

    expect(result).toEqual({
      data: null,
      error: { message: "PGRST116: no rows" },
    });
    expect(operation).toHaveBeenCalledTimes(1);
  });

  test("retries thrown exceptions for retryable errors", async () => {
    const operation = jest
      .fn()
      .mockRejectedValueOnce(new Error("ECONNRESET"))
      .mockResolvedValueOnce({ data: "ok", error: null });

    const result = await withRetry(operation, {
      maxRetries: 2,
      baseDelay: 10,
    });

    expect(result).toEqual({ data: "ok", error: null });
    expect(operation).toHaveBeenCalledTimes(2);
  });

  test("throws after exhausting retries for thrown exceptions", async () => {
    const operation = jest
      .fn()
      .mockRejectedValue(new Error("ETIMEDOUT"));

    await expect(
      withRetry(operation, { maxRetries: 2, baseDelay: 10 })
    ).rejects.toThrow("ETIMEDOUT");

    expect(operation).toHaveBeenCalledTimes(3); // 1 initial + 2 retries
  });

  test("returns non-retryable error after max retries exhausted", async () => {
    const operation = jest.fn().mockResolvedValue({
      data: null,
      error: { message: "ConnectTimeoutError" },
    });

    const result = await withRetry(operation, {
      maxRetries: 2,
      baseDelay: 10,
    });

    // After exhausting retries, returns the last result
    expect(result).toEqual({
      data: null,
      error: { message: "ConnectTimeoutError" },
    });
    expect(operation).toHaveBeenCalledTimes(3);
  });

  test("re-exports supabaseAdmin", () => {
    expect(supabaseAdmin).toEqual({ mocked: true });
  });
});
