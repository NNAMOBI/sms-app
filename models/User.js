const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    date_Of_Birth: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = User = mongoose.model('user', UserSchema)
