const copyStaticFiles = require('esbuild-copy-static-files');

module.exports = function (config) {
  config.plugins.push(
    copyStaticFiles({
      src: './static',
      dest: config.outdir,
    }),
  );
  return config;
};
