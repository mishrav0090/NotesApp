import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({handleSearchText}) {
  return (
    <div className="search">
      <MdSearch className='search-icons' size='1.3em' />
      <input
      onChange={(event)=>{handleSearchText(event.target.value)}}
      type='text' 
      placeholder='type of search......' 
      />
    </div>
  )
}
