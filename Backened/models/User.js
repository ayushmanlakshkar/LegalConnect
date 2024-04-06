const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const roles =['lawyer','public']
// Define a schema
const usersdetails = new mongoose.Schema({
    email :{
        type: String,
        required: true,
        unique: true
    },
   username:{
    type: String,
    required: true,
    unique: true
   } ,
   password:{
    type:String,
    required: true,
   },
   contact:{
    type:Number,
   },
   role:{
    type:String,
    enum:roles,
    default:'public'
   },
   Nationality:String,
   State:String,
   City:String,
   Address:String,
   firstname:String,
   lastname:String,
   License:String,
   affiliation:String

});


usersdetails.post('validate', function (error, doc, next) {
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

usersdetails.pre('save', async function (next) {
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


usersdetails.methods.generateToken = async function () {
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
const User = mongoose.model('user', usersdetails);

module.exports = User;

