const geocode = require('./utils/geo-code.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]
if (!address){
    console.log("please provide address")
}else{
    // callback chainging
    geocode(address,(error,{latitutde, longitude, location} = {})=>{
        console.log(error)
        console.log(latitutde, longitude)
        forecast(latitutde,longitude, (error, forecastData) => {
            console.log('Error', error)
            console.log('Data', forecastData)
        })
    })
}
// asynchronous io operation geocode and forecast

