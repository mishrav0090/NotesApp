import React, { useEffect, useState } from 'react'
import {nanoid} from 'nanoid';
import NotesList from './component/NotesList'
import Search from './component/Search';
import Header from './component/Header';

export default function App() {

    const [searchText ,setSeachText]= useState('')
    const [darkMode ,setDarkMode]= useState(false)



    const [notes,setNotes]=useState([
      {
      id: nanoid(),
      text:'this is my first node',
      date:'15/04/2012'
    },
    {
      id: nanoid(),
      text:'this is my second node',
      date:'15/04/2014'
    },
    {
      id: nanoid(),
      text:'this is my third node',
      date:'15/04/2016'
    },
    {
      id: nanoid(),
      text:'this is my fourth node',
      date:'15/04/2018'
    }
  ])

  const addNote=(text)=>{
    const date=new Date();

    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes)
  }

  const deleteNote=(id)=>{
    const newNotes=notes.filter((notes)=>notes.id!==id)
    setNotes(newNotes)
}

useEffect(()=>{
  const savedNotes=JSON.parse(localStorage.getItem('Notes_Data'));

  if(savedNotes){
    setNotes(savedNotes)
  }
},[]);


useEffect(()=>{
  localStorage.setItem('Notes_Data',JSON.stringify(notes))
},[notes]);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header 
      handleMode={setDarkMode}
      />
      <Search 
      handleSearchText={setSeachText}
      />
      <NotesList 
       notes={notes.filter((note)=>
        note.text.toLowerCase().includes(searchText.toLowerCase())
      )}  
       handleAddNote={addNote} 
       handleDeleteNote={deleteNote}
       />
    </div>
    </div>
  )
}
