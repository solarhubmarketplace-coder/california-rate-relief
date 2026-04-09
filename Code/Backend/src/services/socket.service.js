const WebSocket = require("ws");

const fs = require("fs");

const path = require("path");

const config = require("../config");
const { OPENAI_API_KEY, LIVE_TRANSFER_NUMBER } = config;
const voiceService = require("./voice.service");

const appointmentService = require("./appointment.service");

const { tools } = require("../tools/definitions");

const aiAnalysisService = require("./ai-analysis.service");

const contextService = require("./context.service");
const { supabaseAdmin } = require("../lib/supabase");
const calendarService = require("./calendar.service");

const knowledgeBaseService = require("./knowledge-base.service");

const callLogService = require("./call-log.service");

const {
  AI_VOICE,
  AI_SYSTEM_PROMPT_INITIAL_CALL,
  AI_SYSTEM_PROMPT_FOLLOWUP_90_DAY,
} = require("../config/scripts");

// Directory for logging
const LOGS_DIR = path.join(__dirname, "../../logs");

// Ensure logs directory exists
if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
}

// Constants - AI prompts are now imported from scripts.js
const SYSTEM_MESSAGE = AI_SYSTEM_PROMPT_INITIAL_CALL;
const VOICE = AI_VOICE;

// Color codes for console

const LOG_PREFIX = {
  TWILIO: "[TWILIO]",

  OPENAI: "[OPENAI]",

  AUDIO: "[AUDIO]",

  TOOL: "[TOOL]",

  ERROR: "[ERROR]",

  STATE: "[STATE]",

  DEBUG: "[DEBUG]",
};

/**

 * Get timestamp for logging

 */

const getTimestamp = () => {
  return new Date().toISOString();
};

/**

 * Debug logger - logs to both console and file

 */

class DebugLogger {
  constructor(callSid) {
    this.callSid = callSid || "unknown";

    this.startTime = Date.now();

    this.logBuffer = [];

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    this.logFilePath = path.join(
      LOGS_DIR,

      `call_${this.callSid}_${timestamp}.log`
    );
  }

  log(prefix, message, data = null) {
    const timestamp = getTimestamp();

    const elapsed = Date.now() - this.startTime;

    let logLine = `[${timestamp}] [+${elapsed}ms] ${prefix} ${message}`;

    if (data) {
      logLine += ` | DATA: ${typeof data === "object" ? JSON.stringify(data) : data
        }`;
    }

    console.log(logLine);

    this.logBuffer.push(logLine);

    // Flush to file periodically

    if (this.logBuffer.length >= 10) {
      this.flush();
    }
  }

  error(message, error = null) {
    const timestamp = getTimestamp();

    const elapsed = Date.now() - this.startTime;

    let logLine = `[${timestamp}] [+${elapsed}ms] ${LOG_PREFIX.ERROR} â ${message}`;

    if (error) {
      logLine += ` | ERROR: ${error.message || error}`;

      if (error.stack) {
        logLine += `\nSTACK: ${error.stack}`;
      }
    }

    console.error(logLine);

    this.logBuffer.push(logLine);

    this.flush();
  }

  flush() {
    if (this.logBuffer.length > 0) {
      const data = this.logBuffer.join("\n") + "\n";
      this.logBuffer = [];
      // SPEED FIX: Use async write to avoid blocking the event loop during calls
      fs.promises.appendFile(this.logFilePath, data).catch((e) => {
        console.error(`Failed to write to log file: ${e.message}`);
      });
    }
  }

  close() {
    this.flush();

    this.log(LOG_PREFIX.DEBUG, `Log file saved: ${this.logFilePath}`);
  }
}

/**

 * Handle incoming WebSocket connection from Twilio

 * @param {WebSocket} connection - The WebSocket connection

 * @param {express.Request} req - The HTTP request

 */

const handleConnection = (connection, req) => {
  // Initialize logger (callSid will be updated when we receive it)

  let logger = new DebugLogger("pending");

  logger.log(LOG_PREFIX.TWILIO, `New WebSocket connection: ${req.url}`);

  // State

  let leadId = null;

  let streamSid = null;

  let latestMediaTimestamp = 0;

  let markQueue = [];

  let audioChunksReceived = 0;

  let audioChunksSent = 0;

  let isOpenAIConnected = false;

  let sessionConfigured = false;

  let lastAudioTime = Date.now();

  let commitTimeout = null;

  let callSid = null;

  let lastAudioEventTime = Date.now();

  let twilioAudioChunks = [];
  let isCollectingAudio = false;
  let openAIAudioChunks = []; // Keep for response completion tracking
  let audioBuffer = []; // â¨ FIX: Buffer audio chunks before OpenAI is ready

  // â¨ PHASE 3: Context loading state
  let contextualSystemMessage = null; // Will be set when context loads
  let contextLoadingComplete = false; // Flag to track if context loading finished
  let greetingTriggered = false; // Prevent double greeting
  let waitingForContextUpdate = false; // Wait for session update before greeting
  let vadResetPending = false; // â¨ FIX: Prevent multiple rapid VAD resets
  let vadResetTimeout = null; // â¨ FIX: Debounce VAD resets
  let greetingInProgress = false; // â¨ FIX: Protect greeting audio from being cleared by early VAD detection
  let greetingPart1Done = false; // Track two-part greeting: "Hello?" then listen then full intro
  let greetingPart2Timer = null; // Fallback timer for intro if no speech detected after "Hello?"

  // â¨ PHASE 2: Conversation transcript & context

  let conversationTranscript = [];

  let conversationContext = {
    customer_interests: [],

    objections_raised: [],

    objections_resolved: [],

    key_topics: [],

    sentiment: "neutral",

    call_outcome: "incomplete",

    // â¨ Session Memory: Qualification state tracking
    qualification: {
      homeowner: null,       // true/false/null
      bill_amount: null,     // extracted dollar amount
      credit_score: null,    // "above_650" / "below_650" / "unsure" / null
      roof_shade: null,      // "good" / "issues" / null
      step_reached: 0,       // 0=none, 1=homeowner, 2=bill, 3=credit, 4=roof
    },
  };

  // â¨ COST TRACKING: Track all OpenAI API usage and costs

  let costTracking = {
    realtime_tokens: 0,

    realtime_cost: 0,

    analysis_tokens: 0,

    analysis_cost: 0,

    summary_tokens: 0,

    summary_cost: 0,

    rag_searches: 0,

    rag_tokens: 0,

    rag_cost: 0,

    total_cost: 0,
  };

  // ========================================

  // STEP 1: Connect to OpenAI Realtime API

  // ========================================

  logger.log(LOG_PREFIX.OPENAI, "Connecting to OpenAI Realtime API...");

  let openAI;

  try {
    openAI = new WebSocket(
      "wss://api.openai.com/v1/realtime?model=gpt-realtime-1.5",

      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,

          "OpenAI-Beta": "realtime=v1",
        },
      }
    );

    logger.log(LOG_PREFIX.OPENAI, "WebSocket created, waiting for connection...");

    // â¨ FIX: 10s connection timeout - terminate if OpenAI never connects
    var openAIConnectTimeout = setTimeout(() => {
      if (!isOpenAIConnected) {
        logger.error("OpenAI WebSocket connection timed out after 10s");
        try { openAI.terminate(); } catch (e) { /* ignore */ }
        try { connection.close(1011, "OpenAI connection timeout"); } catch (e) { /* ignore */ }
      }
    }, 10000);
  } catch (error) {
    logger.error("Failed to create OpenAI WebSocket", error);

    connection.close(1011, "Failed to connect to OpenAI");

    return;
  }

  // ========================================

  // STEP 2: OpenAI WebSocket Events

  // ========================================

  openAI.on("open", () => {
    isOpenAIConnected = true;
    clearTimeout(openAIConnectTimeout);
    logger.log(LOG_PREFIX.OPENAI, "Connected to OpenAI Realtime API");
  });

  openAI.on("message", async (data) => {
    try {
      const response = JSON.parse(data);

      const eventType = response.type;

      // Only log errors and important events (skip noisy per-chunk events)
      if (eventType === "error") {
        logger.log(LOG_PREFIX.OPENAI, `Event: ${eventType}`, response.error);
      }

      // ========================================

      // STEP 3: Handle session.created

      // ========================================

      if (eventType === "session.created") {
        logger.log(LOG_PREFIX.OPENAI, `Session created: ${response.session?.id}`);

        // ========================================
        // SPEED FIX: Do NOT send session.update here.
        // Wait for context loading to finish, then send a SINGLE session.update
        // with the final instructions (contextual or default). This eliminates
        // the redundant first round-trip that was always overwritten.
        // If context is already loaded (race condition: context finished before
        // session.created arrived), send immediately.
        // ========================================
        if (contextLoadingComplete) {
          waitingForContextUpdate = true;
          sendSessionUpdate(openAI, logger, contextualSystemMessage, { disableVAD: true });
        } else {
          logger.log(LOG_PREFIX.OPENAI, "Deferring session.update until context loads");
        }
      }

      // ========================================

      // STEP 4: Handle session.updated

      // ========================================

      if (eventType === "session.updated") {
        sessionConfigured = true;
        logger.log(LOG_PREFIX.OPENAI, `Session configured (voice: ${response.session?.voice}, tools: ${response.session?.tools?.length || 0})`);

        // â¨ FIX: Send any buffered audio chunks now that session is configured
        if (audioBuffer.length > 0 && openAI.readyState === WebSocket.OPEN) {
          for (const bufferedAudio of audioBuffer) {
            openAI.send(
              JSON.stringify({
                type: "input_audio_buffer.append",
                audio: bufferedAudio,
              })
            );
          }
          audioBuffer = []; // Clear buffer
        }

        // ========================================
        // FIX: Simplified greeting trigger logic
        // Trigger greeting when:
        // 1. We received waitingForContextUpdate confirmation, OR
        // 2. Context loading is complete and we haven't triggered yet
        // ========================================

        if (waitingForContextUpdate && !greetingTriggered) {
          waitingForContextUpdate = false;
          isCollectingAudio = true;
          greetingTriggered = true;
          greetingInProgress = true;
          openAIAudioChunks = [];

          if (openAI.readyState === WebSocket.OPEN && connection.readyState === WebSocket.OPEN) {
            // Two-part greeting: "Hello?" first, then LISTEN, then intro
            // Instead of a blind timer, we enable VAD after "Hello?" finishes
            // and wait for the person to respond. If silence for 2.5s, fire intro.
            logger.log(LOG_PREFIX.STATE, "Triggering greeting part 1: Hello?");
            openAI.send(JSON.stringify({
              type: "response.create",
              response: {
                modalities: ["text", "audio"],
                instructions: 'Say only "Hello?" in a relaxed, natural tone. Nothing else. Just "Hello?" like you just picked up and are checking if someone is there. Keep it casual, not overly cheerful.',
              },
            }));
            // Part 2 (full intro) is triggered in the response.completed handler
            // after VAD detects speech OR a 2.5s silence fallback fires.
          }
        }
      }

      // ========================================

      // STEP 5: Handle Audio Delta (AI SPEAKING)

      // ========================================

      if (
        (eventType === "response.audio.delta" ||
          eventType === "response.output_audio.delta") &&
        response.delta
      ) {
        audioChunksSent++;

        // Collect audio for saving

        if (isCollectingAudio && response.delta) {
          openAIAudioChunks.push(response.delta);
        }

        if (audioChunksSent === 1) {
          logger.log(LOG_PREFIX.AUDIO, "First audio chunk sent to Twilio");
        }

        if (!streamSid) {
          logger.error("Cannot send audio - streamSid is NULL!");

          return;
        }

        // Send audio to Twilio

        const audioDelta = {
          event: "media",

          streamSid: streamSid,

          media: { payload: response.delta },
        };

        try {
          connection.send(JSON.stringify(audioDelta));

          // IMPORTANT: Throttle 'mark' events to prevent Twilio buffer overflow
          // Twilio only supports 50 pending marks. OpenAI sends many small chunks.
          // Sending a mark every 20 chunks (~2 seconds) is sufficient for interruption handling.
          if (audioChunksSent % 20 === 0) {
            const markEvent = {
              event: "mark",
              streamSid: streamSid,
              mark: { name: `audio_${audioChunksSent}` },
            };
            connection.send(JSON.stringify(markEvent));
          }

          lastAudioEventTime = Date.now();
        } catch (sendError) {
          logger.error("Failed to send audio to Twilio", sendError);
        }
      }

      // ========================================

      // STEP 6: Handle response.done

      // ========================================

      if (eventType === "response.done") {
        if (response.response?.usage) {
          const tokens = response.response.usage.total_tokens;
          const REALTIME_COST_PER_TOKEN = 0.015 / 1000;
          const cost = tokens * REALTIME_COST_PER_TOKEN;
          costTracking.realtime_tokens += tokens;
          costTracking.realtime_cost += cost;
          logger.log(LOG_PREFIX.OPENAI, `Response done (${response.response?.status}) | ${tokens} tokens | $${cost.toFixed(6)} | ${audioChunksSent} audio chunks`);
        } else {
          logger.log(LOG_PREFIX.OPENAI, `Response done (${response.response?.status}) | ${audioChunksSent} audio chunks`);
        }

        // Clear audio chunks (no longer saving locally)
        openAIAudioChunks = [];

        // â¨ PHASE 2: Analyze conversation context after each response
        if (conversationTranscript.length > 0) {
          conversationContext = analyzeConversationContext(
            conversationTranscript
          );
        }

        // ========================================

        // FIX: Reset VAD after AI response to prevent speech detection issues

        // Issue: After long AI responses, VAD sometimes fails to detect user speech

        // Solution: Force VAD reset with more aggressive detection parameters

        // ========================================

        if (response.response?.status === "completed") {
          if (greetingInProgress) {
            if (!greetingPart1Done) {
              // "Hello?" just finished — now LISTEN for a response
              greetingPart1Done = true;
              logger.log(LOG_PREFIX.STATE, "Greeting part 1 complete (Hello?) - enabling VAD to listen");

              // Enable VAD so we can hear them respond
              if (openAI.readyState === WebSocket.OPEN) {
                openAI.send(JSON.stringify({
                  type: "session.update",
                  session: {
                    turn_detection: {
                      type: "server_vad",
                      threshold: 0.4,
                      prefix_padding_ms: 300,
                      silence_duration_ms: 800, // Shorter silence = quicker pickup of their response
                    },
                  },
                }));
              }

              // Fallback: if nobody says anything for 2.5s, fire the intro anyway
              greetingPart2Timer = setTimeout(() => {
                if (openAI.readyState === WebSocket.OPEN && greetingInProgress) {
                  logger.log(LOG_PREFIX.STATE, "No response after Hello? - triggering intro (silence fallback)");
                  openAI.send(JSON.stringify({
                    type: "response.create",
                  }));
                }
              }, 2500);

              return;
            }

            // Part 2 (full intro) just finished — greeting sequence complete
            greetingInProgress = false;
            if (greetingPart2Timer) { clearTimeout(greetingPart2Timer); greetingPart2Timer = null; }
            logger.log(LOG_PREFIX.STATE, "Greeting complete - VAD active for conversation");

            // Ensure VAD is set to conversation mode
            if (openAI.readyState === WebSocket.OPEN) {
              openAI.send(JSON.stringify({
                type: "session.update",
                session: {
                  turn_detection: {
                    type: "server_vad",
                    threshold: 0.4,
                    prefix_padding_ms: 300,
                    silence_duration_ms: 1000,
                  },
                },
              }));
            }
          }


          // Debounce VAD resets for non-greeting responses
          clearTimeout(vadResetTimeout);
          vadResetTimeout = setTimeout(() => {
            if (!vadResetPending && openAI.readyState === WebSocket.OPEN) {
              vadResetPending = true;

              const resetVAD = {
                type: "session.update",
                session: {
                  turn_detection: {
                    type: "server_vad",
                    threshold: 0.4,
                    prefix_padding_ms: 300,
                    silence_duration_ms: 1000,
                  },
                },
              };

              openAI.send(JSON.stringify(resetVAD));

              // Reset flag after a short delay
              setTimeout(() => {
                vadResetPending = false;
              }, 500);
            }
          }, 1000); // Wait 1 second after response completes
        }
      }

      // ========================================

      // STEP 7: Handle Tool Calls

      // ========================================

      if (eventType === "response.function_call_arguments.done") {
        const { name, arguments: args } = response;

        logger.log(LOG_PREFIX.TOOL, `Function call: ${name}(${args})`);

        let result = null;

        try {
          const parsedArgs = JSON.parse(args);

          if (name === "checkAvailability") {
            logger.log(
              LOG_PREFIX.TOOL,

              `Checking availability for date: ${parsedArgs.date}`
            );

            result = await appointmentService.checkAvailability(
              parsedArgs.date
            );

            logger.log(
              LOG_PREFIX.TOOL,

              `Available slots: ${JSON.stringify(result)}`
            );

            // â¨ EXPLICIT STATE: Scheduling/Qualified
            await supabaseAdmin
              .from("leads")
              .update({ call_state: "qualified" })
              .eq("id", leadId);
          } else if (name === "bookAppointment") {
            // ========================================

            // IMPORTANT: Always use the session's leadId (UUID)

            // NOT parsedArgs.leadId - OpenAI might pass email/name instead!

            // ========================================

            if (!leadId) {
              throw new Error(
                "No leadId available in session - cannot book appointment"
              );
            }

            // â¨ CRITICAL FIX: Validate explicit confirmation before booking
            // Check recent conversation for explicit refusal or lack of confirmation
            const recentUserMessages = conversationTranscript
              .filter((msg) => msg.role === "user")
              .slice(-3) // Check last 3 user messages
              .map((msg) => msg.content.toLowerCase())
              .join(" ");

            const refusalPatterns = [
              "no, i can't",
              "can't do",
              "doesn't work",
              "not available",
              "can't make it",
              "i can't do",
              "no i can't",
              "that doesn't work",
            ];

            const hasRefusal = refusalPatterns.some((pattern) =>
              recentUserMessages.includes(pattern)
            );

            if (hasRefusal) {
              const errorMsg =
                "User explicitly refused this time. Do NOT book. Ask for alternative time instead.";
              logger.log(LOG_PREFIX.TOOL, `â ${errorMsg}`);
              throw new Error(errorMsg);
            }

            // Check for explicit confirmation
            const confirmationPatterns = [
              "yes",
              "sounds good",
              "that works",
              "perfect",
              "sure",
              "okay",
              "that's fine",
              "let's do it",
            ];

            const hasConfirmation = confirmationPatterns.some((pattern) =>
              recentUserMessages.includes(pattern)
            );

            if (!hasConfirmation && conversationTranscript.length > 5) {
              // If conversation is well underway but no clear confirmation, warn
              logger.log(
                LOG_PREFIX.TOOL,
                `â ï¸ No explicit confirmation found in recent messages. Proceeding but user should have confirmed.`
              );
            }

            logger.log(
              LOG_PREFIX.TOOL,

              `Booking appointment for lead: ${leadId} at ${parsedArgs.time}`
            );

            result = await appointmentService.createAppointment({
              leadId: leadId,

              time: parsedArgs.time,
              timezone: parsedArgs.timezone, // â¨ FIX: Pass timezone for correction
            });

            logger.log(
              LOG_PREFIX.TOOL,

              `Appointment created: ${JSON.stringify(result)}`
            );

            // ========================================
            // GOOGLE CALENDAR SYNC
            // ========================================
            try {
              // 1. Fetch Lead Info
              const { data: lead } = await supabaseAdmin
                .from("leads")
                .select("name, phone, email")
                .eq("id", leadId)
                .single();

              const leadName = lead ? lead.name : "Unknown Lead";
              const leadPhone = lead ? lead.phone : "N/A";

              // 2. Calculate End Time (15 mins)
              const startTime = new Date(parsedArgs.time);
              const endTime = new Date(
                startTime.getTime() + 15 * 60000
              ).toISOString();

              // 3. Create Event
              await calendarService.createEvent({
                summary: `Solar Consultation: ${leadName}`,
                description: `Phone: ${leadPhone}\nLead ID: ${leadId}`,
                startTime: parsedArgs.time,
                endTime: endTime,
              });

              logger.log(LOG_PREFIX.TOOL, "ð Google Calendar event created!");
            } catch (err) {
              logger.error(`â Google Calendar Sync Failed: ${err.message}`);
              // Don't throw - allow call to continue
            }

            // ========================================

            // UPDATE LEAD STATUS TO 'converted'

            // This is the final stage of the lead funnel

            // ========================================

            await supabaseAdmin

              .from("leads")

              .update({ status: "converted", call_state: "converted" })

              .eq("id", leadId);

            logger.log(LOG_PREFIX.TOOL, `Lead status updated to: converted`);
          } else if (name === "search_knowledge_base") {
            // ========================================

            // ð SERVER-SIDE RAG: Search Knowledge Base

            // ========================================

            logger.log(
              LOG_PREFIX.TOOL,

              `[RAG] Searching knowledge base for: "${parsedArgs.query}"`
            );

            const searchStartTime = Date.now();

            result = await knowledgeBaseService.searchKnowledgeBase(
              parsedArgs.query,

              3 // Top 3 results
            );

            const searchDuration = Date.now() - searchStartTime;

            // Track RAG usage (estimate: ~500 tokens per search)

            costTracking.rag_searches += 1;

            const estimatedTokens = 500;

            const estimatedCost = (estimatedTokens * 0.00015) / 1000; // gpt-4o-mini embedding cost

            costTracking.rag_tokens += estimatedTokens;

            costTracking.rag_cost += estimatedCost;

            logger.log(
              LOG_PREFIX.TOOL,

              `[RAG] Search completed in ${searchDuration}ms | Est. tokens: ${estimatedTokens} | Cost: $${estimatedCost.toFixed(
                6
              )}`
            );

            if (result.success) {
              logger.log(
                LOG_PREFIX.TOOL,

                `[RAG] â Found relevant information (${result.content.length} chars)`
              );

              logger.log(
                LOG_PREFIX.TOOL,

                `[RAG] Preview: ${result.content.substring(0, 150)}...`
              );
            } else {
              logger.log(LOG_PREFIX.TOOL, `[RAG] â ï¸ No results found`);
            }
          } else if (name === "transferCall") {
            // ... existing transfer logic ...
            logger.log(
              LOG_PREFIX.TOOL,
              `Initiating Live Transfer. Reason: ${parsedArgs.reason}`
            );

            // Check if we have callSid
            if (!callSid) {
              logger.error("Cannot transfer call - No Call SID available");
              result = { success: false, error: "No Call SID" };
            } else {
              try {
                logger.log(
                  LOG_PREFIX.TOOL,
                  `Transferring to: ${LIVE_TRANSFER_NUMBER}`
                );

                await voiceService.transferCall(callSid, LIVE_TRANSFER_NUMBER);

                // â¨ CRITICAL FIX: Stop AI interaction immediately
                logger.log(
                  LOG_PREFIX.TOOL,
                  "â Transfer initiated - Closing AI session to prevent audio race conditions"
                );

                // Close connections explicitly
                if (openAI && openAI.readyState === WebSocket.OPEN)
                  openAI.close();
                if (connection && connection.readyState === WebSocket.OPEN)
                  connection.close();

                return; // â EXIT FUNCTION - do not send tool output or response.create
              } catch (err) {
                logger.error("Transfer failed", err);
                result = {
                  success: false,
                  error: "Transfer failed: " + err.message,
                };
              }
            }
          }

          const toolOutput = {
            type: "conversation.item.create",

            item: {
              type: "function_call_output",

              call_id: response.call_id,

              output: JSON.stringify(result),
            },
          };

          openAI.send(JSON.stringify(toolOutput));

          openAI.send(JSON.stringify({ type: "response.create" }));
        } catch (toolError) {
          logger.error("Tool execution failed", toolError);

          // â¨ FIX: Report error back to AI so it can tell the user
          if (openAI.readyState === WebSocket.OPEN) {
            const errorOutput = {
              type: "conversation.item.create",
              item: {
                type: "function_call_output",
                call_id: response.call_id,
                output: JSON.stringify({
                  success: false,
                  error: toolError.message || "Unknown error occurred",
                }),
              },
            };
            openAI.send(JSON.stringify(errorOutput));
            openAI.send(JSON.stringify({ type: "response.create" }));
          }
        }
      }

      // ========================================

      // STEP 8: Handle Speech Detection

      // ========================================

      if (eventType === "input_audio_buffer.speech_started") {
        if (greetingInProgress && greetingPart1Done) {
          // Person responded after "Hello?" — cancel the silence fallback timer
          // VAD will handle the turn naturally and trigger the intro response
          if (greetingPart2Timer) {
            clearTimeout(greetingPart2Timer);
            greetingPart2Timer = null;
            logger.log(LOG_PREFIX.STATE, "Speech detected after Hello? - letting VAD handle turn");
          }
        } else if (!greetingInProgress) {
          handleSpeechStarted(connection, streamSid, logger);
        }
        // During part 1 (Hello? still playing), ignore speech detection
      }

      if (
        eventType === "conversation.item.input_audio_transcription.completed"
      ) {
        const userText = response.transcript;
        if (userText && userText.trim()) {
          conversationTranscript.push({
            role: "user",
            content: userText,
            timestamp: new Date().toISOString(),
          });
          logger.log(LOG_PREFIX.OPENAI, `User: "${userText}"`);
        }
      }

      if (eventType === "response.audio_transcript.done") {
        const aiText = response.transcript;
        if (aiText && aiText.trim()) {
          conversationTranscript.push({
            role: "assistant",
            content: aiText,
            timestamp: new Date().toISOString(),
          });
          logger.log(LOG_PREFIX.OPENAI, `AI: "${aiText}"`);
        }
      }

      // ========================================

      // Handle Errors from OpenAI

      // ========================================

      if (eventType === "error") {
        logger.error("OpenAI API Error", response.error);
      }
    } catch (e) {
      logger.error("Error processing OpenAI message", e);
    }
  });

  openAI.on("error", (error) => {
    logger.error("OpenAI WebSocket Error", error);
  });

  openAI.on("close", (code, reason) => {
    isOpenAIConnected = false;
    clearTimeout(openAIConnectTimeout);
    audioBuffer = [];
    logger.log(LOG_PREFIX.OPENAI, `Disconnected (code: ${code})`);
  });

  // ========================================

  // STEP 9: Handle Twilio Events (Audio In)

  // ========================================

  connection.on("message", (message) => {
    try {
      const data = JSON.parse(message);

      switch (data.event) {
        case "connected":
          break;

        case "start":
          streamSid = data.start.streamSid;
          callSid = data.start.callSid;

          // Update logger with actual callSid
          logger = new DebugLogger(callSid);

          logger.log(LOG_PREFIX.TWILIO, `Stream started (call: ${callSid}, stream: ${streamSid})`);

          // â¨ FIX: Send clear event first to initialize Twilio's audio output buffer
          // In working calls, user speech triggers a 'clear' event which seems to initialize
          // the audio output path. Sending clear first may help establish the buffer.
          try {
            const clearEvent = {
              event: "clear",
              streamSid: streamSid,
            };
            connection.send(JSON.stringify(clearEvent));
          } catch (clearError) {
            logger.error("Failed to send clear event", clearError);
          }

          // Warmup silence to initialize Twilio audio path
          try {
            const silenceFrame = Buffer.alloc(160, 0xFF).toString("base64");
            for (let i = 0; i < 3; i++) {
              connection.send(
                JSON.stringify({
                  event: "media",
                  streamSid: streamSid,
                  media: { payload: silenceFrame },
                })
              );
            }
          } catch (warmupError) {
            logger.error("Failed to send warmup audio", warmupError);
          }

          // Extract custom parameters

          if (data.start.customParameters) {
            if (data.start.customParameters.leadId) {
              leadId = data.start.customParameters.leadId;
              logger.log(LOG_PREFIX.STATE, `Lead: ${leadId}`);

              const callTrigger = data.start.customParameters.trigger;
              if (callTrigger === "followup_90_day") {
                logger.log(LOG_PREFIX.STATE, "90-day follow-up call - using re-engagement prompt");
                // Note: contextualSystemMessage will be built with the 90-day prompt
                // in generateContextualSystemMessage below (with lead data injected)
              }

              // â¨ PHASE 3: Load previous call context and update session

              // â¨ SPEED FIX: Load context with PARALLEL DB queries
              (async () => {
                const contextStartTime = Date.now();
                try {
                  const [previousContext, leadResult] = await Promise.all([
                    contextService.getPreviousCallContext(leadId),
                    supabaseAdmin
                      .from("leads")
                      .select("phone, name, bill_amount, utility_provider, credit_score, address")
                      .eq("id", leadId)
                      .single(),
                  ]);

                  const contextMs = Date.now() - contextStartTime;

                  // â¨ CRITICAL FIX: Always build leadInfo and inject into prompt
                  // Even for new leads (first call), the personalized opener needs
                  // utility/bill/address data to drive 35% higher conversions.
                  let leadInfo = null;
                  const leadData = leadResult?.data;

                  if (leadData && leadData.name) {
                    const nameParts = (leadData.name || '').split(' ');
                    leadInfo = {
                      id: leadId,
                      name: leadData.name,
                      firstName: nameParts[0] || '',
                      lastName: nameParts.slice(1).join(' ') || '',
                      phone: leadData.phone,
                      bill_amount: leadData.bill_amount,
                      utility_provider: leadData.utility_provider,
                      credit_score: leadData.credit_score,
                      address: leadData.address,
                    };
                  } else if (leadData && leadData.phone) {
                    leadInfo = await contextService.getLeadByPhone(leadData.phone);
                  }

                  if (previousContext.has_previous_calls) {
                    logger.log(LOG_PREFIX.STATE, `Context loaded in ${contextMs}ms (${previousContext.total_previous_calls} previous calls)`);
                  } else {
                    logger.log(LOG_PREFIX.STATE, `Context loaded in ${contextMs}ms (new lead, injecting form data for personalized opener)`);
                  }

                  // Always generate contextual message â even for new leads
                  // so the AI can personalize with utility/bill data from the form
                  contextualSystemMessage =
                    contextService.generateContextualSystemMessage(
                      callTrigger === "followup_90_day" ? AI_SYSTEM_PROMPT_FOLLOWUP_90_DAY : SYSTEM_MESSAGE,
                      previousContext,
                      leadInfo
                    );
                } catch (error) {
                  logger.error("Failed to load context", error);
                } finally {
                  contextLoadingComplete = true;

                  // SPEED: Send the SINGLE session.update now (no redundant first one)
                  if (
                    isOpenAIConnected &&
                    openAI.readyState === WebSocket.OPEN &&
                    !greetingTriggered
                  ) {
                    waitingForContextUpdate = true;
                    sendSessionUpdate(openAI, logger, contextualSystemMessage, { disableVAD: true });
                  }
                }
              })();
            }
          }

          break;

        case "media":
          audioChunksReceived++;

          latestMediaTimestamp = data.media.timestamp;

          const currentTime = Date.now();

          const timeSinceLastAudio = currentTime - lastAudioTime;

          lastAudioTime = currentTime;

          // Collect Twilio audio for debugging

          if (twilioAudioChunks.length < 15000) {
            // Limit to prevent memory issues

            twilioAudioChunks.push(data.media.payload);
          }

          if (audioChunksReceived === 1) {
            logger.log(LOG_PREFIX.AUDIO, "First audio chunk received from Twilio");
          }

          // â¨ FIX: Buffer audio chunks if OpenAI not ready, then forward when ready
          if (openAI.readyState === WebSocket.OPEN && sessionConfigured) {
            // Send current chunk
            const audioAppend = {
              type: "input_audio_buffer.append",
              audio: data.media.payload,
            };
            openAI.send(JSON.stringify(audioAppend));

            if (audioBuffer.length > 0) {
              for (const bufferedAudio of audioBuffer) {
                openAI.send(
                  JSON.stringify({
                    type: "input_audio_buffer.append",
                    audio: bufferedAudio,
                  })
                );
              }
              audioBuffer = [];
            }
          } else {
            // â¨ FIX: Buffer audio chunks instead of dropping them
            if (audioBuffer.length < 100) {
              // Limit buffer size to prevent memory issues
              audioBuffer.push(data.media.payload);
            }
          }

          break;

        case "stop":
          logger.log(LOG_PREFIX.TWILIO, "Stream stopped");

          break;

        case "mark":
          if (markQueue.length > 0) {
            markQueue.shift();
          }

          break;
      }
    } catch (e) {
      logger.error("Error processing Twilio message", e);
    }
  });

  connection.on("close", async () => {
    audioBuffer = [];
    twilioAudioChunks = [];
    openAIAudioChunks = [];

    logger.log(LOG_PREFIX.TWILIO, `Connection closed (rx: ${audioChunksReceived}, tx: ${audioChunksSent} audio chunks)`);

    // â¨ PHASE 2: Save transcript and context to database

    if (conversationTranscript.length > 0 && callSid) {
      try {
        logger.log(LOG_PREFIX.STATE, `Saving transcript (${conversationTranscript.length} messages)...`);

        // â¨ SHORT-TERM ENHANCEMENT: Use AI-powered analysis (gpt-4o-mini)

        // Falls back to keyword-based if AI fails

        let finalContext = conversationContext;

        let summary = "";

        // Try AI analysis first (if enabled via env var)

        if (process.env.USE_AI_ANALYSIS === "true") {

          const aiResult = await aiAnalysisService.analyzeConversationWithAI(
            conversationTranscript
          );

          if (aiResult.success) {
            finalContext = { ...finalContext, ...aiResult.analysis };
            costTracking.analysis_tokens += aiResult.tokens_used;
            costTracking.analysis_cost += aiResult.cost_estimate;

            const summaryResult = await aiAnalysisService.generateEnhancedSummary(
              conversationTranscript, finalContext
            );

            if (summaryResult.success) {
              summary = summaryResult.summary;
              costTracking.summary_tokens += summaryResult.tokens_used;
              costTracking.summary_cost += (summaryResult.tokens_used * 0.00015) / 1000;
            } else {
              summary = generateCallSummary(conversationTranscript, finalContext);
            }
          } else {
            logger.log(LOG_PREFIX.STATE, "AI analysis failed, using keyword fallback");
            finalContext = aiAnalysisService.analyzeConversationKeywordBased(conversationTranscript);
            summary = generateCallSummary(conversationTranscript, finalContext);
          }
        } else {
          // AI analysis disabled, use keyword-based

          summary = generateCallSummary(
            conversationTranscript,

            conversationContext
          );
        }

        // Prepare database update

        const updates = {
          transcript: JSON.stringify(conversationTranscript),

          conversation_context: finalContext,

          ai_summary: summary,

          key_points: {
            interests: finalContext.customer_interests,

            objections: finalContext.objections_raised,

            resolved: finalContext.objections_resolved,

            outcome: finalContext.call_outcome,
          },

          status: "completed",
        };

        // Save to database

        await callLogService.updateCallLog(callSid, updates);

        logger.log(LOG_PREFIX.STATE, "Call data saved");

        // â¨ COST TRACKING: Calculate and log total cost

        costTracking.total_cost =
          costTracking.realtime_cost +
          costTracking.analysis_cost +
          costTracking.summary_cost +
          costTracking.rag_cost;

        // Prepare cost breakdown for database

        const costBreakdown = {
          realtime_api: {
            tokens: costTracking.realtime_tokens,

            cost: costTracking.realtime_cost,
          },

          rag_searches: {
            count: costTracking.rag_searches,

            tokens: costTracking.rag_tokens,

            cost: costTracking.rag_cost,
          },

          ai_analysis: {
            tokens: costTracking.analysis_tokens,

            cost: costTracking.analysis_cost,
          },

          ai_summary: {
            tokens: costTracking.summary_tokens,

            cost: costTracking.summary_cost,
          },

          total_cost: costTracking.total_cost,

          timestamp: new Date().toISOString(),
        };

        // Update database with cost breakdown

        await callLogService.updateCallLog(callSid, {
          cost_breakdown: costBreakdown,
        });

        logger.log(LOG_PREFIX.STATE, `Cost: $${costTracking.total_cost.toFixed(6)} (realtime: ${costTracking.realtime_tokens} tokens, RAG: ${costTracking.rag_searches} searches, analysis: ${costTracking.analysis_tokens} tokens)`);
      } catch (error) {
        logger.error("Error saving call data", error);
      }
    }

    if (openAI.readyState === WebSocket.OPEN) {
      openAI.close();
    }

    logger.close();
  });

  connection.on("error", (error) => {
    logger.error("Twilio WebSocket Error", error);
  });
};

const sendSessionUpdate = (openAI, logger, customInstructions = null, { disableVAD = false } = {}) => {
  // ========================================

  // Session configuration for OpenAI Realtime API

  // Using the CORRECT format that works

  // ========================================

  // ========================================

  const instructionBase = customInstructions || SYSTEM_MESSAGE;
  const now = new Date();
  const tz = config.BUSINESS_TIMEZONE;
  const dateContext = `
  ## CURRENT CONTEXT
  - **Current Date/Time:** ${now.toLocaleString("en-US", {
    timeZone: tz,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
  - **Your Timezone:** ${tz}
  `;

  const instructions = dateContext + "\n\n" + instructionBase;

  const sessionUpdate = {
    type: "session.update",

    session: {
      modalities: ["text", "audio"],

      instructions: instructions,

      voice: VOICE,

      input_audio_format: "g711_ulaw",

      output_audio_format: "g711_ulaw",

      input_audio_transcription: {
        model: "whisper-1",
      },

      temperature: 0.75,

      turn_detection: disableVAD ? null : {
        type: "server_vad",
        threshold: 0.4,
        prefix_padding_ms: 300,
        silence_duration_ms: 1000,
      },

      tools: tools,

      tool_choice: "auto",
    },
  };

  logger.log(LOG_PREFIX.OPENAI, `Sending session.update (voice: ${VOICE}, tools: ${tools.length}${customInstructions ? ', with context' : ''}${disableVAD ? ', VAD off' : ''})`);

  openAI.send(JSON.stringify(sessionUpdate));
};

