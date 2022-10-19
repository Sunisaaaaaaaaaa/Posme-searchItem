import React from 'react'
import Card from './Card'

function SearchList({ filteredProduct }) {
  const filtered = filteredProduct.map((pr) => (
    <Card key={pr.id} product={pr} />
  ))
  return <div>{filtered}</div>
}

export default SearchList
