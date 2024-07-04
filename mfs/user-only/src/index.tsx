import './styles.scss';
import { lazy } from 'react';
import type { PiletApi } from 'spa-app';

const Map = lazy(() => import('./Map'));

export function setup(api: PiletApi) {
  api.registerTile(Map, {
    initialRows: 4,
    initialColumns: 4,
  });
}
