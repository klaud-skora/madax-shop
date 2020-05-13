const Product = require('../models/product.model');

exports.getAll = async (res) => {
  
  try {
    const allProducts = await Product.find();
    if (!allProducts) res.status(404).json({ message: 'Not found' });
    else res.json(allProducts);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};