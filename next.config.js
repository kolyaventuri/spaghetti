const withSass = require('@zeit/next-sass');

const runtimeConfig = {
  // Add your runtime info here 
};

/* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
// @ts-ignore
module.exports = withSass({
  publicRuntimeConfig: runtimeConfig,
  serverRuntimeConfig: runtimeConfig
});
