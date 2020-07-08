import React from 'react'

export default function BackProduct({ product, updateEnabled, openUpdateProduct, deleteProduct }) {
  return (
    <li style={{ display: 'flex', width: '50vw', justifyContent: 'space-around', alignItems: 'center' }}>
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.unit}</p>
      <p>{product.origin_price}元</p>
      <p>{product.price}元</p>
      <input
        type="checkbox"
        onChange={(e) => updateEnabled(e, product)}
        checked={product.is_enabled === 1 ? true : false}
      />
      <button onClick={() => openUpdateProduct(product)}>編輯</button>
      <button onClick={() => deleteProduct(product.id)}>刪除</button>
    </li>
  )
}