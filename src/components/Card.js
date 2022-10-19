import React from 'react'

function Card({ product }) {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
    </div>
  )
}

export default Card
