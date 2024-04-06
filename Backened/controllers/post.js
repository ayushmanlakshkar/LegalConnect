const Post = require('../models/Post')
const user = require('../models/User')

const createPost = async (req, res) => {
    ref_user = await user.findOne({ username: req.body.username });

    if (!ref_user) {
        return res.status(404).send({ message: "Invalid user" })
    }

    if (ref_user.role === 'lawyer') {
        if (req.body.postType === 'experience') {
            Post.create({
                ref_user: ref_user._id,
                title: req.body.title,
                content: req.body.content,
                role: 'experience'
            })
            return res.send("created post1")
        } else {
            if (req.body.anonymous) {
                Post.create({
                    anonymous_name: ref_user._id,
                    title: req.body.title,
                    content: req.body.content,
                    role: 'question'
                })
                return res.send("created post2")

            } else {
                Post.create({
                    ref_user: ref_user._id,
                    title: req.body.title,
                    content: req.body.content,
                    role: 'question'
                })
                return res.send("created post3")
            }
        }
    } else {
        if (req.body.postType === 'question') {
            if (req.body.anonymous) {
                Post.create({
                    anonymous_name: ref_user._id,
                    title: req.body.title,
                    content: req.body.content,
                    role: 'question'
                })
                return res.send("created post4")

            } else {
                Post.create({
                    ref_user: ref_user._id,
                    title: req.body.title,
                    content: req.body.content,
                    role: 'question'
                })
                return res.send("created post5")
            }
        } else {
            return res.status(400).send({ message: "User not allowed to post" })
        }
    }
}

const likePost = async (req, res) => {

    try {
        // Find the post by ID
        let post_id
        post_id = await Post.findById(req.body.postId)

        if (!Post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        // Check if the user has already liked the post
        const likedIndex = post_id.likes.indexOf(req.body.userId);

        if (likedIndex === -1) {
            // User hasn't liked the post, so add their like
            post_id.likes.push(req.body.userId);
        } else {
            // User has already liked the post, so remove their like
            post_id.likes.splice(likedIndex, 1);
        }

        // Save the updated post
        await post_id.save();

        // Send a success response
        res.json({ message: 'Like toggled successfully', liked: !!(likedIndex === -1) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const showPosts = async (req, res) => {
    all_posts = await Post.find({ role: req.body.role }).sort({ time: 1 })
    res.send(all_posts);
}

module.exports = {
    createPost, likePost, showPosts
}