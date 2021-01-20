const yargs=require('yargs')
const notes = require('./note.js')

yargs.version('1.1.0')

//add command 
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    }

})

//remove command
yargs.command({
    command:'remove',
    describe:'remove a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
      notes.removeNote(argv.title)
    }
})

//read command
yargs.command({
    command:'read',
    describe:'read a new note',
    handler(argv){
        notes.readNote(argv.title)
    }
})

//List command
yargs.command({
    command:'list',
    describe:'list of new notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()