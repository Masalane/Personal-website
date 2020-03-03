'use strict'

let path = require('path')
let express = require('express')
let router = express.Router()

// Loading files
const newPurchase = require('./public/scripts/newPurchase.js')
const regCustomers = require('./middleware/regCustomers.js')
const body = require('./middleware/printBody.js')

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'create.html'))
})

// RESTful API
router.get('/api/customer', function (req, res) {
  res.json(newPurchase.getPurchase())
})

router.post('/api/create', function (req, res) {
  let purchase = { amount: req.body.tokenAmount, type: req.body.tokenType, meterId: req.body.meterId }
  newPurchase.processPurchase(purchase)
  // body.printBody(purchase)
  res.redirect(req.baseUrl + '/api/customer')
})

module.exports = router
