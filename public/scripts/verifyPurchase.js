'use strict'

const LENGTH_OF_METER_ID = 11

function verifyParameters (purchase) {
  let tokenType = purchase.type.toLowerCase()

  if (purchase.amount < 0) {
    return 'Amount cannot be negative!'
  }
  if (!(purchase.meterId.length == LENGTH_OF_METER_ID)) {
    return 'Length of meterId must be 11'
  }
  if (!(tokenType = 'electricity token')) {
    return 'This microservice only caters for electricity token'
  }
  return 'Valid parameters.'
}

module.exports = verifyParameters
