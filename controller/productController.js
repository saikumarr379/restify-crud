const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')
const productTable = require('../model/product')


function projection(req, res) {
    const user = productTable.find({ _id: req.body.id }, { field: req.body.projections })
    user.then((user) => {
        res.send(user)
    }).catch((e) => {
        res.status(404).send(e)
    })

}
function field(req, res) {
    const user = productTable.find()
    user.then((user) => {
        res.send(user)})
    // }).catch((e) => {
    //     res.status(404).send(e)
    // })
}
module.exports = {
    projection,
    field
}
