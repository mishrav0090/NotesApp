import React from 'react'
import Notes from './notes'
import AddNote from './AddNote'

export default function NotesList({notes , handleAddNote ,handleDeleteNote}) {
  return (
    <div className='notes-list'>
      {notes.map((note)=><Notes 
      id={note.id} 
      text={note.text} 
      date={note.date} 
      handleDeleteNote={handleDeleteNote}
      />)}
      <AddNote 
      handleAddNote={handleAddNote}
      />
    </div>
  )
}
