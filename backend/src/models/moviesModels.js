const cn = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM movies';
  const [movies] = await cn.execute(query);
  return movies;
};

const getById = async (id) => {
  const query = 'SELECT * FROM movies WHERE user_id = ?';
  const [movies] = await cn.execute(query,[id]);
  return movies;
};


const create = async (body) => {
  const { title, rating , description, image_url, user_id } = body;
  const query = 'INSERT INTO movies(title, rating, description, image_url, user_id) VALUES( ?, ?, ?, ?, ?)';
  const [{ insertId }] = await cn.execute(query,[title,rating,description,image_url, user_id]);
  return { id: insertId, title, rating, description, image_url, user_id };
};


const update = async (id, body) => {
  const { title, rating , description, image_url } = body;
  const query = 'UPDATE movies SET title = ?, rating = ?, description = ?, image_url = ? WHERE id = ?';
  const [updatedMovie] = await cn.execute(query,[title,rating,description,image_url,id]);
  return updatedMovie;
};


const remove = async (id) => {
  const query = 'DELETE FROM movies WHERE id = ?';
  const [deletedMovie] = await cn.execute(query,[id]);
  return deletedMovie;
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
