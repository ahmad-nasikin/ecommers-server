const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var transactionSchema = new Schema({

})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction