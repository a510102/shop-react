import React from 'react'
import { changeToDate } from '../../js/setTime';

export default function Coupon({ coupon, updateIsenable, openUpdateCoupon, updateDate }) {

  function handleDelete() {
    updateDate(null, coupon.id, "DELETE")
  }

  return (
    <tr>
      <td>{coupon.title}</td>
      <td>{coupon.code}</td>
      <td>{coupon.percent / 100} 折</td>
      <td>{changeToDate(coupon.due_date)}</td>
      <td><input
        type='checkbox'
        onChange={(e) => updateIsenable(e, coupon)}
        checked={coupon.is_enabled === 1 ? true : false} /></td>
      <td><button onClick={() => openUpdateCoupon(coupon)}>編輯</button></td>
      <td> <button onClick={handleDelete}>刪除</button></td>
    </tr>
  )
}