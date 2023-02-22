const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/task-manager-api',{
})

const taskUser = mongoose.model('taskUser',{
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

const firstCollection = new taskUser({
    description:'eat breakfast'
})

//firstCollection.save().then(()=>{
//    console.log(firstCollection)
//}).catch((error)=>{
//    console.log('Error', error)
//})
//const me = new User({
//    name:"Karen",
//    age:'26oooogfh'
//})
//
//me.save().then(()=>{
//    console.log(me)
//}).catch((error)=>{
//    console.log('Error', error)
//})