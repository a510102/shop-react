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

  const style = {
    div: 'w-full md:w-1/2 lg:w-1/3  px-3 mt-3 mb-6 md:mb-0',
    label: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
    input: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name',
  }

  return (
    <div>
      {!done ? (<>
        <h2 className='text-gray-800 text-xl'>客戶資訊</h2>
        <div className='flex flex-wrap mb-6 text-left'>
          <section className={style.div}>
            <label className={style.label} htmlFor='name'>姓名:</label>
            <input
              className={style.input}
              type='string'
              name='name'
              id='id'
              onChange={handleChange} />
          </section>
          <section className={style.div}>
            <label className={style.label} htmlFor='address'>地址: </label>
            <input
              className={style.input}
              type='string'
              name='address'
              id='address'
              onChange={handleChange} />
          </section>
          <section className={style.div}>
            <label className={style.label} htmlFor='tel'>電話:</label>
            <input
              className={style.input}
              type='number'
              name='tel'
              id='tel'
              onChange={handleChange} />
          </section>
          <section className={style.div}>
            <label className={style.label} htmlFor='email'>E-mail:</label>
            <input
              className={style.input}
              type='email'
              name='email'
              id='email'
              onChange={handleChange} />
          </section>
          <section className={style.div}>
            <label className={style.label} htmlFor='message'>Message: </label>
            <input
              className={style.input}
              type='message'
              name='message'
              id='message'
              onChange={handleChange} />
          </section>
          <section className='w-full md:w-1/2 lg:w-1/3  px-3 mt-3 mb-6 md:mb-0 sm:relative flex justify-end items-end'>
            {
              !pay ? <button onClick={AddOrder} className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded '>完成訂單</button> : <button onClick={handlePay} className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded '>確認結帳</button>
            }
          </section>
        </div>
      </>) : <div className='w-full flex justify-center items-center h-screen text-lg'>購物完成!</div>
      }
    </div>
  )
}