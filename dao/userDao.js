const User = require('../models/user');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const getUsers = async () => {
  return await User.find({ isDeleted: false });
};

const getUserById = async (userId) => {
  return await User.findById(userId);
};

const updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

const deleteUser = async (userId) => {
  return await User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
