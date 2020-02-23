'use strict'

let verifyPurchase = require('../public/scripts/verifyPurchase.js')

const purchase1 = {
  amount: -200,
  token: 'electricity token',
  meterId: '23122411234'
}

test('Customer cannot enter a negative amount.', () => {
  let msg = verifyPurchase.verifyParameter(purchase1)
  expect(msg).toEqual('Amount cannot be negative!')
})


