const chalk = require('chalk')
const { describe } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)
// console.log(chalk.green.bgRed.bold('Success!'))

console.log(process.argv)

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe: 'Add a new role',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'

        },
        body:{
            describe:'body of the note'
    
        }
    },
    handler (argv){
        notes.addNote(argv.title, argv.body)
        console.log('Add an new note!', argv.title, argv.body)
    }
})
yargs.command({
    command:'remove',
    describe: 'remove a new role',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'body of the note'
        }
    },

    handler (argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe: 'list a new role',
    handler (){
        console.log('list an new note!')
    }
})

yargs.command({
    command:'read',
    describe: 'Read a new role',
    handler(){
        console.log('Read an new note!')
    }
})

yargs.parse()
// console.log(yargs.argv)