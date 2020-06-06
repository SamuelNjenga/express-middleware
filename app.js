const express = require('express');
const app = express();

//Global Middleware
app.use(logger);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/users', (req, res) => {
    console.log("User's Page");
    res.send('Users Page');
});

//Our Logger Middleware
function logger(req, res, next) {
    console.log('Before');
    next();
    console.log('After');
    
}

// //Our auth logger
// function auth(req, res, next) {
//     if (req.query.admin === 'true') {
//         req.admin = true;
//         next();
//     } else {
//         res.send('No Auth');
//     }
// }

function auth(req,res,next){
    if(req.query.admin === 'true'){
        req.admin = true;
        next();
        return;
    }
    res.send('No auth');
}



app.listen(3000);