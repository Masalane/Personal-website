'use strict'

const fs = require('fs')
let regCustomers = fs.readFileSync('./data/customers.json')
regCustomers = JSON.parse(regCustomers)
module.exports = regCustomers
