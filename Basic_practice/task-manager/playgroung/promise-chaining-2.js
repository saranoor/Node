require('../src/db/mongoose')
const Task=require('../src/models/task')

Task.findByIdAndUpdate('63f4c5cb344938b0adebb08b',{completed:true}).then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:true})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
