const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/task-manager-api',{
})

const task = mongoose.model('task',{
    description:{
        type: String,
        required: true,
        trim:true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = task