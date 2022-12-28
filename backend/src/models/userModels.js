const cn = require('./connection');
const gnToken = require('../utils/gnToken');

const getAll = async () => {
  const query = 'SELECT * FROM users';
  const [users] = await cn.execute(query);
  return users;
};

const getById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  const [user] = await cn.execute(query,[id]);
  return user[0];
};


const create = async (body) => {
  const { email, password } = body;
  const token = gnToken();
  const query = 'INSERT INTO users(email, password, token) VALUES( ? , ?, ? )';
  const [{ insertId }] = await cn.execute(query,[email,password,token]);
  return { id: insertId, email, password, token };
};


const update = async (id, body) => {
  const { email, password } = body;
  const query = 'UPDATE users SET email = ?, password = ? WHERE id = ?';
  const [updatedUser] = await cn.execute(query,[email,password,id]);
  return updatedUser;
};


const remove = async (id) => {
  const query = 'DELETE FROM movies WHERE user_id = ?';
  const query2 = 'DELETE FROM users WHERE id = ?';
  await cn.execute(query,[id]);
  const [deletedUser] = await cn.execute(query2,[id]);
  return deletedUser;
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
