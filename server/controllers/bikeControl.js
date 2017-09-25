const models = require('../models/Bike')

module.exports = {
    create: (req, res) => {
        models.create({
            name: req.body.name,
            price: req.body.price,
            url: req.body.url,
            category: req.body.body,
            stock: req.body.stock
        })
        .then(result => {
            res.send({
                msg: 'Success Add Data Bike',
                result
            })
        })
        .catch(err => {
            res.send('Input Data Faild')
        })
    },
    getAll: (req, res) => {
        models.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    },
    getOne: (req, res) => {
        models.find({
            _id: req.params.id
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    }
}