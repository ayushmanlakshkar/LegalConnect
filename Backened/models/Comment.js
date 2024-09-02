const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    ref_post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true 
    },
    post_type: {
        type: String,
        enum: ['Post', 'Question'], // Enum to differentiate between Post and Question
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true // Ensure that every comment has an author
    },
    content: {
        type: String,
        required: true,
        trim: true // Trim any extra spaces
    },
    time: {
        type: Date,
        default: Date.now
    }
});

// Create a model based on the schema
const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment;
