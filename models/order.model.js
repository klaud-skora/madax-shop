const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderer: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    postCode: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
  },
  order: [{
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
    amount: { type: Number, required: true },
    notes: { type: String },
  }],
}); 

module.exports = mongoose.model('Order', orderSchema);