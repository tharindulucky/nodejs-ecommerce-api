const express = require('express');
const cartController = require('../controllers/cart.controller');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', checkAuth, cartController.getCartItems);
router.post('/addtocart', checkAuth, cartController.addToCart);
router.delete('/:cartItemId/remove', checkAuth, cartController.removeFromCart);
router.delete('/clear', checkAuth, cartController.clearCart);

module.exports = router;