const handleSpeechStarted = (connection, streamSid, logger) => {
  try {
    const clearAudio = {
      event: "clear",

      streamSid: streamSid,
    };

    connection.send(JSON.stringify(clearAudio));
  } catch (error) {
    logger.error("Failed to send clear event", error);
  }
};

/**
  
   * â¨ PHASE 2: Analyze conversation context
  
   * Extracts customer interests, objections, sentiment from transcript
  
   */

const analyzeConversationContext = (transcript) => {
  const context = {
    customer_interests: [],

    objections_raised: [],

    objections_resolved: [],

    key_topics: [],

    sentiment: "neutral",

    call_outcome: "incomplete",

    qualification: {
      homeowner: null,
      bill_amount: null,
      credit_score: null,
      roof_shade: null,
      step_reached: 0,
    },
  };

  if (!transcript || transcript.length === 0) return context;

  // Combine all text for analysis

  const fullText = transcript

    .map((msg) => msg.content)

    .join(" ")

    .toLowerCase();

  // Detect interests

  const interestKeywords = [
    "interested",

    "tell me more",

    "how much",

    "savings",

    "cost",

    "installation",

    "solar panels",

    "benefits",

    "incentives",

    "rebates",
  ];

  interestKeywords.forEach((keyword) => {
    if (
      fullText.includes(keyword) &&
      !context.customer_interests.includes(keyword)
    ) {
      context.customer_interests.push(keyword);
    }
  });

  // Detect objections

  const objectionKeywords = [
    "expensive",

    "too much",

    "not sure",

    "concerned",

    "worried",

    "problem",

    "not interested",

    "maybe later",
  ];

  objectionKeywords.forEach((keyword) => {
    if (fullText.includes(keyword)) {
      context.objections_raised.push(keyword);
    }
  });

  // Detect resolution

  if (
    fullText.includes("makes sense") ||
    fullText.includes("good point") ||
    fullText.includes("understand")
  ) {
    context.objections_resolved = [...context.objections_raised];
  }

  // Detect key topics

  const topicKeywords = [
    "solar",

    "appointment",

    "schedule",

    "installation",

    "savings",

    "cost",

    "financing",

    "ppa",

    "lease",
  ];

  topicKeywords.forEach((keyword) => {
    if (fullText.includes(keyword) && !context.key_topics.includes(keyword)) {
      context.key_topics.push(keyword);
    }
  });

  // Detect sentiment

  const positiveWords = [
    "great",

    "excellent",

    "good",

    "interested",

    "yes",

    "sure",

    "sounds good",
  ];

  const negativeWords = [
    "no",

    "not interested",

    "expensive",

    "don't",

    "can't",

    "won't",
  ];

  const positiveCount = positiveWords.filter((word) =>
    fullText.includes(word)
  ).length;

  const negativeCount = negativeWords.filter((word) =>
    fullText.includes(word)
  ).length;

  if (positiveCount > negativeCount + 2) {
    context.sentiment = "positive";
  } else if (negativeCount > positiveCount + 2) {
    context.sentiment = "negative";
  }

  // Detect call outcome

  if (fullText.includes("appointment") && fullText.includes("confirmed")) {
    context.call_outcome = "appointment_booked";
  } else if (
    fullText.includes("call back") ||
    fullText.includes("think about it")
  ) {
    context.call_outcome = "callback_requested";
  } else if (fullText.includes("not interested")) {
    context.call_outcome = "not_interested";
  } else if (transcript.length > 5) {
    context.call_outcome = "discussion_completed";
  }

  // â¨ Session Memory: Extract qualification data from conversation
  const userText = transcript
    .filter((msg) => msg.role === "user")
    .map((msg) => msg.content)
    .join(" ")
    .toLowerCase();

  // Homeowner detection
  if (userText.match(/\b(yes|yeah|i do|i own|we own|my house|my home)\b/) && fullText.includes("own")) {
    context.qualification.homeowner = true;
    context.qualification.step_reached = Math.max(context.qualification.step_reached, 1);
  } else if (userText.match(/\b(rent|renting|don't own|tenant|apartment)\b/)) {
    context.qualification.homeowner = false;
  }

  // Bill amount extraction (look for dollar amounts in user speech)
  const billMatch = userText.match(/\$?\b(\d{2,4})\b(?:\s*(?:dollars?|bucks|a month|monthly|per month))?/);
  if (billMatch && fullText.includes("bill")) {
    const amount = parseInt(billMatch[1], 10);
    if (amount >= 50 && amount <= 2000) {
      context.qualification.bill_amount = amount;
      context.qualification.step_reached = Math.max(context.qualification.step_reached, 2);
    }
  }

  // Credit score confidence
  if (fullText.includes("credit") || fullText.includes("650")) {
    if (userText.match(/\b(yes|yeah|confident|good|above|over 650|7\d\d|8\d\d)\b/)) {
      context.qualification.credit_score = "above_650";
      context.qualification.step_reached = Math.max(context.qualification.step_reached, 3);
    } else if (userText.match(/\b(no|not sure|unsure|below|under)\b/)) {
      context.qualification.credit_score = userText.includes("not sure") ? "unsure" : "below_650";
      context.qualification.step_reached = Math.max(context.qualification.step_reached, 3);
    }
  }

  // Roof/shade assessment
  if (fullText.includes("roof") || fullText.includes("shade") || fullText.includes("sun")) {
    if (userText.match(/\b(good sun|lots of sun|no shade|no trees|clear|full sun)\b/)) {
      context.qualification.roof_shade = "good";
      context.qualification.step_reached = Math.max(context.qualification.step_reached, 4);
    } else if (userText.match(/\b(shade|trees|blocked|not much sun)\b/)) {
      context.qualification.roof_shade = "issues";
      context.qualification.step_reached = Math.max(context.qualification.step_reached, 4);
    }
  }

  return context;
};

/**
 
 * â¨ PHASE 2: Generate call summary
 
 * Creates readable summary from transcript and context
 
 */

const generateCallSummary = (transcript, context) => {
  if (!transcript || transcript.length === 0) {
    return "No conversation recorded.";
  }

  const parts = [];

  // Call duration estimate

  parts.push(
    `Call had ${transcript.length} exchanges (${Math.ceil(
      transcript.length / 2
    )} back-and-forth).`
  );

  // Interests

  if (context.customer_interests.length > 0) {
    parts.push(
      `Customer showed interest in: ${context.customer_interests.join(", ")}.`
    );
  }

  // Objections

  if (context.objections_raised.length > 0) {
    parts.push(`Objections raised: ${context.objections_raised.join(", ")}.`);

    if (context.objections_resolved.length > 0) {
      parts.push("Agent addressed concerns.");
    }
  }

  // Topics

  if (context.key_topics.length > 0) {
    parts.push(`Key topics: ${context.key_topics.join(", ")}.`);
  }

  // Sentiment

  parts.push(`Overall sentiment: ${context.sentiment}.`);

  // Outcome

  parts.push(`Call outcome: ${context.call_outcome.replace(/_/g, " ")}.`);

  return parts.join(" ");
};

module.exports = {
  handleConnection,
};
