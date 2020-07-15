import React from 'react'
import { changeToDate } from '../../js/setTime';

const OrderProductsList = React.lazy(() => import('./OrderProductsList'));

export default function Order({ order, showDetail, openDetail, id, openEditOrder, show }) {

  return (
    <tr>
      <td><p onClick={() => showDetail(order.id)}>{order.id}</p></td>
      <td>
        {
          (openDetail && id.includes(order.id)) && (
            <OrderProductsList order={order} />
          )
        }
        <p>總共{order.num} 件 ，總金額為 {order.total} 元</p>
      </td>
      <td>{order.user.name}</td>
      <td>{order.user.address}</td>
      <td>{order.user.tel}</td>
      <td>{order.user.email}</td>
      <td>{changeToDate(order.create_at, true)} </td>
      <td>{
        order.paid_date ? changeToDate(order.paid_date, true) : '還沒結帳喲'}
      </td>
      <td><p>{order.is_paid ? '已結帳' : '還沒結帳'}</p></td>
      <td>{!show && <button onClick={() => openEditOrder(order)}>Edit</button>}</td>
    </tr>
  )
}