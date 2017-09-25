const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var bikeSchema = new Schema({

})

var Bike = mongoose.model('Bike', bikeSchema)

module.exports = Bike