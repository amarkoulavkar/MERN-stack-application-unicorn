const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddEntrySchema = new Schema({
  itemId: {
    type: String
  },
  quantity: {
    type: String
  }
}, {
    collection: 'AddEntry'
  })

module.exports = mongoose.model('AddEntry', AddEntrySchema)