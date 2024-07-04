import 'core-js/proposals/reflect-metadata';
import 'zone.js';

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi } from 'piral';
import { checkPeriodically, createUpdateApi } from 'piral-update';
import { SelectUser } from './SelectUser';
import { layout, errors } from './layout';
import { getCurrentUser } from './auth';

const root = createRoot(document.querySelector('#app'));
const user = getCurrentUser();
const autoUpdate = process.env.DEBUG_PILET === 'on';

if (!user) {
  root.render(<SelectUser />);
} else {
  const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/dwx24-demo';
  const instance = createInstance({
    state: {
      components: layout,
      errorComponents: errors,
    },
    plugins: [
      ...createStandardApi(),
      autoUpdate &&
        createUpdateApi({
          listen: checkPeriodically({
            period: 10 * 1000,
          }),
        }),
    ].filter(Boolean),
    requestPilets() {
      return fetch(`${feedUrl}?role=${user.role}&target=spa`)
        .then((res) => res.json())
        .then((res) => res.items);
    },
  });

  root.render(<Piral instance={instance} />);
}
