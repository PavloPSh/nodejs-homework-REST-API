const express = require('express');

const { validateBody } = require('../../middlewares');
const { userSchemas } = require('../../schemas');
const ctrl = require('../../controllers/users')


const router = express.Router();

router.post('/signup', validateBody(userSchemas.userSchema), ctrl.signup);


module.exports = router;
