const express = require('express');
const productController = require('../controllers/product.controller');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/',  productController.index);
router.get('/:id', productController.show);
router.post('/', checkAuth, productController.save);
router.patch('/:id', checkAuth, productController.update);
router.delete('/:id', checkAuth, productController.destroy);

module.exports = router;
