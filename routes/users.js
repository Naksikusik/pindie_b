const usersRouter = require('express').Router();
const {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    checkEmptyNameAndEmail,
    checkEmptyNameAndEmailAndPassword,
    checkIsUserExists,
    hashPassword,
    checkIsEmailUserExists,
} = require('../middlewares/users');
const {
    sendAllUsers,
    sendUserById,
    sendMe,
    sendUserCreated,
    sendUserUpdated,
    sendUserDeleted
} = require('../controllers/users');

const { checkAuth } = require('../middlewares/auth');

usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.post(
    '/users',
    findAllUsers,
    checkIsEmailUserExists,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
);
usersRouter.put(
    '/users/:id',
    findUserById,
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.delete(
    '/users/:id',
    checkAuth,
    deleteUser,
    sendUserDeleted
);

module.exports = usersRouter;