const path = require('path')
const express = require('express')

console.log(__dirname, __filename)
console.log(path.join(__dirname,'../public'))

const app = express()

app.use(express.static(path.join(__dirname,'../public')))

app.get('/help', (req, res) =>{
    res.send('Help page')
})

app.get('/about',(req, res)=>{
    res.send('<h1>About Page</h1>')
})

app.get('/contact',(req, res)=>{
    res.send({
        forecast:"windy",
        location:"xyz"
    })
})
// app.com
// app.com/help
// app.com/about

app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})




