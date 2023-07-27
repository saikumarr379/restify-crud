const restify = require('express-restify-mongoose')
const express = require('express')

const app = express()
const router = express.Router()
const userTable = require('../model/user')
const userController = require('../controller/userController')
const auth = require('../middleware/auth')




restify.serve(router, userTable, { preMiddleware: auth })

router.post('/login', userController.login)
router.post('/test', auth, userController.user)

module.exports = router