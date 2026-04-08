/**
 * AI-Powered Call Analysis Service
 * Uses gpt-4o-mini (cheapest model) for enhanced context analysis
 */

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Analyze conversation using GPT-4o-mini for better accuracy
 * Uses the cheapest model to keep costs low
 */
async function analyzeConversationWithAI(transcript) {
  try {
    // Format transcript for AI analysis
    const conversationText = transcript
      .map(
        (msg) => `${msg.role === "user" ? "Customer" : "AI"}: ${msg.content}`
      )
      .join("\n");

    const prompt = `Analyze this sales call transcript and extract the following information in JSON format:

{
  "sentiment": "positive" | "neutral" | "negative",
  "customer_interests": ["list of things customer showed interest in"],
  "objections_raised": ["list of objections or concerns"],
  "objections_resolved": ["list of objections that were addressed"],
  "key_topics": ["main topics discussed"],
  "call_outcome": "appointment_booked" | "interested" | "not_interested" | "callback_requested" | "discussion_completed",
  "entities": {
    "customer_name": "extracted name or null",
    "location": "extracted location or null",
    "system_preferences": ["any preferences mentioned like size, financing, etc"]
  },
  "intent": "information_seeking" | "ready_to_buy" | "price_shopping" | "just_browsing",
  "engagement_score": 1-10,
  "next_steps": "recommended next action"
}

Conversation:
${conversationText}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // CHEAPEST MODEL
      messages: [
        {
          role: "system",
          content:
            "You are a call analysis expert. Analyze sales calls and extract structured information. Always respond with valid JSON only, no markdown or extra text.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3, // Low temperature for consistent results
      max_tokens: 500, // Keep it small to save costs
    });

    const analysisText = response.choices[0].message.content.trim();

    // Remove markdown code blocks if present
    const jsonText = analysisText
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "");

    const analysis = JSON.parse(jsonText);

    return {
      success: true,
      analysis,
      tokens_used: response.usage.total_tokens,
      cost_estimate: (response.usage.total_tokens * 0.00015) / 1000, // gpt-4o-mini pricing
    };
  } catch (error) {
    console.error("AI analysis error:", error);
    return {
      success: false,
      error: error.message,
      fallback: true,
    };
  }
}

/**
 * Generate enhanced summary using GPT-4o-mini
 */
async function generateEnhancedSummary(transcript, context) {
  try {
    const conversationText = transcript
      .map(
        (msg) => `${msg.role === "user" ? "Customer" : "AI"}: ${msg.content}`
      )
      .join("\n");

    const prompt = `Write a concise 2-3 sentence summary of this sales call focusing on key outcomes and next steps:

${conversationText}

Context: ${JSON.stringify(context, null, 2)}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // CHEAPEST MODEL
      messages: [
        {
          role: "system",
          content:
            "You are a sales call summarizer. Write brief, actionable summaries.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
      max_tokens: 150,
    });

    return {
      success: true,
      summary: response.choices[0].message.content.trim(),
      tokens_used: response.usage.total_tokens,
    };
  } catch (error) {
    console.error("Summary generation error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Fallback to keyword-based analysis (original method)
 * Used when AI analysis fails or is disabled
 */
function analyzeConversationKeywordBased(transcript) {
  const fullText = transcript.map((msg) => msg.content.toLowerCase()).join(" ");

  // Interest keywords
  const interestKeywords = [
    "interested",
    "yes",
    "appointment",
    "schedule",
    "info",
    "details",
    "tell me more",
  ];
  const interests = interestKeywords.filter((keyword) =>
    fullText.includes(keyword)
  );

  // Objection keywords
  const objectionKeywords = [
    "expensive",
    "cost",
    "afford",
    "too much",
    "problem",
    "concern",
    "worry",
    "not sure",
  ];
  const objections = objectionKeywords.filter((keyword) =>
    fullText.includes(keyword)
  );

  // Topic keywords
  const topicKeywords = [
    "solar",
    "panel",
    "energy",
    "savings",
    "financing",
    "lease",
    "ppa",
    "appointment",
    "schedule",
  ];
  const topics = topicKeywords.filter((keyword) => fullText.includes(keyword));

  // Sentiment
  const positiveWords = ["great", "interested", "yes", "sure", "definitely"];
  const negativeWords = ["no", "not", "expensive", "problem", "concern"];
  const positiveCount = positiveWords.filter((word) =>
    fullText.includes(word)
  ).length;
  const negativeCount = negativeWords.filter((word) =>
    fullText.includes(word)
  ).length;

  let sentiment = "neutral";
  if (positiveCount > negativeCount + 2) sentiment = "positive";
  if (negativeCount > positiveCount + 2) sentiment = "negative";

  // Outcome
  let outcome = "discussion_completed";
  if (fullText.includes("appointment") || fullText.includes("schedule"))
    outcome = "interested";
  if (fullText.includes("not interested") || fullText.includes("no thanks"))
    outcome = "not_interested";
  if (fullText.includes("call back") || fullText.includes("later"))
    outcome = "callback_requested";

  return {
    sentiment,
    key_topics: topics,
    customer_interests: interests,
    objections_raised: objections,
    objections_resolved: [],
    call_outcome: outcome,
  };
}

module.exports = {
  analyzeConversationWithAI,
  generateEnhancedSummary,
  analyzeConversationKeywordBased,
};
