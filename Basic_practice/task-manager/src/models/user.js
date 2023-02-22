const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/task-manager-api',{
})

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        default: ""
    },
    password:{
        type: String
    },
    avatar:{
        type:Buffer
    }
})

module.exports = User