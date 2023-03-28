const { User } = require('../../models');
const bcrypt = require('bcrypt');
const { HttpError, sendEmail } = require('../../helpers');
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid"); 
require("dotenv").config();

const { BASE_URL } = process.env;

const signup = async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw HttpError(409, "Email in use");
    };

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = uuidv4();

    const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationToken });
    
    const verifyMail = {
        to: email,
        subject: "Verify email",
        html: `<a href="${BASE_URL}/users/verify/${verificationToken}" target="_blank" >Verify your email</a>`,
    };

    await sendEmail(verifyMail);

    res.status(201).json({
        email: newUser.email,
        subscription: newUser.subscription,
    })
}

module.exports = signup;