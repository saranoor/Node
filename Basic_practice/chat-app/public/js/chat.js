const socket = io()

socket.on('message',(mes)=>{
    console.log(mes)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value
    socket.emit('sendMessage', message)
})


//socket.on('countUpdated', (count) => {
//    console.log('The count has been updated!', count)
//})
//
//document.querySelector('#increment').addEventListener('click', ()=>{
//    console.log("Clicked")
//    socket.emit('increment')
//})