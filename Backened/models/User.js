const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    legalName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: roles,
        default: 'public',
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    license: {
        type: String,
        enum: roles.includes('lawyer') ? ['valid', 'expired', 'revoked'] : undefined,
    },
    affiliation: {
        type: String,
    },
    city: {
        type: String,
    },
    address: {
        type: String,
    },
    nationality: {
        type: String,
    }
});


UserSchema.post('validate', function (error, doc, next) {
    if (error.errors) {
        const validationErrors = {};
        Object.keys(error.errors).forEach((key) => {
            validationErrors[key] = error.errors[key].message;
        });
        next({ validationErrors });
    } else {
        next();
    }
});

UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashPassword;
        next();
    } catch (error) {
        return next(error);
    }
});


UserSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            username: this.username
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '3h'
            }
        )
    } catch (error) {
        return ({ error })
    }
}


// Create a model based on the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;

