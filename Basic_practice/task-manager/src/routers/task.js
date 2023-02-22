const express = require('express')
const Task=require('../models/task')
const router = new express.Router()

router.post('/task', async (req,res)=>{
    const task = new Task(req.body)
    try{

        await task.save()
        res.status(200).send(user)
    }
    catch (e) {
        res.status(400)
        res.send(error)
    }
//    const user = new Task(req.body)
//    user.save().then(()=>{
//        res.status(200).send(user)
//}).catch((error)=>{
//    res.status(400)
//    res.send(error)
})

router.get('/tasks', async (req, res)=>{
    try{
        tasks = await Task.find({})
        if (!tasks){
            return res.status(404).send()
        }
        res.send(tasks)
    } catch(e){
        return res.status(400).send(error)
    }
//    Task.find({}).then((tasks)=>{
//        if (!tasks){
//            return res.status(404).send()
//        }
//        res.send(tasks)
//    }).catch((e)=>{
//        return res.status(400).send(error)
//    })
})

router.get('/tasks/:id', async(req, res)=>{
    const _id = req.params.id
    try{
         const task = await Task.findById({_id})

         if (!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        return res.status(500).send()
    }
})

router.patch('/tasks/:id', async(req, res)=>{
    const task= await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})

    try{
        if (!task){
            return res.status(400).send({error:'Invalid update'})
        }
        res.send(task)
    }catch(e){
        return res.status(500).send()
    }
})

router.delete('/tasks/:id', async(req, res)=>{
    try{
        const task= await Task.findByIdAndDelete(req.params.id)
        if (!task){
            return res.status(404).send()
        }
        res.send()
    } catch(e){
        res.status(500).send()
    }
})

module.exports= router