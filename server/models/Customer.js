const mongoose = require('mongoose')
const Schmea = mongoose.Schema;

var customerSchema = new Schmea({

})

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer