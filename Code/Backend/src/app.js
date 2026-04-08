const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { PORT } = require("./config");
const errorHandler = require("./middleware/errorHandler");
const apiResponse = require("./utils/apiResponse");

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

app.use(express.json());
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

// API Routes
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
  });
}

module.exports = app;
