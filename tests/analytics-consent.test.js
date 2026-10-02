const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('_includes/google-analytics.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1]
  .replaceAll('{{ site.google_analytics }}', 'G-TEST');

for (const consent of ['', 'ppe_cookie_consent=declined', 'ppe_cookie_consent=accepted']) {
  test(`analytics loads only for explicit acceptance: ${consent || 'unset'}`, () => {
    const scripts = [];
    const context = { window: {}, document: { cookie: consent, createElement: () => ({}), head: { appendChild: script => scripts.push(script) } } };
    vm.runInNewContext(source, context);
    assert.equal(scripts.length, consent.endsWith('=accepted') ? 1 : 0);
    context.window.enableAnalytics();
    context.window.enableAnalytics();
    assert.equal(scripts.length, 1);
    assert.ok(scripts[0].src.endsWith('id=G-TEST'));
  });
}
