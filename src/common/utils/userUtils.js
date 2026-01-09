export const generateUserId = () => crypto.randomUUID();

export const getCreatedDate = () =>
  new Date().toLocaleDateString();
