const express = require('express');
const router = express.Router();

const postcontrollers = require('../controllers/post')

router.post('/create',postcontrollers.createPost)
router.post('/likePost',postcontrollers.likePost)
router.post('/posts',postcontrollers.showPosts)

module.exports=router