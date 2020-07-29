import React from 'react'
import { changeToDate } from '../../js/setTime';

export default function EditCoupon({ open, setOpen, coupon, handleChange, updateCoupon, addCoupon, handleCancel }) {
  const style = {
    div: 'w-full md:w-1/2 lg:w-1/3  px-3 mt-3 mb-6 md:mb-0',
    label: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
    input: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name',
  }

  return (
    <>
      <button className='my-2 bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded' onClick={() => setOpen(!open)}>Add Coupon</button>
      {
        open && (
          <div className='flex flex-wrap mb-6'>
            <section className={style.div}>
              <label
                className={style.label} htmlFor='title'>優惠卷名稱:</label>
              <input
                className={style.input}
                id='title'
                value={coupon.title || ''}
                name='title'
                onChange={handleChange} />
            </section>
            <section className={style.div}>
              <label className={style.label} htmlFor='code'>代碼:</label>
              <input
                className={style.input}
                id='code'
                value={coupon.code || ''}
                name='code'
                onChange={handleChange} />
            </section>
            <section className={style.div}>
              <label className={style.label} htmlFor='percent'>折扣</label>
              <input
                className={style.input}
                id='percent'
                value={coupon.percent || ''}
                name='percent'
                onChange={handleChange} />
            </section>
            <section className={style.div}>
              <label className={style.label} htmlFor='due_date'>使用期限:</label>
              <input
                className={style.input}
                id='due_date'
                type='date'
                value={changeToDate(coupon.due_date) || ''}
                name='due_date'
                onChange={handleChange} />
            </section>
            <section className={style.div}>
              <label className={style.label} htmlFor='is_enable'>是否啟用:</label>
              <input
                id='is_enable'
                type='checkbox'
                checked={(coupon.is_enabled === 1 ? true : false) || ''}
                name='is_enabled'
                onChange={handleChange} />
            </section>
            <div className='w-full md:w-1/2 lg:w-1/3  px-3 mt-3 mb-6 md:mb-0 sm:relative flex justify-end items-end'>
              {
                coupon.hasOwnProperty('id') ? <button className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded' onClick={updateCoupon}>Update</button> : <button className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded' onClick={addCoupon}>add</button>
              }
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2' onClick={handleCancel}>Cancel</button>
            </div>

          </div>
        )
      }
    </>
  )
}