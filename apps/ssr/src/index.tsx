import express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { resolve } from 'path';
import { initializePicard } from 'picard-js/server';
import { createPiletService, createReactConverterService } from './helpers';
import Layout from './Layout';

const port = 1235;
const app = express();
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/dwx24-demo';
const picard = initializePicard({
  feed: async () => {
    const res = await fetch(`${feedUrl}?target=ssr`);
    const result: any = await res.json();
    return result.items;
  },
  services: {
    'framework.react': createReactConverterService,
    pilet: createPiletService,
  },
  dependencies: {
    react: () => Promise.resolve(React),
  },
});

console.log('The secret is', process.env.MY_SECRET);

app.use(express.static(resolve(__dirname, '../public')));

app.get('*', async (req, res) => {
  const route = req.path;
  const plainContent = renderToString(<Layout route={route} />);
  const content = await picard.decorate(plainContent);
  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port} ...`);
});
