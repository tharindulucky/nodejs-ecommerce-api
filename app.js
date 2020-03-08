const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');
const models = require('./models');

const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const imageRoutes = require('./routes/images');
const orderRoutes = require('./routes/orders');
const cartRoutes = require('./routes/carts');

const app = express();

//Setting Headers for CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});


//Loggin module starts
const logDirectory = path.join(__dirname, 'logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory); // ensure log directory exists
const accessLogStream = rfs.createStream('access.log', { // create a rotating write stream
    interval: '1d', // rotate daily
    path: logDirectory
});
//Logging module ends



//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(morgan('combined', { stream: accessLogStream }));



//routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/images', imageRoutes);
app.use('/orders', orderRoutes);
app.use('/cart', cartRoutes);

/*
Error Handling
 */
app.use((req, response, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
