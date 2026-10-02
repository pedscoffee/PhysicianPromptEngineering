const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { randomUUID } = require('node:crypto');

function setup() {
  const markdown = fs.readFileSync('prompt-assistant.md', 'utf8');
  const source = markdown.match(/<script type="module">([\s\S]*?)<\/script>/)[1]
    .replace(/import \{ CreateMLCEngine \} from [^;]+;/, '');
  const elements = new Map();
  const saved = [];
  const alerts = [];
  const downloads = [];
  const context = {
    window: { prompt: () => 'Saved assistant prompt', PromptStorage: { load: () => saved, save: prompts => { saved.splice(0, saved.length, ...prompts); } } },
    document: {
      getElementById: id => {
        if (!elements.has(id)) elements.set(id, { style: {}, textContent: '', innerHTML: '', value: '5000' });
        return elements.get(id);
      },
      createElement: () => ({ click() { downloads.push(this.download); } })
    },
    navigator: { clipboard: { writeText: async text => { context.copied = text; } } },
    crypto: { randomUUID }, alert: message => alerts.push(message), console,
    setTimeout: callback => callback(), Blob,
    URL: { createObjectURL: () => 'blob:test', revokeObjectURL: () => {} }
  };
  vm.createContext(context);
  vm.runInContext(source, context);
  return { context, elements, saved, alerts, downloads };
}

for (const tab of ['generate', 'refine']) {
  test(`assistant ${tab}: copy, save, download, and reset work`, async () => {
    const { context, elements, saved, downloads } = setup();
    const suffix = tab === 'generate' ? '' : 'Refine';
    vm.runInContext(`${tab === 'generate' ? 'currentOutput' : 'currentOutputRefine'} = 'Synthetic test output';`, context);
    await context.window['copyPrompt' + suffix]({ innerHTML: 'Copy', textContent: '' });
    assert.equal(context.copied, 'Synthetic test output');
    context.window['saveToPromptManager' + suffix]();
    assert.equal(saved[0].content, 'Synthetic test output');
    assert.equal(typeof saved[0].id, 'string');
    assert.ok(saved[0].updatedAt);
    context.window['downloadPrompt' + suffix]();
    assert.deepEqual(downloads, ['clinical-prompt.txt']);
    context.window['clearChat' + suffix]();
    assert.equal(elements.get('output-actions' + (tab === 'generate' ? '' : '-refine')).style.display, 'none');
    assert.match(elements.get('chat-messages-' + tab).innerHTML, /Welcome/);
    assert.equal(vm.runInContext(tab === 'generate' ? 'currentOutput' : 'currentOutputRefine', context), '');
  });
}
