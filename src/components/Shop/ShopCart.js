import React, { useState, useEffect, useContext } from 'react';
import { useAlert } from 'react-alert'
import { ShopCartContext } from './ShopCartContext';
import { useHistory } from 'react-router-dom'
import CheckOut from '../CheckOut';

import './shopcart.scss'



export default function ShopCart() {
    const alert = useAlert();
    const history = useHistory();

    const { carts, dispatch } = useContext(ShopCartContext);
    const [coupon, setCoupon] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        const Url = 'https://vue-course-api.hexschool.io/api/jay/cart';
        const response = await fetch(Url);
        const datas = await response.json();
        if (datas.success) {
            dispatch({ type: "UPDATE_CART", cart: datas.data })
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleDeleCart = async (id) => {
        const Url = `https://vue-course-api.hexschool.io/api/jay/cart/${id}`;
        const response = await fetch(Url, { method: "DELETE" });
        const result = await response.json();
        const { success, message } = result;
        if (success) {
            fetchData();
            alert.success(message)
        }
    }

    const handleChange = event => {
        const value = event.target.value;
        setCoupon(value);
    }

    const handleCoupon = async (text) => {
        const Url = 'https://vue-course-api.hexschool.io/api/jay/coupon';
        const data = { data: { code: text } }
        const response = await fetch(Url, { method: 'POST', body: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
        const result = await response.json();

        const { success, message } = result;

        if (success) {
            dispatch({ type: "UPDATE_PRICE", price: result.data.final_total });
            alert.success(message);
        } else {
            alert.error(message);
        }
    };

    const handleCheckOut = () => {
        setOpen(true);
    }

    return (
        <div className='shopcart'>
            {
                !loading && (
                    <ul className='shopcart-itemlist'>
                        {
                            !carts.carts.length ? 'nothings' : (
                                <>
                                    {carts.carts.map((cart, i) => {
                                        return (
                                            <li
                                                className='shopcart-item'
                                                key={i}>
                                                <p>
                                                    <span>{cart.product.title}</span>
                                                    <span>{cart.qty} {cart.product.unit}</span>
                                                    <span>{cart.total} 元</span> </p>
                                                <button onClick={() => handleDeleCart(cart.id)}>刪除</button>
                                            </li>
                                        )
                                    })}
                                    <li className='shopcart-total-price'>總共: {carts.final_total} 元</li>
                                    <li className='shop-coupon'>
                                        <input onChange={handleChange} value={coupon} />
                                        <button
                                            className='coupon-btn'
                                            onClick={() => handleCoupon(coupon)}>優惠</button>
                                    </li>
                                    {
                                        open && <CheckOut />
                                    }
                                    {
                                        !open && <button
                                            className='checkout-btn'
                                            onClick={handleCheckOut}>前往結帳</button>
                                    }
                                </>
                            )
                        }
                        <button
                            className='close-btn'
                            onClick={() => { history.push('/shop') }}>返回</button>
                    </ul>
                )
            }

        </div >
    )
}