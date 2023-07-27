const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be positive integer")
            }
        }
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("Password should not include password")
            }
        }
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function (next) {
    const user = this
   if (this.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
   }
    next()
})

const userTable = mongoose.model('users', userSchema)

module.exports = userTable

