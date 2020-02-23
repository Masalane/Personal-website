'use strict'

let path = require('path')
let express = require('express')
let router = express.Router()

let regCustomers = require('./middleware/regCustomers.js')
let newPurchase = require('./public/scripts/newPurchase.js')

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'create.html'))
})

// RESTful Interface
router.get('/api/list', function (req, res) {
  res.json(newPurchase.getPurchase())
})

router.post('/api/create', function (req, res) {
  let purchase = { amount: req.body.tokenAmount, type: req.body.tokenType, meterId: req.body.meterId }
  newPurchase.processPurchase(purchase)

  console.log('Body: ', purchase)
  res.redirect(req.baseUrl + '/api/list')
})

module.exports = router
