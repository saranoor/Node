const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('Things went wrong')
    },2000)
})

doWorkPromise.then((result)=>{
    console.log('succes', result)
}).catch((error)=>{
    console.log('Error', error)
})