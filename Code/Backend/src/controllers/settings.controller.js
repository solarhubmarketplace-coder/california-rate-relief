const settingsService = require("../services/settings.service");

const getSettings = async (req, res, next) => {
  try {
    const settings = await settingsService.getSettings();
    return res.apiResponse(200, "Settings retrieved successfully", settings);
  } catch (error) {
    next(error);
  }
};

const getSetting = async (req, res, next) => {
  try {
    const { key } = req.params;
    const setting = await settingsService.getSetting(key);
    return res.apiResponse(200, "Setting retrieved successfully", {
      key,
      value: setting,
    });
  } catch (error) {
    next(error);
  }
};

const updateSetting = async (req, res, next) => {
  try {
    const { key } = req.params;
    const { value } = req.body;

    if (value === undefined) {
      return res.apiResponse(400, "Value is required");
    }

    const setting = await settingsService.updateSetting(key, value);

    // ✨ NEW: Trigger task sync when relevant settings change
    const queueService = require("../services/queue.service");

    // Run sync asynchronously (don't block response)
    if (
      key === "auto_dial_new_leads" ||
      key === "double_dial_strategy" ||
      key === "leave_voicemail"
    ) {
      queueService
        .syncTasksBasedOnSettings()
        .then((result) => {
          const total =
            result.autoDial.created +
            result.doubleDial.created +
            result.smsFollowup.created;
          console.log(
            `[SettingsController] Task sync complete: ${total} tasks created after ${key} update`
          );
        })
        .catch((err) => {
          console.error("[SettingsController] Error syncing tasks:", err);
        });
    }

    return res.apiResponse(200, "Setting updated successfully", setting);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSettings,
  getSetting,
  updateSetting,
};
