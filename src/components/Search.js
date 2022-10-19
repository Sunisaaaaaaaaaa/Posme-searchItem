import React, { useState } from 'react'
import Scroll from './Scroll'
import SearchList from './SearchList'

function Search({ details }) {
  const [searchField, setSearchField] = useState('')

  const filteredProduct = details.filter((prod) => {
    return prod.title.toLowerCase().includes(searchField.toLowerCase())
  })

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredProduct={filteredProduct} />
      </Scroll>
    )
  }

  return (
    <section className='garamond'>
      <div className='navy georgia ma0 grow'>
        <h2 className='f2'>Search your items</h2>
      </div>
      <div className='pa2'>
        <input
          className='pa3 bb br3 grow b--none bg-lightest-blue ma3'
          type='search'
          placeholder='Search Items'
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  )
}

export default Search
