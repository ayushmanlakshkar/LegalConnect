const mongoose = require('mongoose');
const {formatTimestamp} =require('../utils/timestamp')
// Define a schema
const commentdetails = new mongoose.Schema({
    ref_post:{type: mongoose.Schema.Types.ObjectId, ref: 'post' },
    commentor:{type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    content:String,
    time:{
        type:Date,
        default: Date.now   
     },
     timestamp:{
        type:String,
        default : function() {
         return formatTimestamp(Date.now()); // Call formatTimestamp with Date.now
     }
     }
});

// Create a model based on the schema
const Comment = mongoose.model('comment',commentdetails);
module.exports = Comment;
