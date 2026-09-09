const { supabaseAdmin } = require('../lib/supabase');

function bearerToken(header) {
  if (typeof header !== 'string') return null;
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : null;
}

async function requireStaff(req, res, next) {
  const token = bearerToken(req.headers.authorization);
  if (!token) return res.apiResponse(401, 'Authentication required');

  try {
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    const user = data?.user;
    if (error || !user) return res.apiResponse(401, 'Invalid or expired session');

    const email = String(user.email || '').toLowerCase();
    const { data: staff, error: staffError } = await supabaseAdmin
      .from('crr_staff_users').select('user_id').eq('user_id', user.id).eq('active', true).maybeSingle();
    if (staffError || !staff) return res.apiResponse(403, 'Staff access required');

    req.staffUser = { id: user.id, email };
    return next();
  } catch (error) {
    console.error('[Auth] Supabase token verification failed:', error.message);
    return res.apiResponse(401, 'Invalid or expired session');
  }
}

module.exports = { requireStaff, bearerToken };
