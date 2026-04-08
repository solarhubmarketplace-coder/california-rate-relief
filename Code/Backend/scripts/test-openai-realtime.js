/**
 * OpenAI Realtime API Audio Test Script
 * 
 * This script tests the OpenAI Realtime API audio generation independently from Twilio.
 * It connects directly to OpenAI, sends a text prompt, and saves the generated audio.
 * 
 * Usage:
 *   node scripts/test-openai-realtime.js
 * 
 * Requirements:
 *   - OPENAI_API_KEY environment variable set (or in .env file)
 */

require('dotenv').config();
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

// Configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const RECORDINGS_DIR = path.join(__dirname, '../recordings');
const AUDIO_FORMAT = 'g711_ulaw';  // Same as Twilio uses
const VOICE = 'alloy';
const TEST_PROMPT = 'Hello! This is a test of the OpenAI Realtime API audio generation. If you can hear this message clearly, the audio system is working correctly.';

// Ensure recordings directory exists
if (!fs.existsSync(RECORDINGS_DIR)) {
    fs.mkdirSync(RECORDINGS_DIR, { recursive: true });
}

// Validate API key
if (!OPENAI_API_KEY) {
    console.error('❌ ERROR: OPENAI_API_KEY environment variable is not set!');
    console.error('   Set it in your .env file or export it:');
    console.error('   export OPENAI_API_KEY="sk-..."');
    process.exit(1);
}

console.log('='.repeat(60));
console.log('OpenAI Realtime API Audio Test');
console.log('='.repeat(60));
console.log(`Audio Format: ${AUDIO_FORMAT}`);
console.log(`Voice: ${VOICE}`);
console.log(`Test Prompt: "${TEST_PROMPT}"`);
console.log('='.repeat(60));
console.log('');

// Audio collection
const audioChunks = [];
let sessionId = null;
let isSessionConfigured = false;

// Connect to OpenAI Realtime API
console.log('[1/5] Connecting to OpenAI Realtime API...');
const ws = new WebSocket('wss://api.openai.com/v1/realtime?model=gpt-4o-mini-realtime-preview', {
    headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'realtime=v1',
    },
});

ws.on('open', () => {
    console.log('[2/5] ✓ Connected to OpenAI Realtime API');
    console.log('      Waiting for session.created event...');
});

ws.on('message', (data) => {
    try {
        const response = JSON.parse(data);
        const eventType = response.type;

        // Handle session.created
        if (eventType === 'session.created') {
            sessionId = response.session?.id;
            console.log(`[3/5] ✓ Session created: ${sessionId}`);
            console.log(`      Default format: input=${response.session?.input_audio_format}, output=${response.session?.output_audio_format}`);
            console.log('      Sending session.update to configure audio format...');

            // Configure session
            const sessionUpdate = {
                type: 'session.update',
                session: {
                    modalities: ['text', 'audio'],
                    voice: VOICE,
                    input_audio_format: AUDIO_FORMAT,
                    output_audio_format: AUDIO_FORMAT,
                    instructions: 'You are a helpful assistant. Respond to the user prompt with speech.',
                    turn_detection: null,  // Disable VAD for this test
                },
            };
            ws.send(JSON.stringify(sessionUpdate));
        }

        // Handle session.updated
        if (eventType === 'session.updated') {
            isSessionConfigured = true;
            console.log(`      ✓ Session configured: format=${response.session?.output_audio_format}, voice=${response.session?.voice}`);
            console.log('[4/5] Sending text prompt to generate audio...');

            // Send a conversation item with text (AI will speak it)
            const conversationItem = {
                type: 'conversation.item.create',
                item: {
                    type: 'message',
                    role: 'user',
                    content: [
                        {
                            type: 'input_text',
                            text: TEST_PROMPT
                        }
                    ]
                }
            };
            ws.send(JSON.stringify(conversationItem));

            // Trigger response generation
            ws.send(JSON.stringify({ type: 'response.create' }));
        }

        // Handle audio delta - COLLECT AUDIO
        if (eventType === 'response.audio.delta' && response.delta) {
            audioChunks.push(response.delta);
            if (audioChunks.length <= 3 || audioChunks.length % 20 === 0) {
                console.log(`      Received audio chunk #${audioChunks.length} (${response.delta.length} chars)`);
            }
        }

        // Handle response.done - SAVE AUDIO
        if (eventType === 'response.done') {
            console.log('[5/5] ✓ Response completed!');
            console.log(`      Total audio chunks: ${audioChunks.length}`);

            if (audioChunks.length > 0) {
                saveAudio();
            } else {
                console.log('      ⚠️ No audio chunks received!');
            }

            // Close connection
            setTimeout(() => {
                ws.close();
                console.log('');
                console.log('='.repeat(60));
                console.log('Test completed!');
                console.log('='.repeat(60));
                process.exit(0);
            }, 500);
        }

        // Handle errors
        if (eventType === 'error') {
            console.error(`❌ OpenAI Error: ${JSON.stringify(response.error)}`);
        }

    } catch (e) {
        console.error(`Error parsing message: ${e.message}`);
    }
});

