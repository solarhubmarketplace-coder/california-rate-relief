const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");
const { OPENAI_API_KEY } = require("../config");
const { supabaseAdmin } = require("../lib/supabase"); // Import supabaseAdmin

class KnowledgeBaseService {
  constructor() {
    this.openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    this.vectorStoreId = null;
    // ✨ In-memory RAG cache to avoid duplicate searches during same call
    this._cache = new Map();
    this._cacheTTL = 5 * 60 * 1000; // 5 minute TTL
  }

  /**
   * Upload PDFs and create vector store (RUN ONCE)
   * This creates a knowledge base that the AI can search during calls
   */
  async createKnowledgeBase() {
    console.log("=== Starting Knowledge Base Setup ===\n");

    const pdfFiles = [
      "Selling_Solar_PPAs__A_Knowledge_Base.pdf",
      "Solar_AI_Voice_Agent__Technical__Sales_Specification.pdf",
      "Solar_Appointment_Booking_Bots__Conversion_Metrics_Best_Practices__Common_Objections_(California_2.pdf",
    ];

    const fileIds = [];

    // Step 1: Upload each PDF file to OpenAI
    console.log("Step 1: Uploading PDF files to OpenAI...\n");
    for (const filename of pdfFiles) {
      try {
        const filePath = path.join(
          __dirname,
          "../../../Knowledge_base",
          filename
        );

        // Check if file exists
        if (!fs.existsSync(filePath)) {
          console.error(`❌ File not found: ${filePath}`);
          continue;
        }

        console.log(`Uploading: ${filename}`);
        const fileStream = fs.createReadStream(filePath);

        const file = await this.openai.files.create({
          file: fileStream,
          purpose: "assistants",
        });

        fileIds.push(file.id);
        console.log(`✅ Uploaded successfully → File ID: ${file.id}\n`);
      } catch (error) {
        console.error(`❌ Error uploading ${filename}:`, error.message);
      }
    }

    if (fileIds.length === 0) {
      throw new Error(
        "No files were uploaded successfully. Check file paths and OpenAI API key."
      );
    }

    console.log(`\n✅ Successfully uploaded ${fileIds.length} files\n`);

    // Step 2: Create Vector Store with uploaded files
    console.log("Step 2: Creating Vector Store...\n");

    // Check if beta API is available
    if (!this.openai.beta || !this.openai.beta.vectorStores) {
      console.log(
        "⚠️  Beta Vector Stores API not available in this OpenAI SDK version"
      );
      console.log(
        "Using alternative approach: returning file IDs for manual setup\n"
      );
      console.log("===========================================");
      console.log("✅ Files uploaded successfully!");
      console.log("File IDs:", fileIds);
      console.log("===========================================\n");
      console.log("📝 Manual Setup Required:");
      console.log("1. Go to: https://platform.openai.com/storage/files");
      console.log("2. Create a Vector Store and add these files");
      console.log("3. Copy the Vector Store ID");
      console.log("4. Add to .env: OPENAI_VECTOR_STORE_ID=vs_xxxxx\n");
      return null;
    }

    const vectorStore = await this.openai.beta.vectorStores.create({
      name: "California Solar Program Knowledge Base",
      file_ids: fileIds,
    });

    console.log("✅ Vector Store Created!\n");
    console.log("===========================================");
    console.log("Vector Store ID:", vectorStore.id);
    console.log("Name:", vectorStore.name);
    console.log("Files:", fileIds.length);
    console.log("===========================================\n");
    console.log("📝 IMPORTANT: Add this to your .env file:");
    console.log(`OPENAI_VECTOR_STORE_ID=${vectorStore.id}`);
    console.log("===========================================\n");

    return vectorStore.id;
  }

  /**
   * Get vector store ID from environment variable
   * @returns {string|null} Vector store ID
   */
  getVectorStoreId() {
    const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;

    if (!vectorStoreId) {
      console.warn(
        "[KnowledgeBase] OPENAI_VECTOR_STORE_ID not set in .env file"
      );
      return null;
    }

    return vectorStoreId;
  }

  /**
   * Check if knowledge base is configured
   * @returns {boolean}
   */
  isConfigured() {
    return !!this.getVectorStoreId();
  }

  /**
   * Get vector store details from OpenAI
   * @returns {Object} Vector store information
   */
  async getVectorStoreInfo() {
    const vectorStoreId = this.getVectorStoreId();

    if (!vectorStoreId) {
      throw new Error("Vector Store ID not configured");
    }

    try {
      const vectorStore = await this.openai.beta.vectorStores.retrieve(
        vectorStoreId
      );
      return vectorStore;
    } catch (error) {
      console.error(
        "[KnowledgeBase] Error retrieving vector store:",
        error.message
      );
      throw error;
    }
  }

  /**
   * 🔍 SERVER-SIDE RAG: Search knowledge base using Supabase Vector Search
   * This is called during live calls when AI needs specific information
   * @param {string} query - Search query from the AI
   * @param {number} topK - Number of results to return (default: 3)
   * @returns {Object} Search results with relevant text snippets
   */
  async searchKnowledgeBase(query, topK = 3) {
    const startTime = Date.now();
    console.log(`[RAG] 🔍 Searching knowledge base for: "${query}"`);

    // ✨ Check cache first (avoid duplicate embedding calls during same call)
    const cacheKey = query.toLowerCase().trim();
    const cached = this._cache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp) < this._cacheTTL) {
      console.log(`[RAG] ⚡ Cache hit for: "${query}" (${Date.now() - startTime}ms)`);
      return { ...cached.result, elapsed_ms: Date.now() - startTime, cached: true };
    }

    try {
      // 1. Generate Embedding for the query
      const embeddingResponse = await this.openai.embeddings.create({
        model: "text-embedding-3-small",
        input: query,
      });

      const queryEmbedding = embeddingResponse.data[0].embedding;
      const embeddingTokens = embeddingResponse.usage?.total_tokens || 0;

      // 2. Search Supabase via RPC
      // ✨ FIXED: Lowered threshold from 0.5 to 0.35 for better recall on natural speech queries
      const { data: documents, error } = await supabaseAdmin.rpc(
        "match_documents",
        {
          query_embedding: queryEmbedding,
          match_threshold: 0.35,
          match_count: topK,
        }
      );

      if (error) {
        throw new Error(`Supabase RPC error: ${error.message}`);
      }

      const elapsed = Date.now() - startTime;
      console.log(
        `[RAG] ✅ Search completed in ${elapsed}ms | Found: ${documents.length} docs | Embedding tokens: ${embeddingTokens}`
      );

      // 3. Format context for the AI
      const contextText = documents
        .map((doc, index) => `[Source ${index + 1}]: ${doc.content}`)
        .join("\n\n");

      const result = {
        success: true,
        query: query,
        content: contextText,
        citations: documents.length,
        elapsed_ms: elapsed,
        embedding_tokens: embeddingTokens,
      };

      // ✨ Store in cache
      this._cache.set(cacheKey, { result, timestamp: Date.now() });

      // Prune old cache entries periodically
      if (this._cache.size > 50) {
        const now = Date.now();
        for (const [key, val] of this._cache) {
          if (now - val.timestamp > this._cacheTTL) this._cache.delete(key);
        }
      }

      return result;
    } catch (error) {
      const elapsed = Date.now() - startTime;
      console.error(
        `[RAG] ❌ Search failed after ${elapsed}ms:`,
        error.message
      );

      return {
        success: false,
        error: error.message,
        query: query,
        elapsed_ms: elapsed,
      };
    }
  }

  // Deprecated methods for vector store management removed
}

module.exports = new KnowledgeBaseService();
