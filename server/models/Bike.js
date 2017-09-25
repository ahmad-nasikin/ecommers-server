const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var bikeSchema = new Schema({
    name: String,
    price: String,
    url: String,
    category: String,
    stock: Number
})

var Bike = mongoose.model('Bike', bikeSchema)

module.exports = Bike