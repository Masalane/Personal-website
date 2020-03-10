'use strict'

let express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')

// loading the router
let todoRouter = require('./todoRoute.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mounting the router
app.use('/purchaseVoucher', todoRouter)

let port = process.env.PORT || 8080
app.listen(port)
console.log('Express server running on port', port)