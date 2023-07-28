const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const constants = require('./config/constants');

//Connect to MongoDB

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

try {
    mongoose.connect(
        constants.mongoURI,
        {
            keepAlive: true,
            reconnectTries: Number.MAX_VALUE,
            useMongoClient: true

        },
        () => {
            console.log(`MongoDB Connected`);
        }
    )
} catch (error) {
    console.log(`MongoDB not connected bro:${error} `);
}






const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Header', 'Content-type,Accept,x-access-token,X-key');
    if (req.method === 'OPTIONS') {
        res.status(200).end()
    } else {
        next();
    }
})
require('./services/cache')
const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT} `)
})