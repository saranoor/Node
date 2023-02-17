//setTimeout(() =>{
//    console.log("Two seconds are up")
//},2000)
//
//const names =['Andrew','Jones']
//const shortNames = names.filter((name)=>{
//    return name.length <=4
//})
//
//const geocode=(address, callback) =>{
//    setTimeout(()=>{
//            const data={
//                latitude:'45',
//                longitude:'55'
//    }
//            callback(data)
//    },2000)
//}
//
//geocode('Newyork',(d)=>{
//    console.log(d)
//})
//

//

// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

add=(a, b, sum) => {
    setTimeout(()=>{
        const res = a+b
        sum(res)
    },2000)
}

add(2,3,(sum)=>{
    console.log(sum)
})
