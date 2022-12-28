const mvModels = require('../models/moviesModels');

const getALl = async (_req,res) => {
  const movies = await mvModels.getAll();
  res.status(200).json(movies);
};

const getById = async (req,res) => {
  const { id } = req.params;
  const movies = await mvModels.getById(id);
  res.status(200).json(movies);

};

const create = async (req,res) => {
  const body = req.body;
  const createdMovie = await mvModels.create(body);
  res.status(201).json(createdMovie);
};

const update = async (req,res) => {
  const { id } = req.params;
  const body = req.body;
  
  await mvModels.update(id,body);

  res.status(204).json();
};

const remove = async (req,res) => {
  const { id } = req.params;
  
  await mvModels.remove(id);

  res.status(204).json();
};


module.exports = {
  getALl,
  getById,
  create,
  update,
  remove
};