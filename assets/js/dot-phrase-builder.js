const WEBLLM_IMPORT_URL = "https://esm.run/@mlc-ai/web-llm";

const SYSTEM_PROMPT = `You help clinicians create reusable EMR dot phrase snippets through a short back-and-forth interview.

Default behavior:
1. First, ask 3 to 5 clarifying questions unless the user has already supplied enough detail.
2. Keep questions concrete and clinically practical. Ask about setting, audience, tone, common triggers, return precautions, and what the clinician repeats most often.
3. After the user answers, produce exactly three concise options that explore different reusable approaches to the same topic.
4. Do not produce a long library unless the user explicitly asks for more.

Core task: Based on topics discussed, extract counseling, anticipatory guidance, and care instructions. Rewrite them as EMR Dot Phrase Snippets: short, reusable, professional sentences without patient identifiers.

Rules:
- Never include patient identifiers.
- Do not invent patient-specific diagnoses, medications, doses, or test results.
- Focus on counseling, anticipatory guidance, care instructions, result follow-up, workflow bottlenecks, and documentation reuse.
- Write concise, professional sentences that can be pasted into an EMR.
- Prefer reusable snippets over long notes. Each snippet should usually be 1 to 3 sentences.
- Include suggested shortcut names that start with a dot.
- If details are missing, ask clarifying questions instead of filling gaps with generic prose.

When asking clarifying questions, use this exact format:
## Quick Clarifying Questions
1. [question]
2. [question]
3. [question]

When generating final phrases, use this exact format:
## Three Dot Phrase Options

### Option 1: [specific angle]
**Shortcut:** \`.shortcut\`
**Snippet:** [1 to 3 concise reusable sentences.]

### Option 2: [specific angle]
**Shortcut:** \`.shortcut\`
**Snippet:** [1 to 3 concise reusable sentences.]

### Option 3: [specific angle]
**Shortcut:** \`.shortcut\`
**Snippet:** [1 to 3 concise reusable sentences.]

### Best Fit
[One sentence recommending when to use each option.]`;

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
  setMessageContent(message, content);
  els.chat.appendChild(message);
  els.chat.scrollTop = els.chat.scrollHeight;
  return message;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderInlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdown(markdown) {
  const lines = markdown.trim().split(/\r?\n/);
  const html = [];
  let listType = null;

  function closeList() {
    if (!listType) return;
    html.push(`</${listType}>`);
    listType = null;
  }

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      closeList();
      return;
    }

    if (trimmed.startsWith("### ")) {
      closeList();
      html.push(`<h3>${renderInlineMarkdown(trimmed.slice(4))}</h3>`);
      return;
    }

    if (trimmed.startsWith("## ")) {
      closeList();
      html.push(`<h2>${renderInlineMarkdown(trimmed.slice(3))}</h2>`);
      return;
    }

    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      if (listType !== "ol") {
        closeList();
        html.push("<ol>");
        listType = "ol";
      }
      html.push(`<li>${renderInlineMarkdown(ordered[1])}</li>`);
      return;
    }

    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      if (listType !== "ul") {
        closeList();
        html.push("<ul>");
        listType = "ul";
      }
      html.push(`<li>${renderInlineMarkdown(unordered[1])}</li>`);
      return;
    }

    closeList();
    html.push(`<p>${renderInlineMarkdown(trimmed)}</p>`);
  });

  closeList();
  return html.join("");
}

function setMessageContent(element, content) {
  if (element.classList.contains("user") || element.classList.contains("error")) {
    element.textContent = content;
    return;
  }

  element.innerHTML = renderMarkdown(content);
}

function resetConversation() {
  state.messages = [{ role: "system", content: SYSTEM_PROMPT }];
  state.latestOutput = "";
  els.chat.innerHTML = "";
  appendMessage("assistant", INITIAL_MESSAGE);
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
      setMessageContent(assistantMessage, reply);
      els.chat.scrollTop = els.chat.scrollHeight;
    }

    const finalReply = reply.trim();
    state.messages.push({ role: "assistant", content: finalReply });

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

resetConversation();
