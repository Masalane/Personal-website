'use strict'

const verifyPurchase = require('../public/scripts/verifyPurchase.js')

test('Customer cannot enter a negative amount.', () => {

  const purchase = {
    amount: -200.00,
    type: 'electricity token',
    meterId: '23122411234'
  }
  const msg = verifyPurchase.verifyParameters(purchase)
  expect(msg).toEqual('Amount cannot be negative')
})

test('The token cannot be of any other type but electricity.', () => {

  const purchase = {
    amount: 150.00,
    type: 'airtime',
    meterId: '23122411234'
  }
  const msg = verifyPurchase.verifyParameters(purchase)
  expect(msg).toEqual('Token cannot be of any other type but electricity')
})

test('MeterId cannot have more than 12 characters', () => {

  const purchase = {
    amount: 50.00,
    type: 'electricity token',
    meterId: '2312241123433'
  }
  const msg = verifyPurchase.verifyParameters(purchase)
  expect(msg).toEqual('MeterId cannot be more than 12 characters in length')
})

test('MeterId cannot have less than 12 characters', () => {

  const purchase = {
    amount: 200.00,
    type: 'electricity token',
    meterId: '231224112'
  }
  const msg = verifyPurchase.verifyParameters(purchase)
  expect(msg).toEqual('MeterId cannot be more than 12 characters in length')
})

test('The parameters entered in all fields are valid', () => {

  const purchase = {
    amount: 100.00,
    type: 'electricity token',
    meterId: '23122411234'
  }
  const msg = verifyPurchase.verifyParameters(purchase)
  expect(msg).toEqual('Parameters are valid')
})
