import React, { useState, useEffect, useContext } from 'react';
import { useAlert } from 'react-alert'
import { ShopCartContext } from '../../contexts/shopCartContext/ShopCartContext';
import { useHistory } from 'react-router-dom'
import CheckOut from '../CheckOut';

export default function ShopCart() {
    const alert = useAlert();
    const history = useHistory();

    const { carts, dispatch } = useContext(ShopCartContext);
    const [coupon, setCoupon] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchData() {
        const Url = 'https://vue-course-api.hexschool.io/api/jay/cart';
        const response = await fetch(Url);
        const datas = await response.json();
        if (datas.success) {
            dispatch({ type: "UPDATE_CART", cart: datas.data })
            setLoading(false);
        }
    }

    async function handleDeleCart(id) {
        const Url = `https://vue-course-api.hexschool.io/api/jay/cart/${id}`;
        const response = await fetch(Url, { method: "DELETE" });
        const result = await response.json();
        const { success, message } = result;
        if (success) {
            fetchData();
            alert.success(message)
        }
    }

    function handleChange(event) {
        const value = event.target.value;
        setCoupon(value);
    }

    async function handleCoupon(text) {
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

    function handleCheckOut() {
        setOpen(true);
    }

    return (
        <div className='my-4 mx-auto p-2 text-right'>
            {
                !loading && (
                    <ul className='w-full'>
                        {
                            !carts.carts.length ? <h3>nothings</h3> : (
                                <>
                                    {carts.carts.map((cart, i) => {
                                        return (
                                            <li
                                                className='ml-auto p-2 flex w-3/4 sm:w-1/2 md:w-1/3 border-b-2 items-center justify-between border-gray-600'
                                                key={i}>
                                                <p className='flex'>
                                                    <span>{cart.product.title}{cart.qty} {cart.product.unit}</span>
                                                    <span className='ml-4'>{cart.total} 元</span> </p>
                                                <button
                                                    className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full'
                                                    onClick={() => handleDeleCart(cart.id)}>刪除</button>
                                            </li>
                                        )
                                    })}
                                    <li className='p-2'>總共: {carts.final_total} 元</li>
                                    <li className='p-2'>
                                        <input className='p-2 text-teal-400 border border-teal-400 rounded-md' onChange={handleChange}
                                            placeholder='輸入優惠卷代碼'
                                            value={coupon || ''} />
                                        <button
                                            className='ml-2 bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-1 px-2 rounded-full'
                                            onClick={() => handleCoupon(coupon)}>優惠</button>
                                    </li>
                                    {
                                        open && <CheckOut />
                                    }
                                    {
                                        !open && <button
                                            className='mr-2 mt-2 bg-teal-400 hover:bg-teal-600 text-white font-bold py-1 px-2 rounded-full'
                                            onClick={handleCheckOut}>前往結帳</button>
                                    }
                                </>
                            )
                        }
                        <button
                            className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-full'
                            onClick={() => { history.push('/shop-react/shop') }}>返回</button>
                    </ul>
                )
            }

        </div >
    )
}