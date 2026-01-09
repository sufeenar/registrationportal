const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let users = [
  {
    id: "1",
    name: "Sufeena",
    email: "sufeenar@gmail.com",
    mobile: "9447791903",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: "2",
    name: "bineesh",
    email: "jbini@gmail.com",
    mobile: "9875654321",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
];

export const getUsers = async () => {
  await delay(300);
  return [...users].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

export const createUser = async (input) => {
  await delay(400);

  const exists = users.some(
    (u) => u.email.toLowerCase() === input.email.toLowerCase()
  );

  if (exists) {
    throw new Error("A user with this email already exists");
  }

  const newUser = {
    id: Date.now().toString(),
    ...input,
    createdAt: new Date().toISOString(),
  };

  users.unshift(newUser);
  return newUser;
};

export const deleteUser = async (id) => {
  await delay(300);
  users = users.filter((u) => u.id !== id);
};
