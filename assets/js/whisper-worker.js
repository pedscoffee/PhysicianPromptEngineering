// Whisper Worker for AI Scribe Studio
// Uses Transformers.js to run Whisper locally in the browser

import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2';

// Skip local checks for models
env.allowLocalModels = false;

let transcriber = null;

// Listen for messages from the main thread
self.onmessage = async (event) => {
    const { type, audio, model } = event.data;

    if (type === 'load') {
        try {
            self.postMessage({ type: 'status', status: 'loading', message: `Initializing Whisper (${model})...` });

            transcriber = await pipeline('automatic-speech-recognition', `Xenova/whisper-${model}.en`, {
                progress_callback: (progress) => {
                    if (progress.status === 'progress') {
                        self.postMessage({
                            type: 'progress',
                            file: progress.file,
                            progress: progress.progress,
                            loaded: progress.loaded,
                            total: progress.total
                        });
                    }
                }
            });

            self.postMessage({ type: 'status', status: 'ready', message: 'Whisper is ready' });
        } catch (error) {
            self.postMessage({ type: 'status', status: 'error', message: error.message });
        }
    } else if (type === 'transcribe') {
        if (!transcriber) {
            self.postMessage({ type: 'status', status: 'error', message: 'Transcriber not initialized' });
            return;
        }

        try {
            self.postMessage({ type: 'status', status: 'transcribing', message: 'Transcribing audio...' });

            const start = performance.now();
            const result = await transcriber(audio, {
                chunk_length_s: 30,
                stride_length_s: 5,
                language: 'english',
                task: 'transcribe',
                return_timestamps: false,
            });
            const end = performance.now();

            self.postMessage({
                type: 'result',
                text: result.text,
                duration: ((end - start) / 1000).toFixed(2)
            });
        } catch (error) {
            self.postMessage({ type: 'status', status: 'error', message: error.message });
        }
    }
};
