import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';

import EditProduct from './EditProduct';
import BackProduct from './BackProduct';
import Loading from '../Loading/Loading';

export default function Products() {
  const alert = useAlert();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({})

  const fetchProducts = async () => {
    const Url = 'https://vue-course-api.hexschool.io/api/jay/products';
    const response = await fetch(Url);
    const data = await response.json()
    setProducts(data.products)
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateData = async (data, id, type) => {
    let Url;
    if (id) {
      Url = `https://vue-course-api.hexschool.io/api/jay/admin/product/${id}`;
    } else {
      Url = `https://vue-course-api.hexschool.io/api/jay/admin/product`;
    }

    const response = await fetch(Url, {
      method: type,
      body: (type === 'PUT' || type === 'POST') && JSON.stringify({ data: { ...data } }),
      credentials: 'include',
      headers: { 'content-type': (type === 'PUT' || type === 'POST') && 'application/json' },
    });
    const result = await response.json();
    const { success, message } = result;
    if (success) {
      fetchProducts();
      if (message) {
        alert.success(message);
      }
    } else {
      if (message) {
        alert.error(message)
      }
    }
  }

  const updateEnabled = (e, item) => {
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

  const addProduct = () => {
    updateData(product, null, 'POST');
    setProduct({});
    setOpen(false);
  }

  const updateProduct = () => {
    updateData(product, product.id, 'PUT');
    setOpen(false);
  }

  const deleteProduct = (id) => {
    updateData(null, id, 'DELETE');
  }

  const handleCancel = () => {
    setProduct({});
    setOpen(false);
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <h2>Products</h2>
      <EditProduct
        open={open}
        setOpen={setOpen}
        product={product}
        handleChange={handleChange}
        updateProduct={updateProduct}
        addProduct={addProduct}
        handleCancel={handleCancel}
        setProduct={setProduct}
        alert={alert}
      />
      <ul>
        <li style={{ display: 'flex', width: '50vw', justifyContent: 'space-around', alignItems: 'center' }}>
          <p>產品</p>
          <p>類別</p>
          <p>單位</p>
          <p>原價</p>
          <p>特價</p>
          <p>啟用</p>
        </li>
        {
          products && products.map((product, i) => {
            return <BackProduct
              product={product}
              key={i}
              updateEnabled={updateEnabled}
              openUpdateProduct={openUpdateProduct}
              deleteProduct={deleteProduct} />
          })
        }
      </ul>
    </div>

  )
}