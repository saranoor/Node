const socket = io()

//Elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = document.querySelector('input')
const $messageFormButton = document.querySelector('button')

socket.on('message',(mes)=>{
    console.log(mes)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')
    $messageFormInput.value=''
    $messageFormInput.focus()
    // disable
    const message = e.target.elements.message.value

    socket.emit('sendMessage', message,(message) =>{
        //enable
        $messageFormButton.removeAttribute('disabled', 'disabled')
        console.log('The message was delivered', message)
    })
})

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    })
})
