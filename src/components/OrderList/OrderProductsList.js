import React from 'react'

export default function OrderProductsList({ order }) {
  return (
    <ul>
      {Object.keys(order.products).map((key) => (<li className='border p-1' key={key}>
        <p>商品: {order.products[key].product.title}</p>
        <p>數量: {order.products[key].qty} {order.products[key].product.unit}</p>
        {
          order.products[key].final_total ? <p>特價: {order.products[key].final_total} 元</p> : <p>價格: {order.products[key].total} 元</p>
        }
      </li>
      ))}
    </ul>
  )
}