const tools = [
  {
    type: "function",
    name: "checkAvailability",
    description: "Check available appointment slots for a given date",
    parameters: {
      type: "object",
      properties: {
        date: {
          type: "string",
          description:
            "The date to check availability for (ISO 8601 format, e.g. 2023-10-27)",
        },
      },
      required: ["date"],
    },
  },
  {
    type: "function",
    name: "bookAppointment",
    description: "Book an appointment for the lead. CRITICAL: Only call this tool AFTER the user has EXPLICITLY confirmed the appointment time. Do NOT book if the user said 'no', 'can't', 'doesn't work', or any refusal. Only book when user says 'yes', 'sounds good', 'that works', or similar clear confirmation.",
    parameters: {
      type: "object",
      properties: {
        leadId: {
          type: "string",
          description: "The UUID of the lead",
        },
        time: {
          type: "string",
          description: "The ISO 8601 timestamp of the appointment. Only use this if the user explicitly confirmed this exact time.",
        },
        timezone: {
          type: "string",
          description: "The IANA timezone of the lead (e.g. 'America/New_York', 'Asia/Karachi'). REQUIRED if known.",
        },
      },
      required: ["leadId", "time"],
    },
  },
  {
    type: "function",
    name: "search_knowledge_base",
    description:
      "Search the solar knowledge base for program information. Use for: net metering rules and credits, PPA vs lease comparisons, monthly PPA vs prepaid PPA, escalator rates (2.9%), NEM 3.0 rules, UCC-1 filing vs lien, tax credits (ITC 30%), battery storage, California utility rates (PG&E/SCE/SDG&E), installation process, financing options, and savings estimates. Call this tool when the customer asks ANY question about solar costs, how it works, or specific program details.",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description:
            'The search query to find relevant information in the knowledge base (e.g., "solar financing options", "PPA vs lease", "installation process")',
        },
      },
      required: ["query"],
    },
  },

  {
    type: "function",
    name: "transferCall",
    description: "Transfer the call to a human manager or agent. Use this when the caller explicitly asks to speak to a 'human', 'manager', 'Chad', or starts getting frustrated and demands a person. Also if they ask to be transferred.",
    parameters: {
      type: "object",
      properties: {
        reason: {
          type: "string",
          description: "The reason for the transfer (e.g., 'customer requested human', 'complex technical question')",
        },
      },
      required: ["reason"],
    },
  },
];

module.exports = { tools };
