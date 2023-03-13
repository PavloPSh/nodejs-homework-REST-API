const express = require('express');

const { validateBody, authenticate } = require('../../middlewares');
const { userSchemas } = require('../../schemas');
const ctrl = require('../../controllers/users')


const router = express.Router();

router.post('/signup', validateBody(userSchemas.userSchema), ctrl.signup);

router.post('/login', validateBody(userSchemas.userSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrentUser);

router.post('/logout', authenticate, ctrl.logout)


module.exports = router;
