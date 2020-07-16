import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { ShopCartContext } from '../../contexts/shopCartContext/ShopCartContext';
import Loading from '../Loading/Loading';

export default function ProductSelf() {
  const { id } = useParams();
  const history = useHistory();
  const alert = useAlert();
  const { dispatch } = useContext(ShopCartContext);
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function addProductToCart(id, qty) {
    const product = { product_id: id, qty }
    let Url = 'https://vue-course-api.hexschool.io/api/jay/cart';
    let response = await fetch(Url, {
      method: 'POST',
      body: JSON.stringify({ data: { ...product } }),
      headers: { 'content-type': 'application/json' }
    });
    const result = await response.json();
    const { success, message } = result;
    if (success) {
      alert.success(message)
      Url = 'https://vue-course-api.hexschool.io/api/jay/cart';
      response = await fetch(Url);
      const datas = await response.json();
      if (datas.success) {
        dispatch({ type: "UPDATE_CART", cart: datas.data })
      }
    } else {
      alert.error(message)
    }

  }

  async function fetchProduct() {
    const Url = `https://vue-course-api.hexschool.io/api/jay/product/${id}`;
    const response = await fetch(Url);
    const result = await response.json();
    if (result.success) {
      setProduct(result.product);
    }
  }

  function handleChange(event) {
    const { value } = event.target;
    setQty(value);
  }

  if (product) {
    const { title, category, content, origin_price, price, description, unit } = product;
    return (
      <ul className='productself'>
        <li><h2>名稱:{title}</h2></li>
        <li><p>種類: {category}</p></li>
        <li><p>內容:{content}</p></li>
        <li><p>描述:{description}</p></li>
        <li><p>原價:{origin_price} {unit}</p></li>
        {price && <li><p>特價:{price} {unit}</p></li>}
        <select onChange={handleChange} value={qty}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <button onClick={() => addProductToCart(id, qty)}>加入購物車</button>
        <button onClick={() => { history.push('/shop') }}>返回</button>
      </ul>
    )
  }

  return <Loading />

}