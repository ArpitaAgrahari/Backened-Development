const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoute = require('./routes/route.js');

dotenv.config();

const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = 3000;

// Middleware
app.use(express.json());



//for form type data inputs to post the data in fromat of form in testing we can use a express middleware
app.use(express.urlencoded({extended: false}));





// Routes
app.get('/', (req, res) => {
    res.send('hello from node API');
});
app.use('/api/products', productRoute);

// Mongoose connection
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Mongoose got connected");
        app.listen(PORT, () => {
            console.log(`server is listening to port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Mongoose connection failed', error);
});