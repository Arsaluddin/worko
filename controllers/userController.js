const userService = require('../services/userService');
const Joi = require('joi');

// Validation schemas
const userSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
  city: Joi.string().required(),
  zipCode: Joi.string().required()
});

const idSchema = Joi.string().alphanum().length(24);

exports.listUsers = async (req, res) => {
  try {
    const users = await userService.listUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const { error } = idSchema.validate(req.params.userId);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.getUser(req.params.userId);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { error } = idSchema.validate(req.params.userId);
    if (error) return res.status(400).send(error.details[0].message);

    const { error: updateError } = userSchema.validate(req.body);
    if (updateError) return res.status(400).send(updateError.details[0].message);

    const user = await userService.updateUser(req.params.userId, req.body);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.partialUpdateUser = async (req, res) => {
  try {
    const { error } = idSchema.validate(req.params.userId);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.updateUser(req.params.userId, req.body);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { error } = idSchema.validate(req.params.userId);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.deleteUser(req.params.userId);
    if (!user) return res.status(404).send('User not found');
    res.send('User soft deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

