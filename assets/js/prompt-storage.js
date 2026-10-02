// Shared storage for Prompt Manager, Prompt Remix, and Prompt Assistant.
window.PromptStorage = (() => {
  const KEY = 'ppe_snippets';
  const LEGACY_KEY = 'aiPromptSnippets';

  function read(key) {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    if (!Array.isArray(value)) throw new Error('Saved prompts must be an array');
    return value.map(snippet => {
      if (!snippet || typeof snippet.title !== 'string' || typeof snippet.content !== 'string') {
        throw new Error('Invalid saved prompt');
      }
      const timestamp = snippet.createdAt || snippet.created || new Date().toISOString();
      return {
        ...snippet,
        id: String(snippet.id || crypto.randomUUID()),
        tags: Array.isArray(snippet.tags) ? snippet.tags.filter(tag => typeof tag === 'string') : [],
        createdAt: timestamp,
        updatedAt: snippet.updatedAt || timestamp
      };
    });
  }

  function save(snippets) {
    // Refuse to replace unreadable existing data with a new or empty list.
    read(KEY);
    read(LEGACY_KEY);
    localStorage.setItem(KEY, JSON.stringify(snippets));
  }

  function load() {
    const current = read(KEY);
    const legacy = read(LEGACY_KEY);
    const merged = [...current];
    for (const snippet of legacy) {
      if (!merged.some(existing => existing.id === snippet.id && existing.content === snippet.content)) {
        // Legacy numeric IDs can collide with manager IDs; keep both prompts.
        if (merged.some(existing => existing.id === snippet.id)) snippet.id = crypto.randomUUID();
        merged.push(snippet);
      }
    }
    if (legacy.length) {
      save(merged); // Only clear legacy storage after a successful write.
      localStorage.removeItem(LEGACY_KEY);
    }
    return merged;
  }

  return { load, save };
})();
