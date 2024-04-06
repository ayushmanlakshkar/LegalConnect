const express = require('express');
const router = express.Router();

const postcontrollers = require('../controllers/post')

router.post('/create',postcontrollers)
router.post('/likePost',postcontrollers)
router.get('/posts',postcontrollers)

module.exports=router