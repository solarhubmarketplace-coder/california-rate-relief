#!/usr/bin/env node

/**
 * Create Vector Store using direct API call
 * This bypasses SDK issues and creates the vector store directly
 */

const https = require("https");
require("dotenv").config();

const fileIds = [
  "file-Psu8Lm5Bkk79a2USBHkptU",
  "file-Rug2fj2UruiZeLmHp8WaNA",
  "file-29YAyyjKehviamFzSS8XQi",
];

const data = JSON.stringify({
  name: "Sun Speed Solar Knowledge Base",
  file_ids: fileIds,
});

const options = {
  hostname: "api.openai.com",
  port: 443,
  path: "/v1/vector_stores",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    "OpenAI-Beta": "assistants=v2",
  },
};

console.log("\n🚀 Creating Vector Store via Direct API Call...\n");

const req = https.request(options, (res) => {
  let responseData = "";

  res.on("data", (chunk) => {
    responseData += chunk;
  });

  res.on("end", () => {
    if (res.statusCode === 200 || res.statusCode === 201) {
      const vectorStore = JSON.parse(responseData);
      console.log("✅ Vector Store Created Successfully!\n");
      console.log("===========================================");
      console.log("Vector Store ID:", vectorStore.id);
      console.log("Name:", vectorStore.name);
      console.log("Files:", vectorStore.file_counts.total);
      console.log("===========================================\n");
      console.log("📝 IMPORTANT: Add this to your .env file:");
      console.log(`OPENAI_VECTOR_STORE_ID=${vectorStore.id}`);
      console.log("===========================================\n");
    } else {
      console.error("❌ Error creating vector store");
      console.error("Status:", res.statusCode);
      console.error("Response:", responseData);
    }
  });
});

req.on("error", (error) => {
  console.error("❌ Request error:", error);
});

req.write(data);
req.end();
