const express = require('express');

const { validateBody, authenticate, upload } = require('../../middlewares');
const { userSchemas } = require('../../schemas');
const ctrl = require('../../controllers/users')


const router = express.Router();

// signup
router.post('/signup', validateBody(userSchemas.userSchema), ctrl.signup);

router.get('/verify/:verificationToken', ctrl.verifyEmail);

router.post('/verify', validateBody(userSchemas.emailSchema), ctrl.resendVerifyEmail);

// login
router.post('/login', validateBody(userSchemas.userSchema), ctrl.login);

// get current user
router.get('/current', authenticate, ctrl.getCurrentUser);

// logout
router.post('/logout', authenticate, ctrl.logout);

// update subs
router.patch('/', authenticate, validateBody(userSchemas.updateSubsSchema), ctrl.updateSubscription);

// update avatar
router.patch('/avatars', authenticate, upload.single('avatar'), ctrl.updateAvatar);




module.exports = router;
