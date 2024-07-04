import * as React from 'react';
import type { ExtensionComponentProps } from 'spa-app';
import powerOff from './power-off.png';

interface ProfileData {
  user: any;
  logout: any;
}

const Profile: React.FC<ExtensionComponentProps<ProfileData>> = ({ params }) => {
  const { user, logout } = params;
  const exit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    logout();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center' }}>
      <img src={user.icon} width="24" height="24" />
      <span>{user.name}</span>
      <a href="#" onClick={exit} title="Logout" style={{ padding: '0' }}>
      <img src={powerOff} width="22" height="22" />
      </a>
    </div>
  );
};

export default Profile;
