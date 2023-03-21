const express = require('express');

const { validateBody, authenticate, upload } = require('../../middlewares');
const { userSchemas } = require('../../schemas');
const ctrl = require('../../controllers/users')


const router = express.Router();

router.post('/signup', validateBody(userSchemas.userSchema), ctrl.signup);

router.post('/login', validateBody(userSchemas.userSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrentUser);

router.post('/logout', authenticate, ctrl.logout);

router.patch('/', authenticate, validateBody(userSchemas.updateSubsSchema), ctrl.updateSubscription);

router.patch('/avatars', authenticate, upload.single('avatar'), ctrl.updateAvatar);


module.exports = router;
