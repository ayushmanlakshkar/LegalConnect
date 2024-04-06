const mongoose = require('mongoose');
const timestamp=require('../utils/timestamp')
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
        default:timestamp(time)
     }
});

// Create a model based on the schema
module.exports= mongoose.model('comment',commentdetails);

