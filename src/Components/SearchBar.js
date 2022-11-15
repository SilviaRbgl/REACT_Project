import React from 'react'

function SearchBar({getInput}) {

  return (
    <div>
        <input
        type="text"
        placeholder="Search movie"
        onChange={(e)=> getInput(e.target.value)}
      />
    </div>
  )
}

export default SearchBar