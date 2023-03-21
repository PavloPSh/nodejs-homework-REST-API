const signup = require('./signup');
const login = require('./login');
const getCurrentUser = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubs');
const updateAvatar = require('./updateAvatar');


const { ctrlWrapper } = require('../../helpers');

module.exports = {
    signup: ctrlWrapper(signup),
    login: ctrlWrapper(login),
    getCurrentUser: ctrlWrapper(getCurrentUser),
    logout: ctrlWrapper(logout),
    updateSubscription: ctrlWrapper(updateSubscription),
    updateAvatar: ctrlWrapper(updateAvatar),
}
