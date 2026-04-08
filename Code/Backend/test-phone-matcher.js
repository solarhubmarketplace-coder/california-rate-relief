#!/usr/bin/env node

/**
 * Test script for Phone Matcher Service
 * Tests area code matching logic for local presence dialing
 */

const phoneMatcher = require("./src/services/phone-matcher.service");

console.log("========================================");
console.log("📞 PHONE MATCHER SERVICE TEST");
console.log("========================================\n");

// Display configuration
console.log("📋 Configuration:");
const stats = phoneMatcher.getStats();
console.log(`  Total Numbers: ${stats.totalNumbers}`);
console.log(`  Unique Area Codes: ${stats.uniqueAreaCodes}`);
console.log(`  Area Codes: ${stats.areaCodes.join(", ")}`);
console.log(`  Fallback Number: ${stats.fallbackNumber}`);
console.log("\n");

// Test cases
const testCases = [
  { phone: "+16195551234", expected: "619", region: "San Diego" },
  { phone: "+19515551234", expected: "951", region: "Inland Empire" },
  { phone: "+18185551234", expected: "818", region: "Los Angeles" },
  { phone: "+19495551234", expected: "949", region: "Orange County" },
  { phone: "+19255551234", expected: "925", region: "Bay Area" },
  { phone: "+12125551234", expected: "fallback", region: "Unknown (NYC)" },
  { phone: "+13105551234", expected: "310", region: "Los Angeles (310)" },
  { phone: "+17145551234", expected: "714", region: "Orange County (714)" },
  { phone: "+14155551234", expected: "415", region: "Bay Area (415 SF)" },
  { phone: "+19095551234", expected: "909", region: "Inland Empire (909)" },
];

console.log("🧪 Test Cases:");
console.log("========================================\n");

let passed = 0;
let failed = 0;

for (const testCase of testCases) {
  const matchInfo = phoneMatcher.getMatchInfo(testCase.phone);
  const localNumber = phoneMatcher.getLocalNumber(testCase.phone);

  const isExpectedFallback = testCase.expected === "fallback";
  const isActualFallback = matchInfo.isFallback;

  let testPassed = false;
  if (isExpectedFallback) {
    testPassed = isActualFallback;
  } else {
    testPassed = matchInfo.leadAreaCode === testCase.expected;
  }

  const status = testPassed ? "✅ PASS" : "❌ FAIL";
  if (testPassed) {
    passed++;
  } else {
    failed++;
  }

  console.log(`${status} | ${testCase.phone} (${testCase.region})`);
  console.log(`     Area Code: ${matchInfo.leadAreaCode || "N/A"}`);
  console.log(`     Matched: ${matchInfo.region}`);
  console.log(`     Number: ${localNumber}`);
  console.log(`     Is Fallback: ${matchInfo.isFallback}`);
  console.log("");
}

console.log("========================================");
console.log("📊 Test Results:");
console.log(`  ✅ Passed: ${passed}/${testCases.length}`);
console.log(`  ❌ Failed: ${failed}/${testCases.length}`);
console.log("========================================\n");

// Display all available numbers
console.log("📱 Available Phone Numbers:");
console.log("========================================");
const allNumbers = phoneMatcher.getAllNumbers();
for (const num of allNumbers) {
  console.log(`  ${num.number}`);
  console.log(`    Area Code: ${num.areaCode}`);
  console.log(`    Region: ${num.region}`);
  console.log(`    Cities: ${num.cities.join(", ")}`);
  console.log("");
}

if (failed === 0) {
  console.log("✅ All tests passed! Phone matcher is working correctly.\n");
  process.exit(0);
} else {
  console.log("❌ Some tests failed. Please review the configuration.\n");
  process.exit(1);
}
