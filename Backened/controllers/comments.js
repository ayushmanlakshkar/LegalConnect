const Comment = require('../models/Comment')
const Post = require('../models/Post')
const User = require('../models/User')

const postComment = async (req, res) => {
    try {
        const post = Post.findOne({ _id: req.body.postId })
        const user = User.findOne({ _id: req.body.userId })
        if (post && user) {
            user.role === 'public' && post.role === 'experience' ?
                res.status(400).send({ message: 'you cannot comment on lawyers post' })
                :
                Comment.create({
                    ref_post: post._id,
                    ref_user: user._id,
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
        const post = Post.find({ _id: req.body.postId });
        if (!post) return res.status(404).send({ message: "post not found" })
        const comments = Comment.find({ ref_user: req.body.postId })
        res.status(200).send(comments)
    } catch {
        res.status(400).send({ message: "internal error" })
    }

}