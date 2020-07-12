import React from 'react'

export default function EditProduct({ open, setOpen, product, handleChange, updateProduct, addProduct, handleCancel }) {
  return (
    <>
      <button onClick={() => { setOpen(!open) }}>建立新商品</button>
      {
        open ? (
          <div>
            <label htmlFor='category'>類別:</label>
            <input
              id='category'
              name='category'
              value={product ? product.category : ''}
              onChange={handleChange} />
            <label htmlFor='title'>商品:</label>
            <input
              id='title'
              name='title'
              value={product ? product.title : ''}
              onChange={handleChange} />
            <label htmlFor='origin_price'>原價:</label>
            <input
              id='origin_price'
              name='origin_price'
              value={product ? product.origin_price : ''}
              onChange={handleChange} />
            <label htmlFor='price'>特價:</label>
            <input
              id='price'
              name='price'
              value={product ? product.price : ''}
              onChange={handleChange} />
            <label htmlFor='unit'>單位:</label>
            <input
              id='unit'
              name='unit'
              value={product ? product.unit : ""}
              onChange={handleChange} />
            {
              !product.hasOwnProperty('id') ? <button onClick={addProduct}>Add</button> : <button onClick={updateProduct}>Update</button>
            }
            <button onClick={handleCancel}>取消</button>
          </div>
        ) : null
      }
    </>
  )
}