ws.on('error', (error) => {
    console.error(`❌ WebSocket Error: ${error.message}`);
    process.exit(1);
});

ws.on('close', (code, reason) => {
    console.log(`WebSocket closed (code: ${code})`);
});

/**
 * Save collected audio chunks to WAV file
 * CORRECTLY decodes each base64 chunk separately, then concatenates buffers
 */
function saveAudio() {
    console.log('');
    console.log('Saving audio file...');

    // CORRECT WAY: Decode each chunk separately, then concatenate
    const buffers = audioChunks.map(chunk => Buffer.from(chunk, 'base64'));
    const audioBuffer = Buffer.concat(buffers);

    console.log(`  Total base64 chars: ${audioChunks.reduce((sum, c) => sum + c.length, 0)}`);
    console.log(`  Decoded buffer size: ${audioBuffer.length} bytes`);

    // Create WAV header for mu-law
    const sampleRate = 8000;
    const numChannels = 1;
    const wavHeader = createMuLawWavHeader(audioBuffer.length, sampleRate, numChannels);

    // Combine header and audio
    const wavFile = Buffer.concat([wavHeader, audioBuffer]);

    // Generate filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `test-openai-audio_${timestamp}.wav`;
    const filepath = path.join(RECORDINGS_DIR, filename);

    // Write file
    fs.writeFileSync(filepath, wavFile);

    const duration = (audioBuffer.length / sampleRate).toFixed(2);
    console.log('');
    console.log('  ✅ Audio saved successfully!');
    console.log(`  📁 File: ${filepath}`);
    console.log(`  📊 Size: ${(wavFile.length / 1024).toFixed(2)} KB`);
    console.log(`  ⏱️  Duration: ~${duration} seconds`);

    if (audioBuffer.length < 1000) {
        console.log('');
        console.log('  ⚠️  WARNING: Audio file is very small!');
        console.log('      This might indicate an issue with audio generation.');
    }
}

/**
 * Create WAV file header for mu-law audio
 */
function createMuLawWavHeader(dataLength, sampleRate, numChannels) {
    const header = Buffer.alloc(44);
    const byteRate = sampleRate * numChannels;
    const blockAlign = numChannels;

    // RIFF chunk descriptor
    header.write('RIFF', 0);
    header.writeUInt32LE(36 + dataLength, 4);
    header.write('WAVE', 8);

    // fmt sub-chunk
    header.write('fmt ', 12);
    header.writeUInt32LE(16, 16);
    header.writeUInt16LE(7, 20);  // AudioFormat 7 = mu-law
    header.writeUInt16LE(numChannels, 22);
    header.writeUInt32LE(sampleRate, 24);
    header.writeUInt32LE(byteRate, 28);
    header.writeUInt16LE(blockAlign, 32);
    header.writeUInt16LE(8, 34);  // BitsPerSample

    // data sub-chunk
    header.write('data', 36);
    header.writeUInt32LE(dataLength, 40);

    return header;
}

// Timeout after 30 seconds
setTimeout(() => {
    console.error('❌ Test timed out after 30 seconds');
    ws.close();
    process.exit(1);
}, 30000);
