const connection = require('./connection');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) return false;
};

const createUser = async (firstName, lastName, email, password) => {
  const [user] = await connection.execute(
    'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password],
  );
  return ({ id: user.insertId, firstName, lastName, email, password});
};

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM users',
  );
  return users.map(({ id, first_name, last_name, email, password }) => ({
    id, firstName: first_name, lastName: last_name, email, password,
  }));
};

module.exports = {
  createUser,
  getAll,
  isValid,
};