const models = require('../models');

function save(req, res, next) {

    const image = {
        url: req.file.filename,
        productId: req.body.productId
    };

    models.Image.create(image).then(result => {
        res.status(201).json({
            message: 'Image uploaded successfully',
            product: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Something Went Wrong',
            error: error
        });
    });
}


function upload(req, res, next) {
    if(req.file.filename){
        res.status(201).json({
            message: 'Image uploaded successfully',
            url: req.file.filename
        });
    }else {
        res.status(500).json({
            message: 'Something Went Wrong',
            error: error
        });
    }
}


function getImage(req, res, next) {
    const id = req.params.id;
    models.Image.findOne({where: {id: id}, limit: 1}).then(result => {

        if(result){
            const response = {
                id: result.id,
                url: result.url,
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


function destroy(req, res, next) {
    const id = req.params.id;
    models.Image.findByPk(id, {include: [models.Product]}).then(image => {
        if (image && (image.Product.userId == req.userData.userId)) {

            image.destroy().then(result => {
                const response = {
                    message: "Image deleted successfully"
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
                message: 'Object not found!',
            });
        }
    });
}


module.exports = {
    save:save,
    upload: upload,
    getImage: getImage,
    destroy: destroy
}
