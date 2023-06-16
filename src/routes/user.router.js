const { getAll, create, getOne, remove, update, verifyCode, login } = require('../controllers/user.controlles');
const express = require('express');

const routerUser = express.Router();

routerUser.route('/')
    .get(getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routerUser.route('/verify/:code')
    .get(verifyCode)

module.exports = routerUser;