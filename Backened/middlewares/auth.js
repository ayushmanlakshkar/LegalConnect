const authMiddleware = (req, res, next) => {
    const { email, username, password, confirmpassword } = req.body;

    if (!email || !username || !password) {
        return res.status(400).send('Please enter all the fields');
    }

    if (confirmpassword && confirmpassword !== password) {
        return res.status(400).send('Password does not match');
    }

    next();
};

module.exports = authMiddleware;
