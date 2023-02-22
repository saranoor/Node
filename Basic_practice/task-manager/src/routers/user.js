const express = require('express')
const User=require('../models/user')
const multer = require('multer')

const router = new express.Router()

router.post('/users',async (req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
//    user.save().then(()=>{
//        res.status(200).send(user)
//}).catch((error)=>{
//    res.send(error)
//})
})

router.get('/users', async (req, res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send()
    }
//    User.find({}).then((users)=>{
//        res.send(users)
//    }).catch((e)=>{
//        res.status(500).send()
//    })
})

router.get('/users/:id',async (req, res)=>{
    const _id = req.params.id

    try{
        const user = await User.findById(_id)

        if (!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }

})

router.patch('/users/:id',async(req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if (!user){
            return res.status(404).send()
        }
        res.send(user)

    }catch(e){
        res.status(500).send()
    }

})

router.delete('/users/:id', async(req, res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id)
        if (!user){
            return res.status(404).send()
        }
        res.send()
    } catch(e){
        res.status(500).send()
    }
})

const upload = multer({
    dest:"avatars",
    limits:{
        fileSize:1000000
    },
    fileFilter(req, file, cb){
        if (!file.originalname.match(/\.(jpeg)$/)){
            return cb(new Error('Upload word'))
        }
        cb(undefined, true)
    }
})

router.post('/users/me/avatar', upload.single('avatar'), async(req, res)=>{
//    req.user.avatar=req.file.buffer
//    await req.user.save()
    res.send()
    },(error, req, res, next) =>{
        res.status(400).send({error: error.message})
    }
)

router.delete('/users/:id/avatar', async(req, res)=>{
    try{
        const user= await User.findById(req.params.id)
        if (!user || !user.avatar){
            throw new Error()
        }
        res.set('Content-Type', '')
        res.send(user.avatar)
    }catch(e){
        res.status(404).send(user)
    }
})
module.exports= router