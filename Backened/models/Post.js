const mongoose = require('mongoose');
// Define a schema

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






// Create a model based on the schema
module.exports= mongoose.model('Post', postdetails);

