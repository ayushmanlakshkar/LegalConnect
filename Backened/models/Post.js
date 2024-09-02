const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const PostSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true 
  },
  content: {
    type: String,
    required: true, 
    trim: true 
  },
  time: {
    type: Date,
    default: Date.now
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  images: [
    {
      type: String,
      required: false 
    }
  ]
});




// Create a model based on the schema
const Post = mongoose.model('Post', PostSchema);
module.exports = Post

