import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { ShopCartContext } from './ShopCartContext';
import './shopProduct.scss';

export default function Product({ data }) {
    const history = useHistory();
    const alert = useAlert();
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
        <li id={data.id} className="product">
            <div className='product-content'>
                <h3 className='product-title'>
                    <span>{data.category} :</span>
                    <span>{data.title}</span>
                </h3>
                <div className='product-img' >
                    <img src={data.imageUrl} alt="product" />
                </div>
                <p className='product-price'>
                    <span>原價: {data.origin_price} 元</span>
                    <span>{data.price && `特價: ${data.price} 元 `}</span>
                </p>
            </div>
            <div className='product-btn'>
                <button onClick={() => handleAddToCart(data.id)}>ADD</button>
                <button onClick={() => handlePathToProduct(data.id)}>詳細內容</button>
            </div>
        </li>
    )
}