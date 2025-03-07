const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');
const { resolve } = require('path');

esbuild.build({
  entryPoints: [resolve(__dirname, 'src/index.tsx')],
  minify: true,
  bundle: true,
  platform: 'node',
  outfile: resolve(__dirname, 'dist/server.js'),
  plugins: [
    sassPlugin({
      type: 'css-text',
    }),
  ],
});
