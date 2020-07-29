import React from 'react'

export default function BackProduct({ product, updateEnabled, openUpdateProduct, deleteProduct }) {
  return (
    <tr className='text-right'>
      <td className='border  px-4 py-2'>{product.title}</td>
      <td className='border  px-4 py-2'>{product.category}</td>
      <td className='border  px-4 py-2'>{product.unit}</td>
      <td className='border  px-4 py-2'>{product.origin_price}元</td>
      <td className='border  px-4 py-2'>{product.price}元</td>
      <td className='border  px-4 py-2'><input
        type="checkbox"
        onChange={(e) => updateEnabled(e, product)}
        checked={product.is_enabled === 1 ? true : false}
      /></td>
      <td className='border px-4 py-2'>
        <button
          className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded'
          onClick={() => openUpdateProduct(product)}>編輯</button></td>
      <td className='border px-4 py-2'>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
          onClick={() => deleteProduct(product.id)}>刪除</button></td>
    </tr>
  )
}