const express = require('express');
const router = express.Router();

const authcontrollers = require('../controllers/auth')

router.post('/registerUser',authcontrollers.registerUser)
router.post('/loginUser',authcontrollers.loginUser)
router.get('/check',authcontrollers.check)

module.exports = router