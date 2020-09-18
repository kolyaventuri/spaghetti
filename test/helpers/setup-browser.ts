import browserEnv from 'browser-env';

browserEnv(['window', 'document', 'navigator'], {
  url: 'http://localhost',
  referrer: 'http://localhost'
});
