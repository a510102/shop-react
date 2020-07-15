import React from 'react'

export default function BackProduct({ product, updateEnabled, openUpdateProduct, deleteProduct }) {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.unit}</td>
      <td>{product.origin_price}元</td>
      <td>{product.price}元</td>
      <td><input
        type="checkbox"
        onChange={(e) => updateEnabled(e, product)}
        checked={product.is_enabled === 1 ? true : false}
      /></td>
      <td><button onClick={() => openUpdateProduct(product)}>編輯</button></td>
      <td> <button onClick={() => deleteProduct(product.id)}>刪除</button></td>
    </tr>
  )
}