import React from 'react'

export default function OrderProductsList({ order }) {
  return (
    <ul>
      <li style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>商品</p>
        <p>數量</p>
        <p>價格</p>
        <p>特價</p>
      </li>
      {Object.keys(order.products).map((key) => (<li key={key} style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>{order.products[key].product.title}</p>
        <p>{order.products[key].qty} {order.products[key].product.unit}</p>
        <p>{order.products[key].total} 元</p>
        <p>{order.products[key].final_total} 元</p>
      </li>
      ))}
    </ul>
  )
}