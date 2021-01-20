const chalk =require('chalk')
const fs = require('fs')

const addNote=function(title,body){
   const notes = loadNotes()
   const duplicateNotes= notes.filter(function (note){
      return note.title === title

   })
   debugger
      if (duplicateNotes.length===0){
         notes.push({
            title:title,
            body:body
         })
         saveNotes(notes)
         console.log(chalk.green.inverse('New note added..'))
      }
      else{
         console.log(chalk.red.inverse('Note title taken'))
      }
      }

  
const saveNotes= function(notes){
   const dataJSON=JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function (){
   try{
      const dataBuffer=fs.readFileSync('notes.json')
      const dataJSON=dataBuffer.toString()
      return JSON.parse(dataJSON)
   } catch(e){
      return[]
   }
}

const removeNote=function(title){
   const notes = loadNotes()
   const notesToKeep= notes.filter(function (note){
      return note.title !==title

   })
   if (notes.length>notesToKeep.length){
      console.log(chalk.green.inverse("Note removed!"))
      saveNotes(notesToKeep)
   }
   else{
      console.log(chalk.red.inverse("No such note found"))
   }
}
const listNotes=()=>{
   const notes = loadNotes()
   console.log(chalk.blue('Your notes..'))

   notes.forEach((note) => {
      console.log(note.title)
   });
   

}

const readNote=(title)=>{
   const notes = loadNotes()
   const note = notes.find((note)=>note.title===title)

   if(note){
      console.log(chalk.inverse(note.title))
      console.log(note.body)
   }
   else{
      console.log(chalk.red.inverse('Notes not found'))
   }
}
module.exports={
   addNote:addNote,
   removeNote:removeNote,
   listNotes:listNotes,
   readNote:readNote
}