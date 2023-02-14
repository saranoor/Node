const fs = require('fs')
const getNotes=function(){
    return "Your Notes...."
}

const addNote = function (title, body){
    const notes = loadNotes()
    const duplicatesNotes = notes.filter(function(note){
        return note.title === title
    })
    if (duplicatesNotes.length===0){
        notes.push({
        title:title,
        body:body
        })
        saveNotes(notes)
        console.log(notes)
    } else {
        console.log('Note title taken')
    }

}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if (notes.length>notesToKeep.length){
        console.log('notes removed')
        saveNotes(notesToKeep)
    }
    else {
        console.log('notes not found')
    }
}

const saveNotes= function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        }
    catch(e){
        return []
    }
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}