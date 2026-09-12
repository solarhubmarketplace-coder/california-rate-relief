const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { PORT } = require("./config");
const errorHandler = require("./middleware/errorHandler");
const apiResponse = require("./utils/apiResponse");
const { requireStaff } = require('./middleware/requireStaff');
const requireTwilioSignature = require('./middleware/requireTwilioSignature');

// Routes
const leadRoutes = require("./routes/lead.routes");

const app = express();

// Middleware
app.use(helmet());

// CORS Configuration
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:8000",
    "https://sun-crm.aiovix.com",
    "https://www.ratereliefca.com",
    "https://ratereliefca.com",
    "https://api.ratereliefca.com"
  ],
  credentials: true, // Allow cookies and authorization headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Keep the exact bytes of the request body alongside the parsed object.
// Provider webhooks (Resend/Svix) sign the raw payload, so a signature can only
// be verified against the original bytes — re-serialising the parsed object
// changes key order and whitespace and the signature no longer matches.
app.use(
  express.json({
    verify: (req, _res, buf) => {
      if (buf && buf.length) req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Standard Response Middleware
app.use((req, res, next) => {
  res.apiResponse = (status, message, data, error) => {
    return apiResponse(res, status, message, data, error);
  };
  next();
});

// Health Check
app.get("/api/health", async (req, res) => {
  const health = { status: "ok", time: new Date() };

  // Test Supabase connectivity
  try {
    const { supabaseAdmin } = require("./lib/supabase");
    const { error } = await supabaseAdmin.from("leads").select("id").limit(1);
    health.supabase = error ? "error" : "connected";
    if (error) health.supabase_error = error.message;
  } catch (e) {
    health.supabase = "unreachable";
    health.supabase_error = e.message;
  }

  const httpStatus = health.supabase === "connected" ? 200 : 503;
  const message = httpStatus === 200 ? "Server is healthy" : "Degraded - Supabase unreachable";
  res.apiResponse(httpStatus, message, health);
});

// Explicit public intake and provider/customer callbacks. Everything mounted
// after requireStaff is private CRM/admin surface.
app.use('/api/intake', require('./routes/intake.routes'));
const trackingController = require('./controllers/tracking.controller');
const voiceController = require('./controllers/voice.controller');
const webhookController = require('./controllers/webhook.controller');
const googleAuthController = require('./controllers/google-auth.controller');
const leadController = require('./controllers/lead.controller');
const intakeController = require('./controllers/intake.controller');
// Temporary compatibility for the previously deployed flat form. Its daily,
// deterministic ID makes network retries safe while allowing a later resubmission.
app.post('/api/leads', intakeController.createLegacyIntake);
app.get('/api/track/:token', trackingController.handleTrackingClick);
// Historical email links are now read-only redirects, safe before staff auth.
app.get('/api/leads/convert/:leadId', leadController.handleLeadConversionClick);
app.get('/api/voice/twiml', requireTwilioSignature, voiceController.getTwiml);
app.post('/api/voice/twiml', requireTwilioSignature, voiceController.getTwiml);
app.post('/api/voice/voicemail', requireTwilioSignature, voiceController.handleVoicemail);
app.post('/api/voice/status/:leadId', requireTwilioSignature, voiceController.handleStatus);
app.post('/api/voice/recording-callback/:leadId', requireTwilioSignature, voiceController.handleRecordingCallback);
app.post('/api/webhook/sms', requireTwilioSignature, webhookController.webhookIncomingSms);
// Resend signs this raw request with Svix; it cannot present a staff bearer
// token. The controller fails closed when the signing secret or signature is
// absent, so this exact provider callback must stay ahead of requireStaff.
app.post('/api/webhook/resend', webhookController.webhookResendDelivery);
app.get('/api/auth/google/callback', googleAuthController.handleCallback);
app.put('/api/leads/:leadId/consent', leadController.publicOptOut);

app.use('/api', requireStaff);

// Private API Routes
app.use('/api/staff', require('./routes/staff.routes'));
app.use("/api/leads", leadRoutes);
app.use("/api/voice", require("./routes/voice.routes"));
app.use("/api/appointments", require("./routes/appointment.routes"));
app.use("/api/settings", require("./routes/settings.routes"));
app.use("/api/auth", require("./routes/google-auth.routes"));
app.use("/api/track", require("./routes/tracking.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/test", require("./routes/test.routes"));
app.use("/api/webhook", require("./routes/webhook.routes")); // ✨ NEW: Public webhook endpoint
app.use("/api/booking", require("./routes/booking.routes")); // ✨ NEW: Public booking confirmation API
app.use("/api/sms-logs", require("./routes/sms-logs.routes"));
app.use("/api/email-templates", require("./routes/email-templates.routes"));
app.use("/api/email-sequences", require("./routes/email-sequence.routes"));
app.use("/api/email-logs", require("./routes/email-logs.routes"));

// Error Handling
app.use(errorHandler);

const http = require("http");
const WebSocket = require("ws");
const socketService = require("./services/socket.service");

// Start Server
if (require.main === module) {
  const server = http.createServer(app);
  const wss = new WebSocket.Server({ noServer: true });
  const schedulerService = require("./services/scheduler.service");

  // Handle WebSocket Upgrade for /streams path
  server.on("upgrade", (request, socket, head) => {
    const pathname = new URL(request.url, `http://${request.headers.host}`)
      .pathname;

    console.log(`[WebSocket] Upgrade request received for path: ${pathname}`);

    if (pathname === "/streams") {
      console.log("[WebSocket] Handling upgrade for /streams");

      wss.handleUpgrade(request, socket, head, (ws) => {
        console.log(
          "[WebSocket] Upgrade successful, emitting connection event"
        );
        try {
          socketService.handleConnection(ws, request);
        } catch (error) {
          console.error("[WebSocket] Error in handleConnection:", error);
          ws.close(1011, "Internal server error");
        }
      });
    } else {
      console.log(
        `[WebSocket] Rejecting upgrade for unknown path: ${pathname}`
      );
      socket.destroy();
    }
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    // Start the auto-dial scheduler
    schedulerService.start();
    require('./services/owner-notification.service').start();
  });
}

module.exports = app;
