export type SubmissionIdFactory = () => string;
export interface SubmissionAttempt<T> {
  id: string;
  payload: T;
}

export function createSubmissionId(): string {
  if (!globalThis.crypto?.randomUUID) {
    throw new Error('This browser cannot create a secure submission identifier.');
  }
  return globalThis.crypto.randomUUID();
}

/** Keep the id after an error; rotate it only after the backend accepts the attempt. */
export function submissionIdAfterResult(
  current: string,
  succeeded: boolean,
  createId: SubmissionIdFactory = createSubmissionId,
): string {
  return succeeded ? createId() : current;
}

/** Build the complete request once so retries keep the same id and fingerprint. */
export function getOrCreateSubmissionAttempt<T>(
  existing: SubmissionAttempt<T> | null,
  buildPayload: (id: string) => T,
  createId: SubmissionIdFactory = createSubmissionId,
): SubmissionAttempt<T> {
  if (existing) return existing;
  const id = createId();
  return { id, payload: buildPayload(id) };
}
