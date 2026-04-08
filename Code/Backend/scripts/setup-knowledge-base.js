#!/usr/bin/env node

/**
 * Setup Knowledge Base Script
 *
 * This script uploads PDF documents to OpenAI and creates a Vector Store
 * that the AI can search during phone calls.
 *
 * Usage: node scripts/setup-knowledge-base.js
 *
 * Requirements:
 * - OpenAI API key in .env file (OPENAI_API_KEY)
 * - PDF files in Knowledge_base/ directory
 */

const knowledgeBaseService = require("../src/services/knowledge-base.service");

async function setupKnowledgeBase() {
  console.log("\n🚀 Sun Speed Solar - Knowledge Base Setup\n");
  console.log(
    "This will upload PDF documents to OpenAI and create a Vector Store."
  );
  console.log("The AI will be able to search these documents during calls.\n");

  try {
    const vectorStoreId = await knowledgeBaseService.createKnowledgeBase();

    console.log("✅ SUCCESS! Knowledge base created successfully!\n");
    console.log("Next Steps:");
    console.log("1. Copy the OPENAI_VECTOR_STORE_ID value above");
    console.log("2. Add it to your .env file in the backend directory");
    console.log("3. Restart your backend server");
    console.log(
      "4. The AI will now have access to the knowledge base during calls!\n"
    );

    process.exit(0);
  } catch (error) {
    console.error("\n❌ ERROR: Failed to setup knowledge base\n");
    console.error("Error:", error.message);

    if (error.message.includes("API key")) {
      console.error(
        "\n💡 Tip: Make sure OPENAI_API_KEY is set in your .env file"
      );
    }

    if (error.message.includes("not found")) {
      console.error(
        "\n💡 Tip: Make sure PDF files are in the Knowledge_base/ directory"
      );
    }

    console.error("\nFull error details:", error);
    process.exit(1);
  }
}

// Run the setup
setupKnowledgeBase();
