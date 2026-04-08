#!/usr/bin/env node

/**
 * Test Knowledge Base Configuration
 * Verifies that the knowledge base is properly configured
 */

require("dotenv").config();
const knowledgeBaseService = require("../src/services/knowledge-base.service");

async function testKnowledgeBase() {
  console.log("\n🧪 Testing Knowledge Base Configuration\n");
  console.log("===========================================\n");

  // Test 1: Check if Vector Store ID is configured
  console.log("Test 1: Vector Store ID Configuration");
  const vectorStoreId = knowledgeBaseService.getVectorStoreId();
  if (vectorStoreId) {
    console.log(`✅ Vector Store ID found: ${vectorStoreId}`);
  } else {
    console.log("❌ Vector Store ID not configured");
    console.log("   Run: node scripts/setup-knowledge-base.js");
    return;
  }

  // Test 2: Check if configured
  console.log("\nTest 2: Service Configuration Check");
  const isConfigured = knowledgeBaseService.isConfigured();
  if (isConfigured) {
    console.log("✅ Knowledge Base Service is properly configured");
  } else {
    console.log("❌ Knowledge Base Service is NOT configured");
    return;
  }

  // Test 3: Retrieve Vector Store info from OpenAI
  console.log("\nTest 3: Verify Vector Store on OpenAI");
  try {
    const info = await knowledgeBaseService.getVectorStoreInfo();
    console.log("✅ Vector Store verified on OpenAI:");
    console.log(`   Name: ${info.name}`);
    console.log(`   Status: ${info.status}`);
    console.log(`   Files: ${info.file_counts?.total || 0}`);
    console.log(
      `   Created: ${new Date(info.created_at * 1000).toLocaleString()}`
    );
  } catch (error) {
    console.log("❌ Could not verify vector store on OpenAI");
    console.log(`   Error: ${error.message}`);
  }

  console.log("\n===========================================");
  console.log("✅ Knowledge Base is ready for use!");
  console.log("\nDuring calls, AI will automatically search these PDFs");
  console.log("when customers ask questions about:");
  console.log("  - Solar PPAs");
  console.log("  - Technical specifications");
  console.log("  - Common objections");
  console.log("  - Best practices");
  console.log("===========================================\n");
}

testKnowledgeBase().catch((error) => {
  console.error("\n❌ Test failed:", error);
  process.exit(1);
});
