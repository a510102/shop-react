import React from 'react'

export const ButtonLayout = ({ children, styleName, handleBack }) => {
  return (
    <div className={styleName}>
      {children}
      <div className='col-span-2'>
        <button
          className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg'
          onClick={handleBack}>返回</button>
      </div>
    </div >
  )
} 