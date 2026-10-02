const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const { randomUUID } = require('node:crypto');
const source = fs.readFileSync('assets/js/prompt-storage.js', 'utf8');

function setup(initial = {}, failWrite = false) {
  const data = new Map(Object.entries(initial));
  const context = {
    window: {}, crypto: { randomUUID },
    localStorage: {
      getItem: key => data.get(key) || null,
      setItem: (key, value) => {
        if (failWrite) throw new Error('Quota exceeded');
        data.set(key, value);
      },
      removeItem: key => data.delete(key)
    }
  };
  vm.runInNewContext(source, context);
  return { storage: context.window.PromptStorage, data };
}

test('recovers legacy Remix prompts, normalizes IDs and dates, and migrates once', () => {
  const legacy = { id: 123, title: 'Remix', content: 'Prompt', tags: ['customized'], created: '2025-12-01' };
  const { storage, data } = setup({ aiPromptSnippets: JSON.stringify([legacy]) });
  const result = storage.load();
  assert.equal(result[0].id, '123');
  assert.equal(result[0].createdAt, legacy.created);
  assert.equal(result[0].updatedAt, legacy.created);
  assert.equal(data.has('aiPromptSnippets'), false);
  assert.equal(storage.load().length, 1);
});

test('preserves both prompts when legacy and current IDs collide', () => {
  const current = { id: '123', title: 'Manager', content: 'First', tags: [] };
  const legacy = { id: 123, title: 'Remix', content: 'Second' };
  const { storage } = setup({ ppe_snippets: JSON.stringify([current]), aiPromptSnippets: JSON.stringify([legacy]) });
  const prompts = storage.load();
  assert.equal(prompts.length, 2);
  assert.notEqual(prompts[0].id, prompts[1].id);
  assert.equal(prompts[1].tags.length, 0);
});

test('leaves both storage keys intact when migration cannot save', () => {
  const legacy = JSON.stringify([{ id: 1, title: 'Keep', content: 'Keep me' }]);
  const { storage, data } = setup({ aiPromptSnippets: legacy, ppe_snippets: '[]' }, true);
  assert.throws(() => storage.load(), /Quota/);
  assert.equal(data.get('aiPromptSnippets'), legacy);
  assert.equal(data.get('ppe_snippets'), '[]');
});

test('rejects malformed storage without replacing it with an empty list', () => {
  const { storage, data } = setup({ ppe_snippets: '{broken' });
  assert.throws(() => storage.load());
  assert.throws(() => storage.save([]));
  assert.equal(data.get('ppe_snippets'), '{broken');
});
