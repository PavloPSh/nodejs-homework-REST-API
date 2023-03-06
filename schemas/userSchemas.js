const Joi = require('joi');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const userSchema = Joi.object({
    email: Joi.string().required().pattern(emailRegexp),
    password: Joi.string().required().min(6),
});

const schema = {
    userSchema
}

module.exports = schema;