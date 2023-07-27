const restify = require('express-restify-mongoose')
const express = require('express')

const app = express()
const router = express.Router()
const productTable = require('../model/product')
const productController = require('../controller/productController')
const auth = require('../middleware/auth')

// restify.serve(router, productTable, { preMiddleware: auth })
restify.serve(router, productTable , {preMiddleware: auth})



// router.get('/products',productController.projection)
// router.get('/products/:id{$fields}', productController.field)

module.exports = router