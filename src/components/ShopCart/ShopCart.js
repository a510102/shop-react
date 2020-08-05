import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import CheckOut from '../CheckOut';
import Loading from '../Loading/Loading';
import { ButtonLayout } from './ButtonLayout';

export default function ShopCart() {
    const alert = useAlert();
    const history = useHistory();
    const dispatch = useDispatch();
    const carts = useSelector(store => store.cartsState.carts)
    const [coupon, setCoupon] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function fetchData() {
        return dispatch => {
            const Url = 'https://vue-course-api.hexschool.io/api/jay/cart';
            fetch(Url)
                .then(res => res.json())
                .then(data => {
                    dispatch({ type: "UPDATE_CART", cart: data.data })
                    setLoading(false)
                }
                )
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

    async function handleUpdate(cartId, productId, qtyN) {
        let Url;
        const product = { product_id: productId, qty: qtyN };
        setLoading(true);
        Url = `https://vue-course-api.hexschool.io/api/jay/cart/${cartId}`;
        let response = await fetch(Url, { method: "DELETE" });
        let result = await response.json();
        if (result.success && qtyN > 0) {
            Url = 'https://vue-course-api.hexschool.io/api/jay/cart';
            response = await fetch(Url, {
                method: 'POST',
                body: JSON.stringify({ data: { ...product } }),
                headers: { 'content-type': 'application/json' }
            });
            result = await response.json();
            if (result.success) {
                dispatch(fetchData());
                setLoading(false);
                alert.show('更新成功');
            } else {
                setLoading(false);
                alert.error(result.message);
            }
        } else {
            dispatch(fetchData());
            setLoading(false);
            alert.success(result.message)
        }
    }

    async function handleDeleCart(id) {
        const Url = `https://vue-course-api.hexschool.io/api/jay/cart/${id}`;
        setLoading(true);
        const response = await fetch(Url, { method: "DELETE" });
        const result = await response.json();
        const { success, message } = result;
        if (success) {
            dispatch(fetchData());
            setLoading(false);
            alert.success(message);
        } else {
            dispatch(fetchData());
            setLoading(false);
            alert.error(message);
        }
    }

    function handleBack() {
        history.push('/shop-react/shop')
    }

    return (
        <div className='my-4 w-full mx-auto p-2 min-h-screen'>
            <h2 className='text-xl p-2 w-full border border-teal-500 text-teal-500 rounded-lg'>您的購物車</h2>
            {
                !loading ? (
                    <div className='w-full text-right'>
                        {
                            !carts.carts.length ? (
                                <ButtonLayout handleBack={handleBack} styleName='w-full'>
                                    <h3 className='text-4xl my-4 text-center'>nothings</h3>
                                </ButtonLayout>
                            ) : (
                                    <ButtonLayout styleName='w-full  grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4' handleBack={handleBack}>
                                        <ul className='w-full'>
                                            <li className='p-2 flex border-b-2 items-center justify-around border-gray-600'>
                                                <p>名字</p>
                                                <p>數量</p>
                                                <p>價格</p>
                                                <p>刪除</p>
                                            </li>
                                            {carts.carts.map((cart, i) => {
                                                return (
                                                    <li
                                                        className='ml-auto p-2 flex border-b-2 items-center justify-around border-gray-600'
                                                        key={i}>
                                                        <p>
                                                            {cart.product.title}
                                                        </p>
                                                        <p>
                                                            <span
                                                                className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg mr-1'
                                                                onClick={() => handleUpdate(cart.id, cart.product_id, cart.qty - 1)}>-</span>
                                                            <span>{cart.qty}</span>
                                                            <span
                                                                className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2  rounded-lg mx-1'
                                                                onClick={() => handleUpdate(cart.id, cart.product_id, cart.qty + 1)}>+</span>
                                                            <span>{cart.product.unit}</span>
                                                        </p>
                                                        <p className='ml-4'>{cart.total} 元
                                                        </p>
                                                        <button
                                                            className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-lg'
                                                            onClick={() => handleDeleCart(cart.id)}>刪除</button>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <div className='w-full'>
                                            <p className='p-2'>共 {carts.carts.length} 件，總共: {carts.final_total} 元</p>
                                            <div className='w-full'>
                                                <input className='p-2 text-indigo-400 border border-teal-400 rounded-md' onChange={handleChange}
                                                    placeholder='輸入優惠卷代碼'
                                                    value={coupon || ''} />
                                                <button
                                                    className='ml-2 bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-1 px-2 rounded-lg'
                                                    onClick={() => handleCoupon(coupon)}>優惠</button>
                                            </div>
                                            {
                                                open ? <CheckOut /> : <button
                                                    className='mt-2 bg-teal-400 hover:bg-teal-600 text-white font-bold py-1 px-2 rounded-lg'
                                                    onClick={handleCheckOut}>前往結帳</button>
                                            }
                                        </div>
                                    </ButtonLayout>
                                )
                        }
                    </div>
                ) : <Loading />
            }
        </div >
    )
}