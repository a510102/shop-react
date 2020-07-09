import React, { useState, useContext } from 'react'
import { ShopCartContext } from './ShopCartContext';


export default function CheckOut({ setPath }) {
  const { carts } = useContext(ShopCartContext);
  const [order, setOrder] = useState({
    user: {},
    message: ''
  });
  const [id, setId] = useState(null);
  const [pay, setPay] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = event => {
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

  const AddOrder = async () => {
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
    console.log(newOrder);
    const response = await fetch(Url, {
      method: 'POST',
      body: JSON.stringify({ data: { ...newOrder } }),
      headers: { 'content-type': 'application/json' }
    });
    const datas = await response.json();
    if (datas.success) {
      setId(datas.orderId);
      setPay(true);
    }
  }

  const handlePay = async () => {
    const Url = `https://vue-course-api.hexschool.io/api/jay/pay/${id}`;
    const response = await fetch(Url, { method: 'POST' });
    const datas = await response.json();
    if (datas.success) {
      console.log(datas.message)
      setDone(true);
    }
  }

  return (
    <div>
      {!done ? (<>
        <ul>
          <li><h3>商品 :</h3></li>
          {carts.carts.map((cart, i) => {
            return (
              <li key={i} style={{ display: "flex" }}>
                <p>{cart.product.title} {cart.qty} {cart.product.unit} {cart.total} 元</p>
              </li>
            )
          })}
          <li>總共: {carts.final_total} 元</li>
        </ul>
        <div>
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
      <button onClick={() => setPath('shop')}> 返回</button>
    </div>
  )
}