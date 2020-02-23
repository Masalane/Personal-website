'use strict'

// Requiring relevent js files. 
const regCustomers = require('../../middleware/regCustomers.js')
const verifyPurchase = require('./verifyPurchase.js')

let customerPurchase = []
let token = []

function getPurchase () {
  return customerPurchase
}

function processPurchase (purchase) {
  if (verifyPurchase.verifyParameters(purchase)) {
    for (let index = 0; index < regCustomers.length; index++) {
      var currCustomer = {}
      if (regCustomers[index].meterId == purchase.meterId) {
        currCustomer.name = regCustomers[index].name
        currCustomer.token = generateToken()
        console.log(currCustomer.token)
        break
      }else {
        currCustomer = '{ Customer does not exist! }'
      }
    }
    console.log(currCustomer.token)
    customerPurchase.splice(0, customerPurchase.length)
    customerPurchase.push(currCustomer)
  }
  else
    return 'Invalid parameters'
}

function generateToken () {
  const TOKEN_LENGTH = 20
  token = []
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
