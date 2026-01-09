
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let users = [
  {
    id: '1',
    name: 'ali',
    email: 'test@gmial.com',
    mobile: '9258828282',
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: '2',
    name: 'kannam',
    email: 'test@gmai.com',
    mobile: '9878654321',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: '3',
    name: 'sufeena',
    email: 'test@gmail.com.com',
    mobile: '9447784825',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

// POST /api/login
export const login = async (email, password) => {
  await delay(500);

  return {
    token: 'mock-jwt-token-' + Date.now(),
    user: {
      id: 'admin-1',
      name: 'Admin User',
      email,
    },
  };
};

// GET /api/users
export const getUsers = async () => {
  await delay(300);

  return [...users].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

// POST /api/users
export const createUser = async (input) => {
  await delay(400);

  const exists = users.some(
    (u) => u.email.toLowerCase() === input.email.toLowerCase()
  );

  if (exists) {
    throw new Error('A user with this email already exists');
  }

  const newUser = {
    id: Date.now().toString(),
    name: input.name,
    email: input.email,
    mobile: input.mobile,
    createdAt: new Date().toISOString(),
  };

  users = [newUser, ...users];
  return newUser;
};

// DELETE /api/users/:id
export const deleteUser = async (id) => {
  await delay(300);
  users = users.filter((u) => u.id !== id);
};
