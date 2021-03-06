const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    status: { type: String, emum: ['pending', 'paid'], default: 'pending' },
    total: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamp: true }
);

orderSchema.plugin(require('./plugins/isDeletedFalse'));

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
