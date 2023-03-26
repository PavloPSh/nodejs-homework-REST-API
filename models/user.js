const { boolean } = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require('../helpers');


const userSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    avatarURL: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        default: null,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required']
    },
    verify: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false, timestamps: true });

userSchema.post('save', handleMongooseError);

const User = model('user', userSchema); 

module.exports = User;

