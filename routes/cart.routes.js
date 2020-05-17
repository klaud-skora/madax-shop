const express = require('express');
const router = express.Router();

const CartController = require('../controllers/cart.controller');

router.get('/cart', CartController.getCart);
router.post('/cart', CartController.addToCart);
router.delete('/cart', CartController.removeFromCart);

module.exports = router;
