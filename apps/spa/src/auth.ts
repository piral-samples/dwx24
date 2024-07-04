import bernd from './images/man1.png';
import stefanie from './images/woman1.png';

const users = [
  {
    id: 'bernd',
    name: 'Bernd Müller',
    role: 'Standard',
    icon: bernd,
  },
  {
    id: 'stefanie',
    name: 'Stefanie Holzer',
    role: 'Administrator',
    icon: stefanie,
  },
];

export function getUsers() {
  return users;
}

export function getCurrentUser() {
  const id = localStorage.getItem('user');
  return users.find((m) => m.id === id);
}

export function loginUser(user: string) {
  localStorage.setItem('user', user);
  location.reload();
}

export function logoutCurrentUser() {
  localStorage.removeItem('user');
  location.reload();
}
