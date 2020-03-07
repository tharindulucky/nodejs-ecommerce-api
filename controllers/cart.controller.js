const models = require('../models');


function getCartItems(req, res, next) {
    models.Cart.findAll({

        include:[{
            model: models.Product,
            include:[
                {
                    model: models.Image
                }
            ]
        }],

        where:{userId: req.userData.userId}}).then(cartItems => {
        res.status(200).json({
            count: cartItems.length,
            products: cartItems,
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong!',
            product: error
        });
    });
}

function addToCart(req, res, next) {
    models.Product.findOne({where: {id: req.body.productId}, limit: 1}).then(product => {
       if(!product){
           return res.status(404).json({
               message: 'Product not found!',
           });
       }

       const cartItem = {
           productId: req.body.productId,
           quantity: req.body.quantity,
           userId: req.userData.userId,
       }

       models.Cart.create(cartItem).then(result => {
           res.status(201).json({
               message: 'Product Added to the Cart Successfully',
               product: {
                   productId: result.productId,
                   quantity: result.quantity,
                   updatedAt: result.updatedAt,
                   createdAt: result.createdAt
               }
           });
       }).catch(error => {
           res.status(500).json({
               message: 'Something went wrong!',
               product: error
           });
       });


    });
}


function removeFromCart(req, res, next){
    const cartItemId = req.params.cartItemId;
    models.Cart.findOne({where: {id: cartItemId, userId: req.userData.userId}, limit: 1}).then(cartItem => {
        cartItem.destroy().then(result => {
            res.status(200).json({
                message: 'Product removed from the cart',
                product: result
            });
        }).catch(error => {
            res.status(500).json({
                message: 'Something went wrong!',
                product: error
            });
        });
    }).catch(error => {
        res.status(404).json({
            message: 'Cart Item not found!',
            product: error
        });
    });
}


function clearCart(req, res, next){
    models.Cart.destroy({where: {userId: req.userData.userId}}).then(result => {
        res.status(200).json({
            message: 'Products removed from the cart',
            deleted: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong!',
            product: error
        });
    });
}


module.exports = {
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    getCartItems: getCartItems
};
