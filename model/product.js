const mongoose = require('mongoose')

productSchema = new mongoose.Schema({ },{timestamps:true, strict: false})

productTable= mongoose.model('products', productSchema)

module.exports = productTable 