import React from 'react'
import { changeToDate } from '../../js/setTime';

export default function Order({ order, showDetail, openDetail, id, openEditOrder }) {

  return (
    <div>
      <p onClick={() => showDetail(order.id)}>訂單編號: {order.id}</p>
      {
        (openDetail && id.includes(order.id)) && (
          <>
            <ul>
              <li style={{ display: 'flex', width: '50vw', justifyContent: 'space-around' }}>
                <p>商品</p>
                <p>數量</p>
                <p>價格</p>
                <p>特價</p>
              </li>
              {Object.keys(order.products).map((key) => (<li key={key} style={{ display: 'flex', width: '50vw', justifyContent: 'space-around' }}>
                <p>{order.products[key].product.title}</p>
                <p>{order.products[key].qty} {order.products[key].product.unit}</p>
                <p>{order.products[key].total} 元</p>
                <p>{order.products[key].final_total} 元</p>
              </li>
              ))}
              <li style={{ display: 'flex', width: '50vw', justifyContent: 'space-around' }}>總共{order.num} 件 ，總金額為 {order.total} 元</li>
            </ul>
            <ul>
              <li>名字: {order.user.name}</li>
              <li>地址: {order.user.address}</li>
              <li>電話: {order.user.tel}</li>
              <li>E-mail: {order.user.email}</li>
              <li>金額: {order.total}元</li>
            </ul>
          </>
        )
      }
      <p>下單時間:{changeToDate(order.create_at, true)} </p>
      {
        order.paid_date && <p>結帳時間: {changeToDate(order.paid_date, true)}</p>
      }
      <p>{order.is_paid ? '已結帳' : '還沒結帳'}</p>
      <button onClick={() => openEditOrder(order)}>Edit</button>
    </div>
  )
}