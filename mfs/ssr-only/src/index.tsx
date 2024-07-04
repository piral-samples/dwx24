import * as React from 'react';
import type { PiletApi } from 'spa-app';
import Home from './Home';
import About from './About';

export function setup(api: PiletApi) {
  api.registerPage('/', Home);
  api.registerPage('/about', About);
  api.registerMenu(() => <a href="/about">About</a>);
}
