const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema([{
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
  amount: { type: Number, required: true },
  notes: { type: String },
}]);

module.exports = mongoose.model('Cart', cartSchema);