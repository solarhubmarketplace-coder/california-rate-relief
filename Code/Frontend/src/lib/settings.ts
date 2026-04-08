// Settings API Functions - Connected to Backend
import { Settings } from "@/types";
import axiosClient from "./axios";

// ============================================
// Types
// ============================================

// Map backend setting keys to frontend Settings type
interface BackendSettings {
  auto_dial_new_leads?: { enabled: boolean; delay_seconds?: number };
  double_dial_strategy?: { enabled: boolean; retry_after_seconds?: number };
  leave_voicemail?: { enabled: boolean };
  google_admin_tokens?: {
    profile?: {
      name: string;
      email: string;
      picture: string;
    };
  };
}

// ============================================
// Constants
// ============================================

const SETTINGS_CACHE_KEY = "sun_speed_settings_cache";

const defaultSettings: Settings = {
  auto_dial_enabled: false,
  double_dial_enabled: false,
  voicemail_enabled: false,
};

// ============================================
// Helper Functions
// ============================================

function mapBackendToFrontend(backendSettings: BackendSettings): Settings {
  // console.log("[Settings] Mapping backend settings:", backendSettings);

  const mapped: Settings = {
    auto_dial_enabled: backendSettings.auto_dial_new_leads?.enabled || false,
    double_dial_enabled: backendSettings.double_dial_strategy?.enabled || false,
    voicemail_enabled: backendSettings.leave_voicemail?.enabled || false,
    google_admin_tokens: backendSettings.google_admin_tokens,
  };

  return mapped;
}

// ============================================
// API Functions
// ============================================

export async function fetchSettings(): Promise<Settings> {
  try {
    // Try to fetch from backend API
    const response = await axiosClient.get("/settings");

    // The backend returns: { message: "...", data: { ...settings... } }
    // Axios returns: { data: { message: "...", data: { ... } }, ... }

    const responseBody = response.data;
    const settingsData = responseBody.data || responseBody; // Handle both wrapped and unwrapped

    // console.log("[Settings] Parsed settings data:", settingsData);

    // The backend returns settings as an object (not an array)
    const settingsMap: BackendSettings = {
      auto_dial_new_leads: settingsData.auto_dial_new_leads,
      double_dial_strategy: settingsData.double_dial_strategy,
      leave_voicemail: settingsData.leave_voicemail,
      google_admin_tokens: settingsData.google_admin_tokens,
    };

    const settings = mapBackendToFrontend(settingsMap);

    console.log("[Settings] Mapped frontend settings:", settings);

    // Cache in localStorage as backup
    if (typeof window !== "undefined") {
      localStorage.setItem(SETTINGS_CACHE_KEY, JSON.stringify(settings));
    }

    return settings;
  } catch (error) {
    console.error("Failed to fetch settings from backend, using cache:", error);

    // Fallback to cached settings
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem(SETTINGS_CACHE_KEY);
      if (cached) {
        return JSON.parse(cached);
      }
    }
    return defaultSettings;
  }
}

export async function updateSettings(
  settings: Partial<Settings>
): Promise<Settings> {
  try {
    // Update each setting individually via the backend API
    const updates: Promise<any>[] = [];

    if (settings.auto_dial_enabled !== undefined) {
      updates.push(
        axiosClient.put("/settings/auto_dial_new_leads", {
          value: { enabled: settings.auto_dial_enabled, delay_seconds: 60 },
        })
      );
    }

    if (settings.double_dial_enabled !== undefined) {
      updates.push(
        axiosClient.put("/settings/double_dial_strategy", {
          value: {
            enabled: settings.double_dial_enabled,
            retry_after_seconds: 30,
          },
        })
      );
    }

    if (settings.voicemail_enabled !== undefined) {
      updates.push(
        axiosClient.put("/settings/leave_voicemail", {
          value: { enabled: settings.voicemail_enabled },
        })
      );
    }

    await Promise.all(updates);

    // Fetch updated settings
    return await fetchSettings();
  } catch (error) {
    console.error("Failed to update settings:", error);
    throw error;
  }
}
