const express = require('express');
const app = express();

// Middleware are functions that start before hostint the website

app
    .use((req,res,next)=>{// use means to use some middelware before hosting the website
        res.status(200).json({
            message: 'It Works'
        });
    }) 


module.exports = app