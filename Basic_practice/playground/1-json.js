fs = require('fs')
// const book={
//     title:'ego'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer=fs.readFileSync('1-json.json')

console.log(dataBuffer.toString())

data= JSON.parse(dataBuffer)

console.log(data)

data.name='Sara'
data.age='27'

console.log(data)

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON)