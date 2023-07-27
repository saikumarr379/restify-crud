const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userTable = require('../model/user')
const jwt = require('jsonwebtoken')

function login(req, res) {
    try {
        const user = userTable.findOne({ name: req.body.name })
        user.then((user) => {

            const match = bcrypt.compareSync(req.body.password, user.password)
            if (!match) {
                res.send("Incorrect password")
            } else {
                const token = jwt.sign({ _id: user._id }, "restify", { expiresIn: '12h' })
                res.setHeader("Authorization", token)
                res.send("Login Successful")
            }
        })
    } catch (e) {
        res.status(404).send(e)
    }
}
function user(req, res){
    res.send("Hello")
}

module.exports = {
    login,
    user
}