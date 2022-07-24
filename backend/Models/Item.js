const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: String
  },
  image: {
    type: String
  }
}, {
    collection: 'Items'
  })

module.exports = mongoose.model('Item', ItemSchema)