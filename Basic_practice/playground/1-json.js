fs = require('fs')
const book={
    title:'ego'
}

const bookJSON = JSON.stringify(book)

fs.writeFileSync('1-json.json', bookJSON)