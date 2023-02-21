//CRUD

//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID}= require('mongodb')
const connectionURL='mongodb://localhost:27017/'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
MongoClient.connect(connectionURL,{ useNewUrlParser:true}, (error, client)=>{
    if (error){
        return console.log('Unable to connect')
    }
    const db = client.db(databaseName)
//    db.collection('users').find({name:'Jen'}).toArray((error, users)=>{
//        console.log(users)
//        })

    const updatePromise=db.collection('users').updateMany({
        name:'John'
    },{
        $inc :{
            age:1
        }
    })
    updatePromise.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})


