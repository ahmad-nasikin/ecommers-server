const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommers_two')

const bike = require('./routes/bike')

var app = express()

app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/bike', bike)

app.listen(3000, () => {
    console.log('Port 3000 Ok')
})