const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('user', userSchema)