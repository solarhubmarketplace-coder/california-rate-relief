// Public email URLs are routinely fetched by scanners. A GET must never
// change interest/consent, create outbound tasks, or expose a customer ID.
function redirectLegacyEmailLink(req, res) {
    // This backend also serves a multi-site frontend; pin old CRR links to CRR.
    const target = new URL('https://ratereliefca.com/');
    target.searchParams.set('utm_source', 'crr');
    target.searchParams.set('utm_medium', 'email');
    target.searchParams.set('utm_campaign', 'legacy_link_review');
    res.set('Cache-Control', 'no-store');
    res.set('Referrer-Policy', 'no-referrer');
    return res.redirect(303, target.toString());
}

module.exports = { redirectLegacyEmailLink };
