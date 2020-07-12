import React from 'react'

export default function EditOrderList({ order, handleChange, editOrderList, handleCancel }) {
  return (
    <div>
      <h3>客戶資料</h3>
      <div style={{ display: 'flex', flexDirection: 'column', width: '30vw' }}>
        <label htmlFor='name'>姓名:</label>
        <input
          name='name'
          id='name'
          value={order.user.name}
          onChange={handleChange} />
        <label htmlFor='tel'>電話:</label>
        <input
          name='tel'
          id='tel'
          value={order.user.tel}
          onChange={handleChange} />
        <label htmlFor='address'>地址:</label>
        <input
          name='address'
          id='address'
          value={order.user.address}
          onChange={handleChange} />
        <label htmlFor='email'>E-mail:</label>
        <input
          name='email'
          id='email'
          value={order.user.email}
          onChange={handleChange} />
        <label>已付款
              <input
            type='checkbox'
            name='is_paid'
            checked={order.is_paid}
            onChange={handleChange} />
        </label>

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
      <button onClick={editOrderList}>Update</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}