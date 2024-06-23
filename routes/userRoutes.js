const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.listUsers);
router.get('/:userId', userController.getUser);
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);
router.patch('/:userId', userController.partialUpdateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
