const express = require('express');
const app = express();

//Global Middleware
app.use(logger);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/users', auth, (req, res, next) => {
    console.log(`User is admin = ${req.admin}`)
    console.log("User's Page");
    next();
    res.send('Users Page');
});

//Our Logger Middleware
function logger(req, res, next) {
    console.log('Logger');
    console.log(req.originalUrl);
    next();
}

//Our auth logger
function auth(req, res, next) {
    if (req.query.admin === 'true') {
        req.admin = true;
        next();
    } else {
        res.send('No Auth');
    }
}



app.listen(3000);