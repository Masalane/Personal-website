'use strict'

const LENGTH_OF_METER_ID = 11

function verifyParameters (purchase) {
  if (purchase.amount < 0) {
    return 'Amount cannot be negative'
  }
  else if (!(purchase.meterId.length == LENGTH_OF_METER_ID)) {
    return 'MeterId cannot be more than 12 characters in length'
  }
  else if (!(purchase.type == 'electricity token')) {
    return 'Token cannot be of any other type but electricity'
  }else {
    return 'Parameters are valid'
  }
}

module.exports = {
  verifyParameters: verifyParameters
}
