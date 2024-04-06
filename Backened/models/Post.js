const mongoose = require('mongoose');
// Define a schema
const bcrypt = require('bcryptjs');

const roles=["experience","question"]

const postdetails = new mongoose.Schema({
  ref_user:{type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  anonymous_name:{
    type:String
  },
  title:String,
  content:String,
  time:{
    type:Date,
    default: Date.now
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    role:{
    type:String,
    enum:roles
},
comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'comments'
}]
});


postdetails.pre('save', async function (next) {
  const user = this;
  if (!user.isModified("anonymous_name")) {
      return next();
  }

  try {
      const saltRound = await bcrypt.genSalt(10);
      const hashName = await bcrypt.hash(user.anonymous_name, saltRound);
      user.anonymous_name = hashName;
      next();
  } catch (error) {
      return next(error);
  }
});



// Create a model based on the schema
const Post = mongoose.model('Post', postdetails);
module.exports = Post

