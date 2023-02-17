const request= require('request')

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const forecast=(lat, lon, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=7249afc584a89137686942c88950f1ee&query='+lat+','+lon
    console.log(url)
    request({url:url, json:true},(error, response)=>{
        if (error)
        {
            console.log(error, 'unable to connect')
            callback('Unable to connect', Undefined)
        }
        else if (response.body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(null,  response.body.current.weather_descriptions)
    //        providing an argument to another function is called callback function
    }})

}
module.exports= forecast