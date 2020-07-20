import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';

import EditProduct from './EditProduct';
import BackProduct from './BackProduct';
import Loading from '../Loading/Loading';
import Pages from '../Pages';

export default function Products() {
  const alert = useAlert();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [dePage, setDePage] = useState(1);
  const [pages, setPages] = useState(null);

  useEffect(() => {
    fetchProducts(dePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dePage]);

  async function fetchProducts(page) {
    const Url = `https://vue-course-api.hexschool.io/api/jay/products?page=${page}`;
    const response = await fetch(Url);
    const data = await response.json();
    if (data.success) {
      setProducts(data.products)
      setLoading(false);
      setPages(data.pagination.total_pages);
    }

  }

  async function updateData(data, id, type) {
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

  function updateEnabled(e, item) {
    const { checked } = e.target;
    const newproduct = { ...item, is_enabled: checked ? 1 : 0 };
    updateData(newproduct, item.id, 'PUT');
  }

  function openUpdateProduct(item) {
    setProduct(item);
    if (!open) {
      setOpen(true);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(preProduct => {
      return {
        ...preProduct,
        [name]: value
      }
    })
  }

  function addProduct() {
    updateData(product, null, 'POST');
    setProduct({});
    setOpen(false);
  }

  function updateProduct() {
    updateData(product, product.id, 'PUT');
    setOpen(false);
  }

  function deleteProduct(id) {
    updateData(null, id, 'DELETE');
  }

  function handleCancel() {
    setProduct({});
    setOpen(false);
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="backProducts">
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
      <table className="backProducts-table">
        <thead>
          <tr>
            <th>產品</th>
            <th>類別</th>
            <th>單位</th>
            <th>原價</th>
            <th>特價</th>
            <th>啟用</th>
            <th>編輯</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <Pages dePage={dePage} setDePage={setDePage} num={pages} />
    </div>

  )
}