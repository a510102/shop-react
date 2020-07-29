import React from 'react'
import { changeToDate } from '../../js/setTime';

export default function Coupon({ coupon, updateIsenable, openUpdateCoupon, updateDate }) {

  function handleDelete() {
    updateDate(null, coupon.id, "DELETE")
  }

  return (
    <tr className='text-right'>
      <td className='border px-4 py-2'>{coupon.title}</td>
      <td className='border px-4 py-2'>{coupon.code}</td>
      <td className='border px-4 py-2'>{coupon.percent / 100} 折</td>
      <td className='border px-4 py-2'>{changeToDate(coupon.due_date)}</td>
      <td className='border px-4 py-2'><input
        type='checkbox'
        onChange={(e) => updateIsenable(e, coupon)}
        checked={coupon.is_enabled === 1 ? true : false} /></td>
      <td className='border px-4 py-2'><button className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded' onClick={() => openUpdateCoupon(coupon)}>編輯</button></td>
      <td className='border px-4 py-2'> <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded' onClick={handleDelete}>刪除</button></td>
    </tr>
  )
}