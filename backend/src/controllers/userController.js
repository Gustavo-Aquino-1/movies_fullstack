const usModels = require('../models/userModels');

const getALl = async (_req,res) => {
  const users = await usModels.getAll();
  res.status(200).json(users);
};

const getById = async (req,res) => {
  const { id } = req.params;
  const user = await usModels.getById(id);
  res.status(200).json(user);

};

const create = async (req,res) => {
  const body = req.body;
  const createdUser = await usModels.create(body);
  res.status(201).json(createdUser);
};

const update = async (req,res) => {
  const { id } = req.params;
  const body = req.body;
  
  await usModels.update(id,body);

  res.status(204).json();
};

const remove = async (req,res) => {
  const { id } = req.params;
  
  await usModels.remove(id);

  res.status(204).json();
};


module.exports = {
  getALl,
  getById,
  create,
  update,
  remove
};