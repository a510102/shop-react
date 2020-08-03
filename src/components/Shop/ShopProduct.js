import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';

export default function Product({ data }) {
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    async function handleAddToCart(id) {
        const product = { data: { product_id: id, qty: 1 } };
        let Url = 'https://vue-course-api.hexschool.io/api/jay/cart';
        let response = await fetch(Url, {
            method: "POST",
            body: JSON.stringify(product),
            headers: { 'content-type': 'application/json' }
        });
        const result = await response.json();
        const { message, success } = result;
        if (success) {
            alert.show(message);
            Url = 'https://vue-course-api.hexschool.io/api/jay/cart';
            response = await fetch(Url);
            const datas = await response.json();
            if (datas.success) {
                dispatch({ type: "UPDATE_CART", cart: datas.data })
            }
        }
    }

    function handlePathToProduct(number) {
        history.push(`/shop-react/shop/${number}`)
    }
    const { id, imageUrl, category, title, price, origin_price } = data;
    return (
        <li id={id} className="mb-1 rounded overflow-hidden shadow-lg  rounded-lg shadow-md relative h-auto">
            <div className='relative w-full h-48 mx-auto bg-gray-200'>
                <img src={imageUrl} alt="product" className='absolute max-h-full max-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='px-5 py-2  inset-x-0 bottom-0 bg-gray-100 w-full  rounded'>
                <h3 className=' flex justify-between text-teal-700 font-bold text-sm mb-2'>
                    <span>{category} :</span>
                    <span>{title}</span>
                </h3>
                <p className='flex justify-between text-teal-700 text-base'>
                    <span>原價: {origin_price}元</span>
                    <span>{price && `特價: ${price}元 `}</span>
                </p>
                <div className='flex items-center justify-between mt-2'>
                    <button onClick={() => handleAddToCart(id)} className="bg-green-400 hover:bg-green-600 text-white font-bold py-1 px-2 rounded-full">ADD</button>
                    <button onClick={() => handlePathToProduct(id)} className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-full">詳細內容</button>
                </div>
            </div>
        </li>
    )
}