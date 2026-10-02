// Earlier app registrations used '/' and replaced each other. Remove only those
// known legacy registrations; each app now registers its own narrower scope.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    const legacyWorkers = new Set([
      '/cme-sw.js', '/dotphrase-sw.js', '/em-calc-sw.js',
      '/pto-sw.js', '/rvu-sw.js', '/timebox-sw.js'
    ]);
    return Promise.all(registrations.map(registration => {
      const worker = registration.active || registration.waiting || registration.installing;
      if (worker && new URL(registration.scope).pathname === '/' &&
          legacyWorkers.has(new URL(worker.scriptURL).pathname)) {
        return registration.unregister();
      }
    }));
  }).catch(error => console.warn('Could not clean up legacy app registration:', error));
}
