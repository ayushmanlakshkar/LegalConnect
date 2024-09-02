const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true, 
        trim: true 
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true // Ensure that every question has a creator
    },
    time: {
        type: Date,
        default: Date.now 
    },
    upVotes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Reference to the User model for users who liked the question
        }
    ],
    downVotes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Reference to the User model for users who liked the question
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment' // Reference to the Answer model
        }
    ]
});

// Create a model based on the schema
const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
