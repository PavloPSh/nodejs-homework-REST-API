const { User } = require('../../models');
const { HttpError } = require('../../helpers');

const signup = async (req, res) => {
    const newUser = await User.create(req.body);

    res.status(201).json({
        email: newUser.email,
        subscription: newUser.subscription,
    })
}

module.exports = signup;