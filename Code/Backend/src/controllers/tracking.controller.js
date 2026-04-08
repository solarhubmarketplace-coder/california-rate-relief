const queueService = require("../services/queue.service");
const leadService = require("../services/lead.service");
const config = require("../config");

/**
 * Handle email tracking click
 * GET /api/track/:token
 */
const handleTrackingClick = async (req, res, next) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.redirect(`${config.FRONTEND_URL}/unavailable`);
    }

    // Find task with this tracking token
    const task = await queueService.findTaskByTrackingToken(token);

    if (!task || !task.leads) {
      console.log(`[Tracking] Invalid token: ${token}`);
      return res.redirect(`${config.FRONTEND_URL}/unavailable`);
    }

    const lead = task.leads;

    // If lead is cold, upgrade to hot
    if (lead.type === "cold") {
      console.log(`[Tracking] 🔥 Upgrading lead ${lead.id} from COLD → HOT`);

      // Upgrade lead
      await leadService.upgradeLeadToHot(lead.id);

      // Create hot lead tasks (SMS + Voice)
      await queueService.createHotLeadTasks({ ...lead, type: "hot" });

      console.log(`[Tracking] Created SMS and Voice tasks for lead ${lead.id}`);
    }

    // Redirect to booking page with lead_id parameter
    return res.redirect(`${config.FRONTEND_URL}/book?lead_id=${lead.id}`);
  } catch (error) {
    console.error("[Tracking] Error:", error);
    // Redirect to booking page without lead_id (will show error page)
    return res.redirect(`${config.FRONTEND_URL}/book`);
  }
};

module.exports = {
  handleTrackingClick,
};
