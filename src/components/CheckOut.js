import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import { useInputValue } from '../hooks/useInputValue';


export default function CheckOut() {
  const alert = useAlert();

  const [id, setId] = useState(null);
  const [pay, setPay] = useState(false);
  const [done, setDone] = useState(false);
  const { ...name } = useInputValue('');
  const { ...address } = useInputValue('');
  const { ...tel } = useInputValue('');
  const { ...orderMessage } = useInputValue('');
  const { ...email } = useInputValue('');

  async function AddOrder() {
    const Url = 'https://vue-course-api.hexschool.io/api/jay/order';
    let newOrder = {
      user: {
        name: name.value,
        address: address.value,
        tel: tel.value,
        email: email.value,
      },
      message: orderMessage.value || '無'
    };
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
    div: 'w-full  px-3 mt-3 mb-6 md:mb-0',
    label: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
    input: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name',
  }
  const { div, label, input } = style;
  return (
    <div className='mt-2 p-2'>
      {!done ? (
        <>
          <h2 className='text-teal-500 text-xl py-1 text-center border border-teal-500 rounded-lg'>客戶資訊</h2>
          <div className='flex flex-wrap  mb-6 text-left '>
            <section className={div}>
              <label className={label} htmlFor='name'>姓名:</label>
              <input
                className={input}
                type='string'
                name='name'
                id='name'
                {...name} />
            </section>
            <section className={div}>
              <label className={label} htmlFor='address'>地址: </label>
              <input
                className={input}
                type='string'
                name='address'
                id='address'
                {...address} />
            </section>
            <section className={div}>
              <label className={label} htmlFor='tel'>電話:</label>
              <input
                className={input}
                type='number'
                name='tel'
                id='tel'
                {...tel} />
            </section>
            <section className={div}>
              <label className={label} htmlFor='email'>E-mail:</label>
              <input
                className={input}
                type='email'
                name='email'
                id='email'
                {...email} />
            </section>
            <section className={div}>
              <label className={label} htmlFor='message'>Message: </label>
              <input
                className={input}
                type='message'
                name='message'
                id='message'
                {...orderMessage} />
            </section>
            <section className='w-full  px-3 mt-3 mb-6 md:mb-0 sm:relative flex justify-end items-end'>
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