import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { ShopCartContext } from '../../contexts/shopCartContext/ShopCartContext';

export default function Product({ data }) {
    const history = useHistory();
    const alert = useAlert();
    const { dispatch } = useContext(ShopCartContext);

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

    function handlePathToProduct(id) {
        history.push(`/shop/${id}`)
    }

    return (
        <li id={data.id} className="max-w-full mx-auto mb-1 px-1 rounded overflow-hidden shadow-lg w-full sm:w-1/2 lg:w-1/3 4 rounded-lg shadow-md relative">
            <img src={data.imageUrl} alt="product" className='w-full rounded' />
            <div className='px-3 py-2 absolute inset-x-0 bottom-0 bg-gray-100 w-full md:w-4/5  m-auto rounded mb-1'>
                <h3 className='flex justify-between text-teal-700 font-bold text-xl mb-2'>
                    <span>{data.category} :</span>
                    <span>{data.title}</span>
                </h3>
                <p className='flex justify-between text-teal-700 text-base'>
                    <span>原價: {data.origin_price}元</span>
                    <span>{data.price && `特價: ${data.price}元 `}</span>
                </p>
                <div className='flex items-center justify-between mt-2'>
                    <button onClick={() => handleAddToCart(data.id)} className="bg-green-400 hover:bg-green-600 text-white font-bold py-1 px-2 rounded-full">ADD</button>
                    <button onClick={() => handlePathToProduct(data.id)} className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-full">詳細內容</button>
                </div>
            </div>
        </li>
    )
}