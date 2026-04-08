# Test Scripts

This folder contains utility scripts for testing and debugging the voice call system.

## test-openai-realtime.js

Standalone script to test the OpenAI Realtime API audio generation **without Twilio**.

### Usage

```bash
cd sun-speed-crm-backend
node scripts/test-openai-realtime.js
```

### What It Does

1. Connects directly to OpenAI Realtime WebSocket API
2. Configures session with `g711_ulaw` audio format (same as Twilio)
3. Sends a test prompt to generate AI speech
4. Collects all audio chunks
5. Saves to WAV file in `recordings/` folder

### Expected Output

```
============================================================
OpenAI Realtime API Audio Test
============================================================
Audio Format: g711_ulaw
Voice: alloy
Test Prompt: "Hello! This is a test..."
============================================================

[1/5] Connecting to OpenAI Realtime API...
[2/5] ✓ Connected to OpenAI Realtime API
[3/5] ✓ Session created: sess_xxx
[4/5] Sending text prompt to generate audio...
      Received audio chunk #1 (1068 chars)
      Received audio chunk #2 (1600 chars)
      ...
[5/5] ✓ Response completed!
      Total audio chunks: 56

Saving audio file...
  ✅ Audio saved successfully!
  📁 File: recordings/test-openai-audio_2024-12-22T12-30-00-000Z.wav
  📊 Size: 14.52 KB
  ⏱️  Duration: ~1.81 seconds
```

### Troubleshooting

**"OPENAI_API_KEY environment variable is not set"**
- Make sure your `.env` file has `OPENAI_API_KEY=sk-...`

**Audio file is very small (< 1KB)**
- Check OpenAI API key has access to Realtime API
- Check for error messages in console output

**WebSocket Error**
- Verify internet connection
- Check if OpenAI API is accessible
