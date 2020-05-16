const express = require('express');
const router = express.Router();

const NewOrderController = require('../controllers/newOrder.controller');

router.post('/order', NewOrderController.postNewOrder);

module.exports = router;
