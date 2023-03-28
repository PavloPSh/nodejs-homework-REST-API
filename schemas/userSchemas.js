const Joi = require('joi');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const userSchema = Joi.object({
    email: Joi.string().required().pattern(emailRegexp),
    password: Joi.string().required().min(6),
});

const updateSubsSchema = Joi.object({
    subscription: Joi.string().valid("starter", "pro", "business").required(),
});

const emailSchema = Joi.object({
    email: Joi.string().required().pattern(emailRegexp),
});

const schema = {
    userSchema,
    updateSubsSchema,
    emailSchema,
};

module.exports = schema;