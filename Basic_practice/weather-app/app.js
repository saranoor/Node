const geocode = require('./utils/geo-code.js')
const forecast = require('./utils/forecast.js')


geocode('Pakistan',(error,response)=>{
    console.log(error)
    console.log(response)
})

forecast(40.7831,'-73.97kkk12', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})