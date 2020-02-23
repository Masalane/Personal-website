'use strict'

let verifyPurchase = require('../public/scripts/verifyPurchase.js')

const purchase1 = {
  amount: -200,
  type: 'electricity token',
  meterId: '23122411234'
}

const purchase2 = {
  amount: 200,
  type: 'airtime',
  meterId: '23122411234'
}

const purchase3 = {
  amount: 200,
  type: 'electricity token',
  meterId: '2312241123433'
}

const purchase4 = {
  amount: 200,
  type: 'electricity token',
  meterId: '231224112'
}

const purchase5 = {
  amount: 200,
  type: 'electricity token',
  meterId: '23122411234'
}

test('Customer cannot enter a negative amount.', () => {

  let msg = verifyPurchase.verifyParameters(purchase1)
  expect(msg).toEqual('Amount cannot be negative')
})

test('The token cannot be of any other type.', () => {

  let msg = verifyPurchase.verifyParameters(purchase2)
  expect(msg).toEqual('Token cannot be of any other type but electricity')
})

test('MeterId cannot have more than 12 characters', () => {

  let msg = verifyPurchase.verifyParameters(purchase3)
  expect(msg).toEqual('MeterId cannot be more than 12 characters in length')
})

test('MeterId cannot have less than 12 characters', () => {

  let msg = verifyPurchase.verifyParameters(purchase4)
  expect(msg).toEqual('MeterId cannot be more than 12 characters in length')
})

test('The parameters entered are valid', () => {

  let msg = verifyPurchase.verifyParameters(purchase5)
  expect(msg).toEqual('Parameters are valid')
})
