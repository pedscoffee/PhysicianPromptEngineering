
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2';

// Skip local checks for now
env.allowLocalModels = false;

// Define model
const TASK = 'automatic-speech-recognition';
const MODEL = 'Xenova/whisper-tiny.en'; // Tiny model for speed on mobile/web. Can swap for base/small.

let transcriber = null;

// Listen for messages from the main thread
self.addEventListener('message', async (event) => {
    const { type, audio, model } = event.data;

    if (type === 'load') {
        try {
            self.postMessage({ status: 'loading', message: 'Loading model...' });

            transcriber = await pipeline(TASK, model || MODEL, {
                quantized: true,
                progress_callback: (data) => {
                    // Only track 'initiate' or 'progress'
                    if (data.status === 'progress') {
                        self.postMessage({
                            status: 'progress',
                            progress: data.progress,
                            file: data.file
                        });
                    }
                }
            });

            self.postMessage({ status: 'ready', message: 'Model loaded successfully.' });
        } catch (error) {
            self.postMessage({ status: 'error', message: error.message });
        }
    }

    if (type === 'transcribe') {
        if (!transcriber) {
            self.postMessage({ status: 'error', message: 'Model not loaded yet.' });
            return;
        }

        try {
            self.postMessage({ status: 'transcribing' });

            // output is { text: "..." }
            const output = await transcriber(audio, {
                chunk_length_s: 30,
                stride_length_s: 5,
                language: 'english',
                task: 'transcribe',
                return_timestamps: true
            });

            self.postMessage({
                status: 'complete',
                output: output
            });
        } catch (error) {
            self.postMessage({ status: 'error', message: error.message });
        }
    }
});
