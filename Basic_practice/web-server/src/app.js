const geocode = require('./utils/geo-code.js')
const forecast = require('./utils/forecast.js')

const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname, __filename)
console.log(path.join(__dirname,'../public'))

// define path for express config
const viewsPath= path.join(__dirname, '../templates/views')
const partialsPath= path.join(__dirname, '../templates/partials')
const app = express()

// setup handler bar engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
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
    if (!req.query.address){
        return res.send({
        error:"you must provide a address"
        })
    }
    // callback chainging
    geocode(req.query.address,(error,{latitutde, longitude, location} = {})=>{
        if (error){
          return res.send({error:error})
          }
        forecast(latitutde,longitude, (error, forecastData) => {
            if (error){
                  return res.send({error:error})

            }
            res.send({
                forecast:forecastData,
                location:req.query.address
            })
        })
    })

})

app.get('/products',(req, res)=>{
    if (!req.query.search){
        return res.send({
        error:"you must provide a search term"
        })
    }
    console.log("hey")
    res.send({product:[]})
})

app.get('*',(req, res)=>{
    res.send('404')
})
// app.com
// app.com/help
// app.com/about

app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})




