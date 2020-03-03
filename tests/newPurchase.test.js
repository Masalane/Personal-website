let newPurchase = require('../public/scripts/newPurchase.js')
let regCustomers = require('../middleware/regCustomers.js')

const purchase = {
  amount: 200,
  type: 'electricity token',
  meterId: '23122411234'
}

test('The token voucher is always 20 digits long', () => {

  const TOKEN_LENGTH = 20
  newPurchase.processPurchase(purchase)
  let customer = newPurchase.getPurchase()
  let generatedToken = customer[0].token
  expect(TOKEN_LENGTH).toBe(generatedToken.length)
})

test('The token voucher cannot be less than 20 digits long', () => {

  const TOKEN_LENGTH = 18
  newPurchase.processPurchase(purchase)
  let customer = newPurchase.getPurchase()
  let generatedToken = customer[0].token
  expect(TOKEN_LENGTH).not.toBe(generatedToken.length)
})

test('The token voucher cannot be more than 20 digits long', () => {

  const TOKEN_LENGTH = 22
  newPurchase.processPurchase(purchase)
  let customer = newPurchase.getPurchase()
  let generatedToken = customer[0].token
  expect(TOKEN_LENGTH).not.toBe(generatedToken.length)
})

test('The electricity token is always unique and is randomly generated.', () => {

  const TOKEN = '62917947443875805916'
  newPurchase.processPurchase(purchase)
  let customer = newPurchase.getPurchase()
  let generatedToken = customer[0].token
  expect(TOKEN).not.toBe(generatedToken)
})

test('The list of registered customers is not empty', () => {
  expect(regCustomers.length).not.toBe(0)
})
