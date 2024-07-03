import * as React from 'react';
import { loginUser, getUsers } from './auth';

export const SelectUser = () => {
  return (
    <>
      <h1>Select User</h1>
      <ul>
        {getUsers().map((user) => (
          <li key={user.id}>
            <button onClick={() => loginUser(user.id)}>
              {user.name} ({user.role})
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
