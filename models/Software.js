const mongoose = require('mongoose');

const softwareSchema = new mongoose.Schema ({
  software_name: {
    type: String
  },
  manufacturer: {
    type: String
  },
  product_key: {
    type: String
  },
  seats: {
    type: String
  },
  company: {
    type: String
  },
  licenced_to_name: {
    type: String
  },
  licenced_to_email: {
    type: String
  },
  reassignable: {
    type: Boolean
  },
  supplier: {
    type: String
  },
  order_number: {
    type: Number
  },
  purchase_cost: {
    type: Number
  },
  purchase_date: {
    type: Date
  },
  expiration_date: {
    type: Date
  },
  termination_date: {
    type: Date
  },
  purchase_order_number: {
    type: Number
  },
  depreciation: {
    type: String
  },
  maintained: {
    type: Boolean
  },
  notes: {
    type: String
  }
});

softwareSchema.virtual('url').get(function(){
  return '/inventory/software/' + this._id;
});

module.exports = mongoose.model('software', softwareSchema);
