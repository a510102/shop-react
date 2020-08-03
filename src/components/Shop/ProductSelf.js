import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import Loading from '../Loading/Loading';

export default function ProductSelf() {
  const { id } = useParams();
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
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
    const { title, category, content, origin_price, price, description, unit, imageUrl } = product;
    return (
      <div className='container w-ful flex flex-col mx-auto'>
        <div className='max-w-lg mx-auto'>
          <img className='' src={imageUrl} alt='food' className='w-full' />
        </div>
        <div className='flex flex-wrap max-w-lg w-full mx-auto'>
          <div className='w-full md:w-1/2 mb-6 md:mb-0'>
            <h2 className='text-3xl font-medium mb-3'>{category}: {title}</h2>
            <p className='text-xl font-medium mb-1'>內容:</p>
            <p className=' mb-3'>{content}</p>
            <p className=' mb-1 text-xl font-medium'>描述:</p>
            <p className='mb-3'>{description}</p>
            <p className=' mb-3'>原價:{origin_price}元 / {unit}</p>
            {price && <p className=' mb-3'>特價:{price} 元 / {unit}</p>}
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className='relative'>
              <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="qty">
                選擇數量:
              </label>
              <select
                id='qty'
                className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                onChange={handleChange}
                value={qty}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className='mt-2 flex justify-between '>
              <button
                className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded'
                onClick={() => addProductToCart(id, qty)}>加入購物車</button>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
                onClick={() => { history.push('/shop-react/shop') }}>返回</button>
            </div>
          </div>
        </div>
      </div >
    )
  }

  return <Loading />

}