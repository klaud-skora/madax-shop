const Cart = require('../models/cart.model');

exports.getCart = async(req, res) => {
  
  try {
    const cart = await Cart.find();
    if (!cart) res.status(404).json({ message: 'Not found' });
    else res.json(cart);  
  } catch(err) {
    res.status(500).json(err);
  }

}

exports.addToCart = async(req, res) => {
  
  try {
    const { _id, amount, notes  } = req.body;
    const newItem = new Cart({ _id: _id, amount: amount, notes: notes });
    await newItem.save();
    res.json(newItem);
  } catch(err) {
    res.status(500).json(err);
  }

}

exports.removeFromCart = async(req, res) => {
  
  try {
    
    const productOut = await Cart.findById(req.params.id);
    if(!productOut) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      await Cart.deleteOne({ _id: req.params.id});
      res.json({ message: 'OK' });
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

}