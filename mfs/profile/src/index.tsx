import type { PiletApi } from 'spa-app';
import Profile from './Profile';

export function setup(api: PiletApi) {
  api.registerExtension('user-profile-menu', Profile);
}
