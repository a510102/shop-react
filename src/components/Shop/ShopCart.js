import React, { useState, useEffect, useContext } from 'react';
import { ShopCartContext } from './ShopCartContext';
import { useHistory } from 'react-router-dom'


export default function ShopCart() {
    const { carts, dispatch } = useContext(ShopCartContext);
    const [coupon, setCoupon] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

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

    const handleClick = () => {
        setOpen(!open);
    }

    const handleDeleCart = async (id) => {
        const Url = `https://vue-course-api.hexschool.io/api/jay/cart/${id}`;
        const response = await fetch(Url, { method: "DELETE" });
        const result = await response.json();
        if (result.success) {
            fetchData();
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
        const result = await response.json()
        if (result.success) {
            dispatch({ type: "UPDATE_PRICE", price: result.data.final_total })
        } else {
            console.log(result.message);
        }
    };

    const handleCheckOut = () => {
        history.push('/checkout');
    }

    return (
        <div>
            {
                !loading && (
                    <>
                        <button onClick={handleClick}>ShopCart</button>
                        {
                            open ? (
                                <ul>
                                    {
                                        !carts.carts.length ? 'nothings' : (
                                            <>
                                                {carts.carts.map((cart, i) => {
                                                    return (
                                                        <li key={i} style={{ display: "flex" }}>
                                                            <p>{cart.product.title} {cart.qty} {cart.product.unit} {cart.total} 元</p>
                                                            <button onClick={() => handleDeleCart(cart.id)}>刪除</button>
                                                        </li>
                                                    )
                                                })}
                                                <li>總共: {carts.final_total} 元</li>
                                                <li>
                                                    <input onChange={handleChange} value={coupon} />
                                                    <button onClick={() => handleCoupon(coupon)}>優惠</button>
                                                </li>
                                                <button onClick={handleCheckOut}>前往結帳</button>
                                            </>
                                        )
                                    }
                                    <button onClick={() => setOpen(false)}>關閉</button>
                                </ul>) : null
                        }
                    </>
                )
            }

        </div >
    )
}