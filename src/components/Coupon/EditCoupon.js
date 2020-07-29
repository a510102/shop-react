import React from 'react'
import { changeToDate } from '../../js/setTime';

export default function EditCoupon({ open, setOpen, coupon, handleChange, updateCoupon, addCoupon, handleCancel }) {
  return (
    <>
      <button className='my-2 bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded' onClick={() => setOpen(!open)}>Add Coupon</button>
      {
        open && (
          <ul>
            <label htmlFor='title'>優惠卷名稱:</label>
            <input
              id='title'
              value={coupon.title || ''}
              name='title'
              onChange={handleChange} />
            <label htmlFor='code'>代碼:</label>
            <input
              id='code'
              value={coupon.code || ''}
              name='code'
              onChange={handleChange} />
            <label htmlFor='percent'>折扣</label>
            <input
              id='percent'
              value={coupon.percent || ''}
              name='percent'
              onChange={handleChange} />
            <label htmlFor='due_date'>使用期限:</label>
            <input
              id='due_date'
              type='date'
              value={changeToDate(coupon.due_date) || ''}
              name='due_date'
              onChange={handleChange} />
            <label htmlFor='is_enable'>是否啟用:</label>
            <input
              id='is_enable'
              type='checkbox'
              checked={(coupon.is_enabled === 1 ? true : false) || ''}
              name='is_enabled'
              onChange={handleChange} />
            {
              coupon.hasOwnProperty('id') ? <button onClick={updateCoupon}>Update</button> : <button onClick={addCoupon}>add</button>
            }
            <button onClick={handleCancel}>Cancel</button>
          </ul>
        )
      }
    </>
  )
}