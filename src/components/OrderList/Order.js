import React from 'react'
import { changeToDate } from '../../js/setTime';

const OrderProductsList = React.lazy(() => import('./OrderProductsList'));

export default function Order({ order, showDetail, openDetail, id, openEditOrder, show }) {

  return (
    <tr>
      <td className='border px-4 py-2'><p className='text-sm' onClick={() => showDetail(order.id)}>{order.id}</p></td>
      <td className='border px-4 py-2'>
        {
          (openDetail && id.includes(order.id)) && (
            <OrderProductsList order={order} />
          )
        }
        <p>總共{order.num}件</p>
        <p>總金額:{order.total}元</p>
      </td>
      <td className='border p-1'>
        <p>姓名: </p>
        <div className='border p-1'>{order.user.name}</div>
        <p>地址: </p>
        <div className='border p-1'>{order.user.address}</div>
        <p>電話: </p>
        <div className='border p-1'>{order.user.tel}</div>
        <p>Email: </p>
        <div className='border p-1'>{order.user.email}</div>
      </td>
      <td className='border p-1'>
        <p>下單:</p>
        <div>{changeToDate(order.create_at, true)}</div>
        <p>結帳:</p>
        <div>{order.paid_date ? changeToDate(order.paid_date, true) : '還沒結帳喲'}</div>
      </td>
      <td className='border p-1'><p>{order.is_paid ? '已結帳' : '還沒結帳'}</p></td>
      <td className='border p-1'>{!show && <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded' onClick={() => openEditOrder(order)}>Edit</button>}</td>
    </tr>
  )
}