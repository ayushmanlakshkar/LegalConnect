const Post = require('../models/Post')

const createPost = async (req, res) => {
    ref_user = await user.findOne({ username: req.body.name });
    if (!ref_user) {
        return res.status(404).send({ message: "Invalid user" })
    }
    Post.create({
                ref_user:!req.body.anonymous?ref_user._id : "",
                anonymous_name:req.body.anonymous?ref_user._id : "",
                title:req.body.title,
                content:req.body.content,
                role: ref_user.role==='lawyer'?req.body.postType:'question'
            })
    
}

const likePost = async (req, res) => {
    const { postId, userId } = req.body; // Assuming postId and userId are sent in the request body

    try {
        // Find the post by ID
        let Post = await Post.findById(postId);

        if (!Post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Check if the user has already liked the post
        const likedIndex = Post.likes.indexOf(userId);

        if (likedIndex === -1) {
            // User hasn't liked the post, so add their like
            Post.likes.push(userId);
        } else {
            // User has already liked the post, so remove their like
            Post.likes.splice(likedIndex, 1);
        }

        // Save the updated post
        await Post.save();

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

