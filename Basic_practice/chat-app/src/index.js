const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//let count = 0
io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message',"Welcome to server!")

    socket.on('sendMessage', (message, callback) => {
        io.emit('message',message )
        const filter = new Filter()
        if (filter.isProfane(message)){
            console.log('profanity is not allowed')
        }
//        io.emit('message', message)
        callback('Delivered')
    })

    socket.on('sendLocation', (latitude, longitude)=>{
        io.emit('message',"Location:"+toString(latitude)+toString(longitude))
    })

//    socket.disconnect('disconnect',()=>{
//        io.emit('message', 'A user has left')
//    })

})


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})