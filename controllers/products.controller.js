const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
  
  try {
    const allProducts = await Product.find();
    if (!allProducts) res.status(404).json({ message: 'Not found' });
    else res.json(allProducts);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};

exports.getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if(!product) res.status(404).json({ message: 'Not found' });
    else res.json(product);
  }
  catch(err) {
    res.status(500).json(err);
  }
};