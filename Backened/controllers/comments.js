const Comment = require('../models/Comment')
const Post = require('../models/Post')
const User = require('../models/User')

const postComment = async (req, res) => {
    try {
        const post =await  Post.findOne({ _id: req.body.postId })
        const user =await  User.findOne({ _id: req.body.userId })
        if (post && user) {
            console.log(user)
            user.role === 'public'?
                res.status(400).send({ message: 'you cannot comment ' })
                :
                Comment.create({
                    ref_post: post._id,
                    commentor: user._id,
                    content: req.body.content
                }).then(() => {
                    res.status(200).send({ message: "Commented on a post" })
                })

        } else {
            res.status(404).send({ message: "Invalid post or user" })
        }
    } catch {
        res.send(400).send({ message: "Internal server error" })
    }

}

const showComments = async (req, res) => {
    try {
        const post = await  Post.findById(req.body.postId)
        if (!post) return res.status(404).send({ message: "post not found" })
        const comments = await Comment.find({ ref_post: req.body.postId })
        console.log(comments)
        res.status(200).send(comments)
    } catch {
        res.status(400).send({ message: "internal error" })
    }

}

module.exports ={
    postComment,showComments
}