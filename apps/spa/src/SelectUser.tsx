import * as React from 'react';
import { loginUser, getUsers } from './auth';

export const SelectUser = () => {
  return (
    <div className="app-center">
      <ul className="select-user">
        {getUsers().map((user) => (
          <li key={user.id}>
            <button onClick={() => loginUser(user.id)} className="select-user-button">
              <img className="select-user-icon" src={user.icon} alt="user icon" />
              <span className="select-user-name">{user.name}</span>
              <span className="select-user-role">{user.role}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
