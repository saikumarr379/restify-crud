const jwt = require('jsonwebtoken')
const userTable = require('../model/user')

const verifyToken = (req, res, next) => {
    const input = req.header("Authorization")
    if (!input) {
        return res.status(404).send("Provide a token input")
    }
    const token = input.replace('Bearer ', "")
   try {
        const decoded = jwt.verify(token, "restify")
        const user = userTable.findOne({ _id: decoded._id })
        req.user = user
    } catch (e) {
        return res.status(401).send("Invalid token")
    }
    next()
}


module.exports = verifyToken