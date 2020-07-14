import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ShopCartContext } from './ShopCartContext';

export default function Product({ data }) {
    const history = useHistory();
    const { dispatch } = useContext(ShopCartContext);

    const handleAddToCart = async (id) => {
        const product = { data: { product_id: id, qty: 1 } };
        let Url = 'https://vue-course-api.hexschool.io/api/jay/cart';
        let response = await fetch(Url, {
            method: "POST",
            body: JSON.stringify(product),
            headers: { 'content-type': 'application/json' }
        });
        const result = await response.json();
        if (result.success) {
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
        <li id={data.id} className="product">
            <h3 className='product-title'>
                {data.category} : {data.title}
            </h3>
            <img className='product-img' src={data.image} alt="product" />
            <p className='product-price'>原價: {data.origin_price} 元 {data.price && `特價: ${data.price} 元 `}</p>
            <button onClick={() => handleAddToCart(data.id)}>ADD</button>
            <button onClick={() => handlePathToProduct(data.id)}>詳細內容</button>
        </li>
    )
}