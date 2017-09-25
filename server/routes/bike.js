const express = require('express')
const router = express.Router()

const bikeControl = require('../controllers/bikeControl')

router.post('/', bikeControl.create)
router.get('/', bikeControl.getAll)
router.get('/:id', bikeControl.getOne)

module.exports = router