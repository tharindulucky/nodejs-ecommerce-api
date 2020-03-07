const models = require('../models');

function create(req, res, next) {
    const userId = req.userData.userId;
    models.Cart.findAll({where:{userId: userId}}).then(cartProducts => {

        if(cartProducts.length > 0){

            const order = {
                userId: userId,
                status: "pending"
            };

            models.Order.create(order).then(result => {
                if(result){
                    const productOrderItems = [];
                    cartProducts.map(product => {
                        const productOrderItem = {
                            productId: product.productId,
                            quantity: product.quantity,
                            orderId: result.id
                        };
                        productOrderItems.push(productOrderItem);
                    });

                    models.ProductsOrder.bulkCreate(productOrderItems).then(result => {
                        models.Cart.destroy({where:{userId: userId}}).then(result => {
                            res.status(200).json({
                                message: 'Order Created Successfully',
                            });
                        }).catch(error => {
                            res.status(500).json({
                                message: 'Something went wrong!',
                                error: error
                            });
                        });

                    }).catch(error => {
                        res.status(500).json({
                            message: 'Something went wrong!',
                            error: error
                        });
                    });
                }
            }).catch(error => {
                res.status(500).json({
                    message: 'Something went wrong!',
                    error: error
                });
            });
        }else{
            res.status(422).json({
                message: 'Your cart is empty'
            });
        }

    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong!',
            error: error
        });
    });
}


function getOrdersForUser(req, res, next){

    models.Order.findAll({
        include: [
            {
                model: models.ProductsOrder,
                include: [{
                    model: models.Product
                }]
            },
        ],
        where:{userId: req.userData.userId}}).then(orders => {
        res.status(200).json({
            count: orders.length,
            orders: orders
        });

    }).catch( error => {
        res.status(500).json({
            message: 'Something went wrong!',
            error: error
        });
    });
}


function getOrders(req, res, next){
    models.Order.findAll({
        include: [
            {
                model: models.ProductsOrder,
                include: [{
                    model: models.Product
                }]
            },
        ],
        }).then(orders => {
        res.status(200).json({
            count: orders.length,
            orders: orders
        });

    }).catch( error => {
        res.status(500).json({
            message: 'Something went wrong!',
            error: error
        });
    });
}

module.exports = {
    create: create,
    getOrdersForUser: getOrdersForUser,
    getOrders: getOrders
}
