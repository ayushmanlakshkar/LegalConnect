const express = require('express');
const router = express.Router();
const commentControllers = require('../controllers/comments')
const comments = require('../controllers/comments')

router.post('/postComment',commentControllers.postComment)
router.post('/showComment',commentControllers.showComments)

module.exports = router
