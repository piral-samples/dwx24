const users = [
  {
    id: 'bernd',
    name: 'Bernd Müller',
    role: 'Standard',
  },
  {
    id: 'stefanie',
    name: 'Stefanie Holzer',
    role: 'Administrator',
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
