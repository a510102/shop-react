import React from 'react'
import '../styles/Home.css';

export default function Home() {
  return (
    <div className='home h-screen text-center'>
      <div className='container mx-auto'>
        <h1 className='text-white text-2xl '>Home</h1>
        <section className='w-full md:w-3/4 text-left md:m-auto bg-gray-600 p-4 '>
          <p className='text-xl text-white'>這是一間有特色日式餐廳!</p>
          <p className='text-base md:text-xl text-white'>由於最近促銷，有店有9折優惠，優惠碼為: 10OFF</p>
        </section>
      </div>
    </div>
  )
}