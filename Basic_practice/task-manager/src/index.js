const express = require('express')
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest:'images'
})
app.post('/upload', upload.single('upload'), (req, res)=>{
    res.send()
})


app.listen(port, ()=>{
    console.log('server is up on port'+port)
})
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
//app.post('/users',async (req,res)=>{
//    const user = new User(req.body)
//    try{
//        await user.save()
//        res.status(201).send(user)
//    }catch(e){
//        res.status(400).send(e)
//    }
////    user.save().then(()=>{
////        res.status(200).send(user)
////}).catch((error)=>{
////    res.send(error)
////})
//})
//
//app.get('/users', async (req, res)=>{
//    try{
//        const users = await User.find({})
//        res.send(users)
//    }catch(e){
//        res.status(500).send()
//    }
////    User.find({}).then((users)=>{
////        res.send(users)
////    }).catch((e)=>{
////        res.status(500).send()
////    })
//})
//
//app.get('/users/:id',async (req, res)=>{
//    const _id = req.params.id
//
//    try{
//        const user = await User.findById(_id)
//
//        if (!user){
//            return res.status(404).send()
//        }
//        res.send(user)
//    } catch (e) {
//        res.status(500).send()
//    }
//
//})
//
//app.patch('/users/:id',async(req,res)=>{
//    try{
//        const user= await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
//        if (!user){
//            return res.status(404).send()
//        }
//        res.send(user)
//
//    }catch(e){
//        res.status(500).send()
//    }
//
//})
//
//app.delete('/users/:id', async(req, res)=>{
//    try{
//        const user= await User.findByIdAndDelete(req.params.id)
//        if (!user){
//            return res.status(404).send()
//        }
//        res.send()
//    } catch(e){
//        res.status(500).send()
//    }
//})
//app.post('/task', async (req,res)=>{
//    const task = new Task(req.body)
//    try{
//
//        await task.save()
//        res.status(200).send(user)
//    }
//    catch (e) {
//        res.status(400)
//        res.send(error)
//    }
////    const user = new Task(req.body)
////    user.save().then(()=>{
////        res.status(200).send(user)
////}).catch((error)=>{
////    res.status(400)
////    res.send(error)
//})
//
//
//
//app.get('/tasks', async (req, res)=>{
//    try{
//        tasks = await Task.find({})
//        if (!tasks){
//            return res.status(404).send()
//        }
//        res.send(tasks)
//    } catch(e){
//        return res.status(400).send(error)
//    }
////    Task.find({}).then((tasks)=>{
////        if (!tasks){
////            return res.status(404).send()
////        }
////        res.send(tasks)
////    }).catch((e)=>{
////        return res.status(400).send(error)
////    })
//})
//
//app.get('/tasks/:id', async(req, res)=>{
//    const _id = req.params.id
//    try{
//         const task = await Task.findById({_id})
//
//         if (!task){
//            return res.status(404).send()
//        }
//        res.send(task)
//    }catch(e){
//        return res.status(500).send()
//    }
//})
//
//app.patch('/tasks/:id', async(req, res)=>{
//    const task= await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
//
//    try{
//        if (!task){
//            return res.status(400).send({error:'Invalid update'})
//        }
//        res.send(task)
//    }catch(e){
//        return res.status(500).send()
//    }
//})
//
//app.delete('/tasks/:id', async(req, res)=>{
//    try{
//        const task= await Task.findByIdAndDelete(req.params.id)
//        if (!task){
//            return res.status(404).send()
//        }
//        res.send()
//    } catch(e){
//        res.status(500).send()
//    }
//})