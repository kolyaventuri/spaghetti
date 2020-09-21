import browserEnv from 'browser-env';
import {spy} from 'sinon';

browserEnv(['window', 'document', 'navigator'], {
  url: 'http://localhost',
  referrer: 'http://localhost'
});

window.HTMLCanvasElement.prototype.getContext = () => ({
  // @ts-expect-error
  fillStyle: spy(),
  fillRect: spy()
});
