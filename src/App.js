import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Search from './components/Search'

async function getAllProduct() {
  const res = await axios.get('https://dummyjson.com/products')
  // console.log(res.data.products)
  return res.data.products
}

function App() {
  const [allProduct, setAllProduct] = useState([])

  useEffect(() => {
    getAllProduct().then((data) => {
      setAllProduct(data)
    })
  }, [])
  return (
    <div className='tc bg-green ma0 pa4 min-vh-100'>
      <Search details={allProduct} />
    </div>
  )
}

export default App
