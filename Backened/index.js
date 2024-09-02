const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const cors = require('cors');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comments');


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true ,useUnifiedTopology:true}));
app.use(express.static('public'))
app.use(cors());


app.use('/api/auth',authRoutes)
app.use('/api/post',postRoutes)
app.use('/api/comment',commentRoutes)

mongoose.connect('mongodb+srv://clashingtech44:1234567890@cluster0.p9wymk5.mongodb.net/Legal101')
    .then(() => {
        app.listen(process.env.PORT || 3001, () => {
            console.log('Server is running on port ' + (process.env.PORT || 3001));
        });
    })
    .catch((err) => {
        console.log(err)
        console.error('MongoDB connection error:', err.message);
    });
