//const geocode =(address, callback)=>{
//     callback('undefined',address)
//}
//
//geocode('philli',(err, res)=>{
//    if(err){
//        return console.log("can't print")
//    }
//    console.log(res)
//
//})
//
//// we will do the same code with callbakc, in a way promise will replace callback
// - ac to my understanding so far, you can't pass an argument to a constructor
// this is a promise not a funciton; it can be called as promise constructor function
// so geocode is a constant not a function unlike above
const geocode= new Promise((resolve, reject)=>{
    resolve('abc')
})

geocode.then((res)=>{
    console.log(res)
})