import React, { useContext } from 'react'
import '../styles/About.css'
import { ShopContext } from '../contexts/shopCartContext/ShopCartContext'

export default function About() {
  const { products } = useContext(ShopContext);

  const filterProducts = products.filter((product, i) => i < 3);
  console.log(filterProducts)
  return (
    <div className='container about h-screen text-center'>
      <h1 className='text-gray-800 text-2xl'>About</h1>
      <p className='text-gray-700 text-xl'>content  ...</p>
    </div>
  )
}