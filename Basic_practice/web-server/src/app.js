const path = require('path')
const express = require('express')

console.log(__dirname, __filename)
console.log(path.join(__dirname,'../public'))

const app = express()
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req, res)=>{
    res.render('index',{
        title: 'Weather App'
    })
})

app.get('/about',(req, res)=>{
    res.render('about',{
        message:'We are a platform...'
    })
})
app.get('/help', (req, res) =>{
    res.send('Help page')
})

app.get('/weather',(req, res)=>{
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




