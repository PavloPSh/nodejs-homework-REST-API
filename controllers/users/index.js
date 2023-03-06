const signup = require('./signup')

const { ctrlWrapper } = require('../../helpers');

module.exports = {
    signup: ctrlWrapper(signup),
}
