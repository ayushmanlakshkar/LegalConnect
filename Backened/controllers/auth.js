const User = require('../models/User')
const bcrypt = require('bcryptjs');

const registerUser = async (req,res) =>{
    try {
        const {email, username, password, confirmpassword } = req.body;

        const userPresent = await User.findOne({ username });

        if (userPresent) {
            return res.status(400).send('Username already in use. Choose another.');
        }

        // const profile = req.file ? req.file.path : 'public/profilePictures/logo.png';
console.log(username,email,password)
        const user = await User.create({email, username, password});
        console.log(user)
        const token = await user.generateToken();

        res.send({ message: `User created successfully: ${username}`, token, username: username,  });
    } catch (error) {
        return res.status(400).send(error)
    }

}

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).send("No such user exists")
        }
        
        const matchPassword = await bcrypt.compare(req.body.password, user.password)
        console.log(user)
        if (!matchPassword) {
            return res.status(400).send("Incorrect Password")
        }

        const token = await user.generateToken();
        res.send({ message: "User logged in", token, username: user.username, profile: user.profile })
    }
    catch (error) {
        return res.status(400).send(error)
    }
}

const check = async (req, res) => {
    const users = await User.find({})
    res.send(users)
}

module.exports= {
    check,
    registerUser,loginUser
}