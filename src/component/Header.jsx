import React from 'react'

export default function Header({handleMode}) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button 
      onClick={()=>handleMode((previousMode)=>!previousMode)}
      className='save'>Mode</button>
    </div>
  )
}
