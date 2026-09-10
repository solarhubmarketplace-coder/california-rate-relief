/**
 * Svix webhook signature verification.
 *
 * Resend signs its webhooks through Svix. The scheme:
 *   - headers: svix-id, svix-timestamp, svix-signature
 *   - signed content is the literal string `${svix-id}.${svix-timestamp}.${rawBody}`
 *   - the secret arrives as `whsec_<base64>`; the HMAC key is the DECODED base64,
 *     not the string
 *   - svix-signature holds one or more space-separated `v1,<base64signature>`
 *     entries — more than one during a secret rotation, so any match is a pass
 *
 * Implemented with node crypto rather than adding the `svix` package: this is
 * about forty lines, the backend has no build step, and one fewer dependency in
 * the request path of a public endpoint is worth having.
 *
 * Failing closed is deliberate. An unverified webhook can write to email_logs
 * and to leads, so an absent or unparseable secret must reject every request
 * rather than wave them through.
 */

const crypto = require('crypto');

/** Reject anything older than this, to blunt replay attacks. Svix's own default. */
const TOLERANCE_SECONDS = 5 * 60;

/**
 * @param {object} args
 * @param {Buffer|string} args.rawBody   exact bytes of the request body
 * @param {object} args.headers          request headers (lower-cased keys)
 * @param {string} args.secret           whsec_... signing secret
 * @param {number} [args.nowSeconds]     override for tests
 * @returns {{ ok: boolean, reason: string|null }}
 */
function verifySvixSignature({ rawBody, headers, secret, nowSeconds }) {
    if (!secret || typeof secret !== 'string') {
        return { ok: false, reason: 'no signing secret configured' };
    }
    if (!rawBody || rawBody.length === 0) {
        return { ok: false, reason: 'empty body' };
    }

    const id = headers['svix-id'] || headers['webhook-id'];
    const timestamp = headers['svix-timestamp'] || headers['webhook-timestamp'];
    const signatureHeader = headers['svix-signature'] || headers['webhook-signature'];

    if (!id || !timestamp || !signatureHeader) {
        return { ok: false, reason: 'missing svix-id, svix-timestamp or svix-signature' };
    }

    const ts = Number(timestamp);
    if (!Number.isFinite(ts)) {
        return { ok: false, reason: 'svix-timestamp is not a number' };
    }
    const now = Number.isFinite(nowSeconds) ? nowSeconds : Math.floor(Date.now() / 1000);
    const drift = Math.abs(now - ts);
    if (drift > TOLERANCE_SECONDS) {
        return { ok: false, reason: `timestamp outside tolerance (${drift}s)` };
    }

    const key = secret.startsWith('whsec_') ? secret.slice('whsec_'.length) : secret;
    let keyBytes;
    try {
        keyBytes = Buffer.from(key, 'base64');
        if (keyBytes.length === 0) throw new Error('empty key');
    } catch (e) {
        return { ok: false, reason: 'signing secret is not valid base64' };
    }

    const body = Buffer.isBuffer(rawBody) ? rawBody.toString('utf8') : String(rawBody);
    const signedContent = `${id}.${timestamp}.${body}`;
    const expected = crypto.createHmac('sha256', keyBytes).update(signedContent, 'utf8').digest();

    const presented = String(signatureHeader)
        .split(' ')
        .map((part) => part.trim())
        .filter(Boolean)
        .filter((part) => part.startsWith('v1,'))
        .map((part) => part.slice(3));

    if (presented.length === 0) {
        return { ok: false, reason: 'no v1 signature in svix-signature header' };
    }

    for (const candidate of presented) {
        let bytes;
        try {
            bytes = Buffer.from(candidate, 'base64');
        } catch (e) {
            continue;
        }
        // timingSafeEqual throws on a length mismatch, so guard first.
        if (bytes.length === expected.length && crypto.timingSafeEqual(bytes, expected)) {
            return { ok: true, reason: null };
        }
    }

    return { ok: false, reason: 'no presented signature matched' };
}

module.exports = { verifySvixSignature, TOLERANCE_SECONDS };
