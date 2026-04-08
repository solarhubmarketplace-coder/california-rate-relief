const path = require("path");
const fs = require("fs");

/**
 * Phone Matcher Service
 * Matches lead phone numbers to local Twilio numbers based on area codes
 * to increase pickup rates by showing local caller ID
 */
class PhoneMatcherService {
  constructor() {
    this.config = this.loadConfig();
    this.phoneNumbers = this.config.localPresenceNumbers || [];
    this.areaCodeMap = this.buildAreaCodeMap();
    this.fallbackNumber = this.config.fallbackNumber;
    
    // Validate fallback number exists
    if (!this.fallbackNumber) {
      if (this.phoneNumbers.length > 0) {
        this.fallbackNumber = this.phoneNumbers[0].number;
      } else {
        console.error("[PhoneMatcher] No Twilio numbers available!");
      }
    }
  }

  /**
   * Load phone numbers configuration from JSON file
   * @returns {Object} Configuration object with fallbackNumber and localPresenceNumbers
   */
  loadConfig() {
    try {
      const configPath = path.join(__dirname, "../../config/twilio-numbers.json");
      const configData = fs.readFileSync(configPath, "utf8");
      const config = JSON.parse(configData);
      
      return config;
    } catch (error) {
      console.error(
        "[PhoneMatcher] Failed to load twilio-numbers.json:",
        error.message
      );
      console.warn("[PhoneMatcher] Using empty configuration");
      return {
        fallbackNumber: null,
        localPresenceNumbers: []
      };
    }
  }

  /**
   * Load phone numbers from configuration
   * @returns {Array} Array of phone number objects
   */
  loadPhoneNumbers() {
    // This method is now deprecated, kept for backward compatibility
    // Configuration is loaded in loadConfig() instead
    return this.phoneNumbers;
  }

  /**
   * Build a map of area codes to phone numbers for quick lookup
   * Supports multiple area codes per phone number
   * @returns {Map} Map of area code to phone number object
   */
  buildAreaCodeMap() {
    const map = new Map();

    for (const phoneConfig of this.phoneNumbers) {
      // Support both single areaCode (legacy) and areaCodes array (new)
      const areaCodes = phoneConfig.areaCodes || [phoneConfig.areaCode];
      
      if (!areaCodes || areaCodes.length === 0) {
        console.warn(`[PhoneMatcher] Phone ${phoneConfig.number} has no area codes defined`);
        continue;
      }

      // Map each area code to this phone number
      for (const areaCode of areaCodes) {
        if (!map.has(areaCode)) {
          map.set(areaCode, phoneConfig);
        }
      }
    }

    return map;
  }

  /**
   * Normalize phone number to E.164 format (helper function)
   * @param {string} phoneNumber - Phone number in any format
   * @returns {string|null} - Normalized E.164 format or null if invalid
   */
  normalizePhoneNumber(phoneNumber) {
    if (!phoneNumber) return null;

    // If already starts with +, validate and return as-is (preserve international numbers)
    if (phoneNumber.trim().startsWith("+")) {
      const cleaned = phoneNumber.replace(/[^\d+]/g, "");
      // Must have + followed by country code and number (minimum 8 digits total after +)
      if (/^\+[1-9]\d{7,14}$/.test(cleaned)) {
        return cleaned;
      }
      // Invalid format
      return null;
    }

    // Remove all non-digit characters
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    // If empty after cleaning, invalid
    if (!digitsOnly) return null;

    // Handle US/Canada numbers (country code 1)
    // If starts with 1 and has 11 digits, it's already country code + number
    if (digitsOnly.length === 11 && digitsOnly.startsWith("1")) {
      return `+${digitsOnly}`;
    }

    // If has 10 digits, assume US/Canada and prepend +1
    if (digitsOnly.length === 10) {
      return `+1${digitsOnly}`;
    }

    // Invalid format
    return null;
  }

  /**
   * Extract area code from a phone number (normalizes first if needed)
   * @param {string} phoneNumber - Phone number in any format
   * @returns {string|null} Area code (3 digits) or null if not found
   */
  extractAreaCode(phoneNumber) {
    if (!phoneNumber) return null;

    // Normalize to E.164 first
    const normalized = this.normalizePhoneNumber(phoneNumber);
    if (!normalized) return null;

    // Match E.164 format: +1 (country code) + XXX (area code) + XXXXXXX
    // For US/Canada: +1 followed by 10 digits (3 area code + 7 number)
    const match = normalized.match(/^\+1(\d{3})\d{7}$/);
    if (match) {
      return match[1]; // Return the area code
    }

    // Try other country codes (extract 3 digits after country code)
    // This is a simplified approach - may need adjustment for other countries
    const internationalMatch = normalized.match(/^\+\d{1,3}(\d{3})/);
    if (internationalMatch) {
      return internationalMatch[1];
    }

    return null;
  }

  /**
   * Get the best local Twilio number for a lead based on their phone number
   * @param {string} leadPhoneNumber - Lead's phone number
   * @returns {string} Matched Twilio number or fallback number
   */
  getLocalNumber(leadPhoneNumber) {
    // Extract area code from lead's phone
    const areaCode = this.extractAreaCode(leadPhoneNumber);

    if (!areaCode) {
      return this.fallbackNumber;
    }

    // Look up matching Twilio number
    const match = this.areaCodeMap.get(areaCode);
    return match ? match.number : this.fallbackNumber;
  }

  /**
   * Get information about a matched number
   * @param {string} leadPhoneNumber - Lead's phone number
   * @returns {Object} Match information including number, region, and area code
   */
  getMatchInfo(leadPhoneNumber) {
    const areaCode = this.extractAreaCode(leadPhoneNumber);
    const match = this.areaCodeMap.get(areaCode);

    return {
      leadAreaCode: areaCode,
      matchedNumber: match ? match.number : this.fallbackNumber,
      region: match ? match.region : "Fallback",
      isFallback: !match,
    };
  }

  /**
   * Get all available phone numbers and their configurations
   * @returns {Array} Array of phone number configurations
   */
  getAllNumbers() {
    return this.phoneNumbers;
  }

  /**
   * Get statistics about area code coverage
   * @returns {Object} Statistics object
   */
  getStats() {
    return {
      totalNumbers: this.phoneNumbers.length,
      uniqueAreaCodes: this.areaCodeMap.size,
      areaCodes: Array.from(this.areaCodeMap.keys()),
      regions: this.phoneNumbers.map((p) => p.region),
      fallbackNumber: this.fallbackNumber,
    };
  }
}

module.exports = new PhoneMatcherService();
