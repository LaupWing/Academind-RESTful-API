const express   =   require('express');
const router    =   express.Router();

// Get is a method that will handles incoming get requests.\
// The first parameter is the route/path of the url
// THe url of the get request below is /products but you only see /
// thats because in the app we alrdy referred to the /products path in the url
// Otherwise the url will be /products/products
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
})

router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling POST requests to /products'
    })
})

router.get('/:productId',(req, res, next)=>{
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message : 'You discovered the special ID',
            id      : id
        })
    }else{
        res.status(200).json({
            message : 'You passed an ID'
        })
    }
})

router.patch('/:productId',(req, res, next)=>{
    res.status(200).json({
        message : 'Updated Product'
    })
})

router.delete('/:productId',(req, res, next)=>{
    res.status(200).json({
        message : 'Deleted Product'
    })
})

module.exports = router