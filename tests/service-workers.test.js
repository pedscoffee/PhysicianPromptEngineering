const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const apps = [
  ['cme', 'cme-tracker'], ['dotphrase', 'dot-phrase-library'], ['em-calc', 'cpt-calculator'],
  ['pto', 'pto-planner'], ['rvu', 'clinic-visit-tracker'], ['timebox', 'clockwork-timebox']
];

for (const [worker, page] of apps) {
  test(`${worker}: explicit app scope and offline responses stay in its own cache`, async () => {
    const markdown = fs.readFileSync(`${page}.md`, 'utf8');
    assert.ok(markdown.includes(`scope: '{{ "/${page}/" | relative_url }}'`));
    const listeners = {};
    const matches = [];
    vm.runInNewContext(fs.readFileSync(`${worker}-sw.js`, 'utf8'), {
      self: { location: { origin: 'https://example.com' }, addEventListener: (name, handler) => { listeners[name] = handler; } },
      caches: {
        open: async () => ({ match: async request => { matches.push(request); return typeof request === 'string' ? 'app-page' : undefined; } }),
        match: () => { throw new Error('Must not read another app cache'); }
      },
      URL, Response, fetch: async () => { throw new Error('Offline'); }
    });
    let response;
    listeners.fetch({
      request: { method: 'GET', url: `https://example.com/${page}/`, mode: 'navigate' },
      respondWith: promise => { response = promise; }
    });
    assert.equal(await response, 'app-page');
    assert.equal(matches[1], `/${page}/`);
    let intercepted = false;
    listeners.fetch({ request: { method: 'POST', url: 'https://example.com/' }, respondWith: () => { intercepted = true; } });
    assert.equal(intercepted, false);
  });
}
