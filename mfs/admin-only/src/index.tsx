import './styles.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'spa-app';

const Machines = React.lazy(() => import('./Machines'));

export function setup(api: PiletApi) {
  const machinesPath = '/machines';

  api.registerPage(machinesPath, Machines);

  api.registerMenu(() => (
    <Link to={machinesPath}>
      Machines
    </Link>
  ));
}
