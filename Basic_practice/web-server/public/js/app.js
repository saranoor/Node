//fetch('http://localhost:3000/weather?address=Pakistan').then((response)=>{
//    response.json().then((data)=>{
//        if (data.error) {
//            console.log(data.error)
//        }
//        else{
//            console.log(data.forecast)
//        }
//    })
//})
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    if (!search.value){
        console.log("enter place to search")
    }
    else{
        fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
                console.log(data.error)
            }
            else{
                console.log(data.forecast)
            }
        })
    })
}
    console.log('testing', search.value)

})