import React, { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null)
  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    const Url = 'https://vue-course-api.hexschool.io/api/jay/products';
    const response = await fetch(Url);
    const data = await response.json()
    setProducts(data.products)
    setLoading(false);
  }

  const updateData = async (data, id, type) => {
    const Url = `https://vue-course-api.hexschool.io/api/jay/admin/product/${id}`;
    const response = await fetch(Url, {
      method: type,
      body: type === 'PUT' ? JSON.stringify({ data: { ...data } }) : null,
      credentials: 'include',
      headers: { 'content-type': 'application/json' }
    });
    const result = await response.json();
    if (result.success) {
      fetchProducts();
    }
  }

  const updateEnabled = async (e, item) => {
    const { checked } = e.target;
    const newproduct = { ...item, is_enabled: checked ? 1 : 0 };
    updateData(newproduct, item.id, 'PUT');
  }

  const openUpdateProduct = item => {
    setProduct(item);
    if (!open) {
      setOpen(true);
    }
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setProduct(preProduct => {
      return {
        ...preProduct,
        [name]: value
      }
    })
  }

  const updateProduct = () => {
    updateData(product, product.id, 'PUT');
    setOpen(false);
  }

  const deleteProduct = async (id) => {
    updateData(null, id, 'DELETE');
  }

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <div>
      <button onClick={() => { setOpen(!open) }}>建立新商品</button>
      {
        open ? (
          <div>
            <label htmlFor='category'>類別:</label>
            <input
              id='category'
              name='category'
              value={product.category}
              onChange={handleChange} />
            <label htmlFor='title'>商品:</label>
            <input
              id='title'
              name='title'
              value={product.title}
              onChange={handleChange} />
            <label htmlFor='origin_price'>原價:</label>
            <input
              id='origin_price'
              name='origin_price'
              value={product.origin_price}
              onChange={handleChange} />
            <label htmlFor='price'>特價:</label>
            <input
              id='price'
              name='price'
              value={product.price}
              onChange={handleChange} />
            <label htmlFor='unit'>單位:</label>
            <input
              id='unit'
              name='unit'
              value={product.unit}
              onChange={handleChange} />
            <button onClick={updateProduct}>Update</button>
          </div>
        ) : null
      }

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
          products && products.map((product, i) => {
            return (
              <li key={i}>
                <span>{product.title}</span>
                <span>{product.category}</span>
                <span>{product.unit}</span>
                <span>{product.origin_price}元</span>
                <span>{product.price}元</span>
                <input
                  type="checkbox"
                  onChange={(e) => updateEnabled(e, product)}
                  checked={product.is_enabled === 1 ? true : false}
                />
                <button onClick={() => openUpdateProduct(product)}>編輯</button>
                <button onClick={() => deleteProduct(product.id)}>刪除</button>
              </li>
            )
          })
        }
      </ul>
    </div>

  )
}