const {Schema, model} = require('mongoose');

const MessageSchema = Schema({
    content: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true,
        unique: true
    },
    name:  {
        type: String,
        require: true
    }
})

module.exports = model('Mensaje',MessageSchema);