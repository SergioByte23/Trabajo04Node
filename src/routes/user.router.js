const { getAll, create, getOne, remove, update, verifyEmail, login, getLoggedUser } = require('../controllers/use.controllers.js');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT.js');

const userRouter = express.Router();

userRouter.route('/users')
    .get(verifyJWT, getAll)
    .post(create);

userRouter.route('/users/verify/:code')
    .get(verifyEmail);

userRouter.route('/users/login')
    .post(login)

userRouter.route('/users/me')
    .get(verifyJWT,getLoggedUser)

userRouter.route('/users/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = userRouter;