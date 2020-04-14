const models = require('../models');
const Sequelize = require('sequelize');

function index(req, res, next){

    const page = parseInt(req.query.page) || 0;
    const limit = 10

    models.Product.findAll({
        include: [models.Image, models.User, {model: models.Category, as: 'parentCategory'}, {model: models.Category, as: 'subCategory'}],
        offset: page * limit,
        limit: limit,
    }).then(result => {

        const response = {
            count: result.length,
            products: result.map(product => {

                //User relation. Make it seperate 'cause u don't wanna include fields like password.
                const userRel = {};
                if(product.User != null){
                    userRel.name = product.User.name;
                    userRel.email = product.User.email;
                    userRel.phone = product.User.phone;
                    userRel.avatar = product.User.avatar;
                }

                return {
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    images: product.Images,
                    category: product.parentCategory,
                    sub_category: product.subCategory,
                    user:userRel,
                    url: process.env.APP_URL+'/products/'+product.id
                }
            })
        };
        res.status(200).json(response);
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong!',
            error: error
        });
    });
}


function save(req, res, next) {

    const product = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        status: "pending",
        parent_category: req.body.parent_category,
        sub_category: req.body.sub_category,
        keywords: req.body.keywords,
        userId: req.userData.userId
    };

    models.Product.create(product).then(result => {

        //Save data to ProductsImage table
        if(req.body.images){
            req.body.images.map(url => {
                const product_image = {
                    url: url,
                    productId: result.id,
                    sellerId: req.userData.userId,
                    status: 'published'
                }
                models.Image.create(product_image).then(result => {
                    console.log(result);
                });
            });
        }


        res.status(201).json({
            message: 'Product Created Successfully',
            product: result
        });
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Something Went Wrong',
            error: error
        });
    });
}


function show(req, res, next) {
    const id = req.params.id;
    models.Product.findByPk(id, {
        include: [models.Image, models.User, {model: models.Category, as: 'parentCategory'}, {model: models.Category, as: 'subCategory'}]
    }).then(result => {

        if(result){

            //User relation. Make it seperate 'cause u don't wanna include fields like password.
            const userRel = {};
            if(result.User !== null){
                userRel.name = result.User.name;
                userRel.email = result.User.email;
                userRel.phone = result.User.phone;
                userRel.avatar = result.User.avatar;
            }

            const response = {
                title: result.title,
                description: result.description,
                price: result.price,
                images: result.Images,
                category: result.parentCategory,
                sub_category: result.subCategory,
                keywords:result.keywords,
                user:userRel
            }
            res.status(200).json(response);
        }else{
            res.status(404).json({
                message: 'Object not found!',
            });
        }
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong!',
            error: error
        });
    });
}



function update(req, res, next){
    const id = req.params.id;
    const productUpdateObj = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        status: 'pending',
        parent_category: req.body.parent_category,
        sub_category: req.body.sub_category,
        keywords: req.body.keywords,
    }

    //Removes empty keys
    Object.keys(productUpdateObj).forEach(key => productUpdateObj[key] === undefined ? delete productUpdateObj[key] : '');

    models.Product.update(productUpdateObj, {where:{id:id, userId: req.userData.userId}}).then(result => {
        console.log(result);
        if(result == 0){
            res.status(404).json({
                message: 'Product not found'
            });
        }else {

            //Save data to ProductsImage table
            req.body.images.map(url => {
                const product_image = {
                    url: url,
                    productId: id,
                    sellerId: req.userData.userId,
                    status: 'published'
                }
                models.Image.create(product_image).then(result => {
                    console.log(result);
                });
            });

            res.status(200).json({
                message: 'Product Updated Successfully',
                product: productUpdateObj
            });
        }
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong!',
            error: error
        });
    });
}


function destroy(req, res, next) {
    const id = req.params.id;
    const product = models.Product.findByPk(id).then(product => {
        if (product && (req.userData.userId == product.userId)) {
            product.destroy().then(result => {
                const response = {
                    message: "Product deleted successfully"
                }
                res.status(200).json(response);
            }).catch(error => {
                console.log(error);
                res.status(500).json({
                    message: 'Something went wrong!',
                    error: error
                });
            });
        } else {
            res.status(404).json({
                message: 'Product not found!',
            });
        }
    });
}


function searchProducts(req, res, next){
    const page = parseInt(req.query.page) || 0;
    const search_query = req.query.search_query || '';
    const limit = 10

    models.Product.findAll({
        where: {title:{[Sequelize.Op.like]: '%'+ search_query +'%'}},
        include: [models.Image, models.User, {model: models.Category, as: 'parentCategory'}, {model: models.Category, as: 'subCategory'}],
        offset: page * limit,
        limit: limit,
    }).then(result => {

        const response = {
            count: result.length,
            products: result.map(product => {

                //User relation. Make it seperate 'cause u don't wanna include fields like password.
                const userRel = {};
                if(product.User != null){
                    userRel.name = product.User.name;
                    userRel.email = product.User.email;
                    userRel.phone = product.User.phone;
                    userRel.avatar = product.User.avatar;
                }

                return {
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    images: product.Images,
                    category: product.parentCategory,
                    sub_category: product.subCategory,
                    user:userRel,
                    url: process.env.APP_URL+'/products/'+product.id
                }
            })
        };
        res.status(200).json(response);
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong!',
            error: error
        });
    });
}


function getProductsBySeller(req, res, next){

    const page = parseInt(req.query.page) || 0;
    const limit = 10

    models.Product.findAll({
        where:{userId: req.userData.userId},
        include: [models.Image, models.User, {model: models.Category, as: 'parentCategory'}, {model: models.Category, as: 'subCategory'}],
        offset: page * limit,
        limit: limit,
    }).then(result => {

        const response = {
            count: result.length,
            products: result.map(product => {

                //User relation. Make it seperate 'cause u don't wanna include fields like password.
                const userRel = {};
                if(product.User != null){
                    userRel.name = product.User.name;
                    userRel.email = product.User.email;
                    userRel.phone = product.User.phone;
                    userRel.avatar = product.User.avatar;
                }

                return {
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    images: product.Images,
                    category: product.parentCategory,
                    sub_category: product.subCategory,
                    user:userRel,
                    url: process.env.APP_URL+'/products/'+product.id
                }
            })
        };
        res.status(200).json(response);
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong!',
            error: error
        });
    });
}


module.exports = {
    save: save,
    index: index,
    show: show,
    update: update,
    destroy: destroy,
    searchProducts: searchProducts,
    getProductsBySeller: getProductsBySeller,
};
