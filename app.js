const express           =   require('express');
const app               =   express();
const productRoutes     =   require('./api/routes/products');
const orderRoutes       =   require('./api/routes/orders');
const morgan            =   require('morgan');
const bodyParser        =   require('body-parser');
const mongoose          =   require('mongoose')
// Middleware are functions that start before hostint the website

mongoose.connect('mongodb+srv://laupwing:laupwing@node-rest-shop-thowi.mongodb.net/test?retryWrites=true',{useNewUrlParser:true})

app
    .use(morgan('dev'))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    // Before defining the routes we should set the headers to prevent from cors errors
    // It will not send these headers it will just set the headers for the other middlewares
    .use((req,res, next)=>{
        // First parameter is to set allowance and second which site has acces
        // * means every site
        res.header('Acces-Control-Allow-Origin', '*');
        res.header('Acces-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

        if(req.method === 'OPTIONS'){
            // Which http requests are supported?
            res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
            return res.status(200).json({});
        }
    })
    .use('/products', productRoutes) 
    .use('/orders', orderRoutes)
    // Every other url requests will get to this middleware below
    .use((req, res, next)=>{
        const error = new Error('Not Found');
        error.status = 404 
        // This below will forward the error message
        next(error)
    })
    .use((error, req, res, next)=>{
        res.status(error.status || 500);
        res.json({
            error:{
                message: error.message
            }
        })
    });

module.exports = app