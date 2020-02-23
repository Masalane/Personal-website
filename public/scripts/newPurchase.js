'use strict'

// Requiring relevent js files. 
let regCustomers = require('../../middleware/regCustomers.js')
let verifyPurchase = require('./verifyPurchase.js')

let customerPurchase = []
let token = []

function getPurchase () {
  return customerPurchase
}

function processPurchase (purchase) {
  if (verifyPurchase.verifyParameters(purchase)) {
    let currCustomer = {}
    for (let index = 0; index < regCustomers.length; index++) {
      if (regCustomers[index].meterId == purchase.meterId) {
        currCustomer.name = regCustomers[index].name
        currCustomer.token = generateToken()
      }
    }
    customerPurchase.push(currCustomer)
  }
  else
    return 'Invalid parameters'
}

function generateToken () {
  const TOKEN_LENGTH = 20
  for (let index = 1; index <= TOKEN_LENGTH; index++) {
    let randNum = Math.floor(Math.random() * Math.floor(10))
    token += randNum
  }
  return token
}

module.exports = {
  getPurchase: getPurchase,
  processPurchase: processPurchase
}