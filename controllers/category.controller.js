const models = require('../models');

function getParentCategories(req, res, next){

    models.Category.findAll({
        include: [models.Category],
        where: {parentId: '0'}
    }).then(result => {

        const response = result.map(category => {
            return {
                id: category.id,
                name: category.name,
                parentId: category.parentId,
                icon: category.icon,
                subCategories: category.Categories.map(sub_category => {
                    return {
                        id: sub_category.id,
                        name: sub_category.name,
                        parentId: sub_category.parentId,
                        icon: sub_category.icon,
                    }
                })
            }
        });

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
    getParentCategories: getParentCategories
};
