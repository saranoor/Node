const geocode = require('./utils/geo-code.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]
if (!address){
    console.log("please provide address")
}else{
    // callback chainging
    geocode(address,(error,response)=>{
        console.log(error)
        console.log(response)
        forecast(response.latitutde,response.longitude, (error, forecastData) => {
            console.log('Error', error)
            console.log('Data', forecastData)
        })
    })
}
// asynchronous io operation geocode and forecast

