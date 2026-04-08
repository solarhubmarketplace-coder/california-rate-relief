const userService = require('../services/user.service');

/**
 * GET /api/users - List all users
 */
const listUsers = async (req, res, next) => {
    try {
        const users = await userService.listUsers();
        res.apiResponse(200, 'Users fetched successfully', users);
    } catch (error) {
        next(error);
    }
};

/**
 * POST /api/users - Create a new user
 */
const createUser = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password) {
            return res.apiResponse(400, 'Email and password are required');
        }

        const user = await userService.createUser({ email, password, name });
        res.apiResponse(201, 'User created successfully', user);
    } catch (error) {
        next(error);
    }
};

/**
 * GET /api/users/:id - Get a single user
 */
const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        res.apiResponse(200, 'User fetched successfully', user);
    } catch (error) {
        next(error);
    }
};

/**
 * PUT /api/users/:id - Update a user
 */
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { email, name, password } = req.body;

        const user = await userService.updateUser(id, { email, name, password });
        res.apiResponse(200, 'User updated successfully', user);
    } catch (error) {
        next(error);
    }
};

/**
 * DELETE /api/users/:id - Delete a user
 */
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await userService.deleteUser(id);
        res.apiResponse(200, 'User deleted successfully');
    } catch (error) {
        next(error);
    }
};

module.exports = {
    listUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
};
