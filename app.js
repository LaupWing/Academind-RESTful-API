const express           =   require('express');
const app               =   express();
const productRoutes     =   require('./api/routes/products');
const orderRoutes       =   require('./api/routes/orders')
// Middleware are functions that start before hostint the website

app
    .use('/products', productRoutes) 
    .use('/orders', orderRoutes)

module.exports = app