import React from 'react'
import { changeToDate } from '../../js/setTime';

export default function Coupon({ coupon, updateIsenable, openUpdateCoupon, updateDate }) {

  function handleDelete() {
    updateDate(null, coupon.id, "DELETE")
  }

  return (
    <li style={{ display: 'flex', width: '50vw', justifyContent: 'space-around', alignItems: 'center' }}>
      <p>{coupon.title}</p>
      <p>{coupon.code}</p>
      <p>{coupon.percent / 100} 折</p>
      <p>{changeToDate(coupon.due_date)}</p>
      <input
        type='checkbox'
        onChange={(e) => updateIsenable(e, coupon)}
        checked={coupon.is_enabled === 1 ? true : false} />
      <button onClick={() => openUpdateCoupon(coupon)}>編輯</button>
      <button onClick={handleDelete}>刪除</button>
    </li>
  )
}