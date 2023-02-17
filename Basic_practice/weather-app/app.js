const request= require('request')
const url = 'http://api.weatherstack.com/current?access_key=7249afc584a89137686942c88950f1ee&query='
request({url:url},(error, response)=>{
    if (error)
    {
        console.log(error, 'unable to connect')
    }
    else{
        const data= JSON.parse(response.body)
        console.log(data.location.lat,data.location.lon)
    }
})
