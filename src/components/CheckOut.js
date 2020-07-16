import React, { useState } from 'react'
import { useAlert } from 'react-alert';


export default function CheckOut() {
  const alert = useAlert();
  const [order, setOrder] = useState({
    user: {},
    message: ''
  });
  const [id, setId] = useState(null);
  const [pay, setPay] = useState(false);
  const [done, setDone] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setOrder(preOrder => {
      if (name === 'message') {
        return {
          ...preOrder,
          [name]: value
        }
      } else {
        return {
          ...preOrder,
          user: {
            ...preOrder.user,
            [name]: value
          }
        }
      }
    })
  }

  async function AddOrder() {
    const Url = 'https://vue-course-api.hexschool.io/api/jay/order';
    let newOrder;
    if (!order.message) {
      newOrder = {
        ...order,
        message: '無'
      };
    } else {
      newOrder = { ...order };
    }
    const response = await fetch(Url, {
      method: 'POST',
      body: JSON.stringify({ data: { ...newOrder } }),
      headers: { 'content-type': 'application/json' }
    });
    const datas = await response.json();
    const { success, orderId, message } = datas;

    if (success) {
      setId(orderId);
      alert.success(message);
      setPay(true);
    } else {
      alert.error(message);
    }
  }

  async function handlePay() {
    const Url = `https://vue-course-api.hexschool.io/api/jay/pay/${id}`;
    const response = await fetch(Url, { method: 'POST' });
    const datas = await response.json();
    const { success, message } = datas;

    if (success) {
      alert.show(message);
      setDone(true);
    }
  }

  return (
    <div>
      {!done ? (<>
        <div>
          <h2>客戶資訊</h2>
          <label htmlFor='name'>姓名:
          <input
              type='string'
              name='name'
              id='id'
              onChange={handleChange} />
          </label>
          <label htmlFor='address'>地址:
          <input
              type='string'
              name='address'
              id='address'
              onChange={handleChange} />
          </label>
          <label htmlFor='tel'>電話:
          <input
              type='number'
              name='tel'
              id='tel'
              onChange={handleChange} />
          </label>
          <label htmlFor='email'>E-mail:
          <input
              type='email'
              name='email'
              id='email'
              onChange={handleChange} />
          </label>
          <label htmlFor='message'>Message:
          <input
              type='message'
              name='message'
              id='message'
              onChange={handleChange} />
          </label>
          {
            !pay ? <button onClick={AddOrder}>完成訂單</button> : <button onClick={handlePay}>確認結帳</button>
          }
        </div>
      </>) : <div>購物完成!</div>
      }
    </div>
  )
}