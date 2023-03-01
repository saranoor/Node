const add =(a,b)=>{
    return new Promise((resolve, reject)=>{
//        resolve(a+b)
          reject("error")
    })
    }
// this code calls function add and deals with the output of promise
//add(1,2).then((sum)=>{
//    console.log(sum)
//}).catch((e)=>{
//    console.log("error")
//})

// lets suppose we need to call get the sum returned from the add and then make another add call

add(1,2).then((sum)=>{
    return add(sum,1)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log("error")
})