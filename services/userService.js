const userDao = require('../dao/userDao');

const createUser = async (userData) => {
  return await userDao.createUser(userData);
};

const listUsers = async () => {
  return await userDao.getUsers();
};

const getUser = async (userId) => {
  return await userDao.getUserById(userId);
};

const updateUser = async (userId, updateData) => {
  return await userDao.updateUser(userId, updateData);
};

const deleteUser = async (userId) => {
  return await userDao.deleteUser(userId);
};

module.exports = {
  createUser,
  listUsers,
  getUser,
  updateUser,
  deleteUser
};
