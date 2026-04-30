const WEBLLM_IMPORT_URL = "https://esm.run/@mlc-ai/web-llm";

const SYSTEM_PROMPT = `You help clinicians create reusable EMR dot phrase snippets.

Ask concise follow-up questions when the user's workflow is underspecified. When enough context is available, produce practical dot phrases.

Core task: Based on topics discussed, extract counseling, anticipatory guidance, and care instructions. Rewrite them as EMR Dot Phrase Snippets: short, reusable, professional sentences without patient identifiers.

Rules:
- Never include patient identifiers.
- Do not invent patient-specific diagnoses, medications, doses, or test results.
- Focus on counseling, anticipatory guidance, care instructions, result follow-up, workflow bottlenecks, and documentation reuse.
- Write short, professional sentences that can be pasted into an EMR.
- Prefer reusable snippets over long notes.
- Include suggested shortcut names that start with a dot.
- If the user asks for a set, return 4 to 8 snippets.

Output format when generating phrases:
## Dot Phrase Set: [short title]

.shortcut
Snippet text.

.shortcut
Snippet text.`;

const INITIAL_MESSAGE = `Tell me about a common condition, inbox message, counseling topic, or documentation bottleneck. I can ask a few questions, then draft a reusable dot phrase set.`;

const state = {
  engine: null,
  modelId: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
  isLoading: false,
  isGenerating: false,
  messages: [{ role: "system", content: SYSTEM_PROMPT }],
  latestOutput: "",
};

const els = {
  chat: document.getElementById("dotBuilderChat"),
  form: document.getElementById("dotBuilderForm"),
  input: document.getElementById("dotBuilderInput"),
  load: document.getElementById("dotBuilderLoad"),
  send: document.getElementById("dotBuilderSend"),
  reset: document.getElementById("dotBuilderReset"),
  model: document.getElementById("dotBuilderModel"),
  status: document.getElementById("dotBuilderStatus"),
  output: document.getElementById("dotBuilderOutput"),
  copy: document.getElementById("dotBuilderCopy"),
  download: document.getElementById("dotBuilderDownload"),
  chips: document.querySelectorAll(".dot-builder-chip[data-example]"),
};

function setStatus(text) {
  els.status.textContent = text;
}

function setBusy(isBusy) {
  els.load.disabled = isBusy || state.isGenerating;
  els.send.disabled = isBusy || state.isGenerating;
  els.model.disabled = isBusy || state.isGenerating;
}

function appendMessage(role, content, extraClass = "") {
  const message = document.createElement("div");
  message.className = `dot-builder-message ${role}${extraClass ? ` ${extraClass}` : ""}`;
  message.textContent = content;
  els.chat.appendChild(message);
  els.chat.scrollTop = els.chat.scrollHeight;
  return message;
}

function resetConversation() {
  state.messages = [{ role: "system", content: SYSTEM_PROMPT }];
  state.latestOutput = "";
  els.chat.innerHTML = "";
  els.output.textContent = "No dot phrases generated yet.";
  appendMessage("assistant", INITIAL_MESSAGE);
}

function extractReusableOutput(text) {
  const markerIndex = text.indexOf("## Dot Phrase Set:");
  return markerIndex >= 0 ? text.slice(markerIndex).trim() : text.trim();
}

function updateLatestOutput(text) {
  state.latestOutput = extractReusableOutput(text);
  els.output.textContent = state.latestOutput || "No dot phrases generated yet.";
}

async function loadModel() {
  if (state.isLoading) return;

  if (!("gpu" in navigator)) {
    appendMessage(
      "assistant",
      "This browser does not expose WebGPU. Try a current Chrome or Edge browser with hardware acceleration enabled.",
      "error"
    );
    setStatus("WebGPU is unavailable in this browser.");
    return;
  }

  const selectedModel = els.model.value;
  if (state.engine && selectedModel === state.modelId) {
    setStatus(`Model ready: ${state.modelId}`);
    return;
  }

  state.isLoading = true;
  setBusy(true);
  setStatus("Importing WebLLM...");

  try {
    const webllm = await import(WEBLLM_IMPORT_URL);
    const createEngine = webllm.CreateMLCEngine || webllm.createMLCEngine;

    if (!createEngine) {
      throw new Error("WebLLM engine factory was not found.");
    }

    state.modelId = selectedModel;
    state.engine = await createEngine(state.modelId, {
      initProgressCallback: (progress) => {
        const progressText = progress?.text || "Loading model files...";
        setStatus(progressText);
      },
    });

    setStatus(`Model ready: ${state.modelId}`);
  } catch (error) {
    console.error(error);
    state.engine = null;
    appendMessage(
      "assistant",
      `The local model did not finish loading. ${error.message || "Please refresh and try again."}`,
      "error"
    );
    setStatus("Model load failed.");
  } finally {
    state.isLoading = false;
    setBusy(false);
  }
}

async function ensureModelLoaded() {
  if (state.engine && els.model.value === state.modelId) return true;
  await loadModel();
  return Boolean(state.engine);
}

async function sendMessage(content) {
  const trimmed = content.trim();
  if (!trimmed || state.isGenerating) return;

  appendMessage("user", trimmed);
  state.messages.push({ role: "user", content: trimmed });
  els.input.value = "";

  const isReady = await ensureModelLoaded();
  if (!isReady) return;

  state.isGenerating = true;
  setBusy(true);
  setStatus("Generating...");

  const assistantMessage = appendMessage("assistant", "");
  let reply = "";

  try {
    const chunks = await state.engine.chat.completions.create({
      messages: state.messages,
      temperature: 0.4,
      top_p: 0.9,
      max_tokens: 900,
      stream: true,
    });

    for await (const chunk of chunks) {
      const delta = chunk.choices?.[0]?.delta?.content || "";
      if (!delta) continue;
      reply += delta;
      assistantMessage.textContent = reply;
      els.chat.scrollTop = els.chat.scrollHeight;
    }

    const finalReply = reply.trim();
    state.messages.push({ role: "assistant", content: finalReply });

    if (/\.([a-z][a-z0-9_-]*)/i.test(finalReply) || finalReply.includes("## Dot Phrase Set:")) {
      updateLatestOutput(finalReply);
    }

    setStatus(`Model ready: ${state.modelId}`);
  } catch (error) {
    console.error(error);
    assistantMessage.classList.add("error");
    assistantMessage.textContent = `Generation stopped. ${error.message || "Please try again."}`;
    setStatus("Generation failed.");
  } finally {
    state.isGenerating = false;
    setBusy(false);
    els.input.focus();
  }
}

async function copyLatestOutput() {
  if (!state.latestOutput) return;
  await navigator.clipboard.writeText(state.latestOutput);
  setStatus("Copied latest dot phrase set.");
}

function downloadLatestOutput() {
  if (!state.latestOutput) return;

  const blob = new Blob([state.latestOutput], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "dot-phrase-set.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setStatus("Downloaded latest dot phrase set.");
}

els.load.addEventListener("click", loadModel);

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage(els.input.value);
});

els.reset.addEventListener("click", () => {
  resetConversation();
  setStatus(state.engine ? `Model ready: ${state.modelId}` : "Ready to load the model.");
  els.input.focus();
});

els.copy.addEventListener("click", copyLatestOutput);
els.download.addEventListener("click", downloadLatestOutput);

els.chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    els.input.value = chip.dataset.example;
    els.input.focus();
  });
});

resetConversation();
