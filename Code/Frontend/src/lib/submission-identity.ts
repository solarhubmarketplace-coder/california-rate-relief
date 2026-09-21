export type SubmissionIdFactory = () => string;
export interface SubmissionAttempt<T> {
  id: string;
  payload: T;
}

/** A replay is a successful receipt, but never another analytics conversion. */
export function isNewConfirmedSubmission(data: unknown, expectedId: string): boolean {
  if (!data || typeof data !== 'object') {
    throw new Error('Storage was not confirmed. Retry this submission.');
  }
  const receipt = data as Record<string, unknown>;
  if (
    receipt.submission_id !== expectedId ||
    typeof receipt.lead_id !== 'string' ||
    !receipt.lead_id ||
    receipt.status !== 'received' ||
    typeof receipt.duplicate !== 'boolean'
  ) {
    throw new Error('Storage was not confirmed. Retry this submission.');
  }
  return !receipt.duplicate;
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
