import React, { useState } from 'react'
import 'primeicons/primeicons.css'

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    props.onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        placeholder='Search by GitHub Username'
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='nav-submit-button' type='submit'>
        <i className='pi pi-search'></i>
      </button>
    </form>
  )
}

export default SearchBar
