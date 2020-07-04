import React, { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    const Url = 'https://vue-course-api.hexschool.io/api/jay/products';
    const response = await fetch(Url);
    const data = await response.json()
    setProducts(data.products)

  }

  return (
    <div>
      <ul>
        <li>
          <span>產品</span>
          <span>類別</span>
          <span>單位</span>
          <span>原價</span>
          <span>特價</span>
          <span>啟用</span>
        </li>
        {
          products && products.map(product => {
            return (
              <li>
                <span>{product.title}</span>
                <span>{product.category}</span>
                <span>{product.unit}</span>
                <span>{product.origin_price}元</span>
                <span>{product.price}元</span>
                <input type="checkbox" checked={product.is_enabled === 1 ? true : false} />
              </li>
            )
          })
        }
      </ul>
    </div>

  )
}