import React from 'react'

export default function EditOrderList({ order, handleChange, editOrderList, handleCancel }) {
  const style = {
    div: 'w-full md:w-1/2 lg:w-1/3  px-3 mt-3 mb-6 md:mb-0',
    label: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
    input: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name',
  }

  return (
    <div className='container mb-3'>
      <h3 className='text-gray text-xl'>客戶資料</h3>
      <div className='flex flex-wrap mb-6'>
        <section className={style.div}>
          <label className={style.label} htmlFor='name'>姓名:</label>
          <input
            className={style.input}
            name='name'
            id='name'
            value={order.user.name || ''}
            onChange={handleChange} />
        </section>
        <section className={style.div}>
          <label className={style.label} htmlFor='tel'>電話:</label>
          <input
            className={style.input}
            name='tel'
            id='tel'
            value={order.user.tel || ''}
            onChange={handleChange} />
        </section>
        <section className={style.div}>
          <label className={style.label} htmlFor='address'>地址:</label>
          <input
            className={style.input}
            name='address'
            id='address'
            value={order.user.address || ''}
            onChange={handleChange} />
        </section>
        <section className={style.div}>
          <label className={style.label} htmlFor='email'>E-mail:</label>
          <input
            className={style.input}
            name='email'
            id='email'
            value={order.user.email || ''}
            onChange={handleChange} />
        </section>
        <section className={style.div}>
          <label className={style.label}>已付款
              <input
              type='checkbox'
              name='is_paid'
              checked={order.is_paid}
              onChange={handleChange} />
          </label>
        </section>
      </div>
      <h3>商品:</h3>
      {
        Object.keys(order.products).map(key => {
          return (
            <div key={key} style={{ display: 'flex', width: '50vw', justifyContent: 'space-around' }}>
              <p>{order.products[key].product.title}</p>
              <p>{order.products[key].qty} {order.products[key].product.unit}</p>
              <p>{order.products[key].total} 元</p>
              <p>{order.products[key].final_total} 元</p>
            </div>)
        })
      }
      <div className='text-right'>
        <button className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded ml-3' onClick={editOrderList}>Update</button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-3' onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}