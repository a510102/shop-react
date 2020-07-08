import React from 'react'
import { changeToDate } from './setTime';

export default function Coupon({ coupon, updateIsenable, openUpdateCoupon, updateDate }) {
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
      <button onClick={() => updateDate(null, coupon.id, "DELETE")}>刪除</button>
    </li>
  )
}