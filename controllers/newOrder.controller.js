const Order = require('../models/order.model');

exports.postNewOrder = async (req, res) => {
  
  try {
    const { orderer, products, total  } = req.body;
    if (validateInputs(orderer) && products.length && total) {
      const newOrder = new Order({
        products: products,
        orderer: { ...orderer },
        total: total,
      });
      await newOrder.save();
        res.json(newOrder);
    } else {
      throw new Error('Wrong input!');
    }

  } catch (err) {
    res.status(500).json(err);
  }
  
};