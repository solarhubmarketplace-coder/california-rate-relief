const leadService = require("../services/lead.service");
const queueService = require("../services/queue.service");

/**
 * CONFIRM INTEREST ENDPOINT
 * When user clicks "Yes, I'm Ready to Talk!" button on frontend
 * Upgrades lead to hot and creates call tasks
 */
const confirmInterest = async (req, res) => {
  try {
    const { lead_id } = req.query;

    if (!lead_id) {
      return res.status(400).json({
        success: false,
        message: "Missing lead_id parameter",
      });
    }

    // Upgrade lead to hot
    const updatedLead = await leadService.upgradeLeadToHot(lead_id);

    // Create hot lead tasks (calls + SMS) - pass lead object, not string ID
    await queueService.createHotLeadTasks(updatedLead);

    return res.json({
      success: true,
      message: "Interest confirmed! You'll receive a call soon.",
      data: {
        lead_id: updatedLead.id,
        status: updatedLead.status,
      },
    });
  } catch (error) {
    console.error("[BookingController] Error confirming interest:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to confirm interest",
    });
  }
};

module.exports = {
  confirmInterest,
};
