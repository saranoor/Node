const request= require('request')
const geocode=(address, callback)=>{
    const url_geo= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic25vb3IyIiwiYSI6ImNsZThmdnJxcjBmOGMzcnF4b2t4dTgwcDUifQ.KAfVwgAI2p-ysQbtDBs8kA'
//    const url_geo= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic25vb3IyIiwiYSI6ImNsZThmdnJxcjBmOGMzcnF4b2t4dTgwcDUifQ.KAfVwgAI2p-ysQbtDBs8kA'
    request({url:url_geo, json:true},(error, response)=>{
        if (error)
        {
            console.log('response is',response)

            callback('unable to connect', undefined)

        }
        else if (response.body.features.length===0){
            callback("unable to find location",undefined)
        }
        else{
            callback(undefined, {
                latitutde:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0]})
//            console.log(response.body.features[0].center[1],response.body.features[0].center[0])
        }
    })
}

geocode('Pakistan',(error,response)=>{
    console.log(error)
    console.log(response)
})

module.export=geocode