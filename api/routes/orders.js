const express   =   require('express');
const router    =   express.Router();

// Get is a method that will handles incoming get requests.\
// The first parameter is the route/path of the url
// THe url of the get request below is /products but you only see /
// thats because in the app we alrdy referred to the /products path in the url
// Otherwise the url will be /products/products
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message : 'Fetching orders'
    })
})

router.post('/', (req, res, next)=>{
    const order = {
        productId : req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message : 'Order was created',
        order: order
    })
})

router.get('/:orderId',(req, res, next)=>{
    res.status(200).json({
        message : 'Order details',
        orderId : req.params.orderId
    })
})

router.delete('/:orderId',(req, res, next)=>{
    res.status(200).json({
        message : 'Deleted order',
        orderId : req.params.orderId
    })
})

module.exports = router