const mongoose = require('mongoose')
const env = require('dotenv').config()
const url = process.env.connectionUrl

const mongooseconnection = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    // Event listener for successful connection
    db.once('open', () => {
        console.log('Database connected successfully!');
    });
}
module.exports = mongooseconnection() 