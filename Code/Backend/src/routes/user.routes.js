const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// GET /api/users - List all users
router.get('/', userController.listUsers);

// POST /api/users - Create a new user
router.post('/', userController.createUser);

// GET /api/users/:id - Get a single user
router.get('/:id', userController.getUser);

// PUT /api/users/:id - Update a user
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id - Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
