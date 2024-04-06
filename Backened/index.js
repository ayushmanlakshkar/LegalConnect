const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const questionRoutes = require('./routes/question');


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true ,useUnifiedTopology:true}));
app.use(cors());
app.use(express.static('public'))


app.use('/auth',authRoutes)
app.use('/post',postRoutes)
app.use('/question',questionRoutes)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        server.listen(process.env.PORT || 3001, () => {
            console.log('Server is running on port ' + (process.env.PORT || 3001));
        });

    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
    });
