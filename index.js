const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const restify = require('express-restify-mongoose')
const env = require('dotenv').config()

const router = express.Router()
const mongooseConnection = require('./config/mongoose')
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const port = process.env.PORT

app.use((req, res, next) => {
    // Check if the request method is PATCH or DELETE
    if (req.method === 'PATCH' || req.method === 'DELETE') {
      // Throw a 404 page not found error
      res.status(404).send({
        status: 'Error',
        message: 'Page not found'
      });
    } else {
      // Continue to the next middleware or route handler
      hostName = req.headers.host;
      next();
    }
  });

app.use('/', userRouter)
app.use('/', productRouter)


app.listen(port, () => {
    console.log(`Server is up on ${port}!`)
})
