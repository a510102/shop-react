import React, { useRef } from 'react'


export default function EditProduct({ open, setOpen, product, handleChange, updateProduct, addProduct, handleCancel, setProduct, alert }) {
  const inputEl = useRef(null);

  async function uploadFild() {
    const uploadedFile = inputEl.current.files[0];
    const formData = new FormData();
    formData.append('file-to-upload', uploadedFile);
    const Url = 'https://vue-course-api.hexschool.io/api/jay/admin/upload';
    const response = await fetch(Url, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })
    const result = await response.json();
    if (result.success) {
      setProduct(preProducts => {
        return {
          ...preProducts,
          imageUrl: result.imageUrl
        }
      });
      alert.success('上傳成功');
    } else {
      alert.error(result.message);
    }
  }

  return (
    <>
      <button onClick={() => { setOpen(!open) }}>建立新商品</button>
      {
        open ? (
          <div>
            <label htmlFor='category'>類別:</label>
            <input
              id='category'
              name='category'
              value={product.category || ''}
              onChange={handleChange} />
            <label htmlFor='title'>商品:</label>
            <input
              id='title'
              name='title'
              value={product.title || ''}
              onChange={handleChange} />
            <label htmlFor='content'>內容:</label>
            <input
              id='content'
              name='content'
              value={product.content || ''}
              onChange={handleChange} />
            <label htmlFor='description'>描述:</label>
            <input
              id='description'
              name='description'
              value={product.description || ''}
              onChange={handleChange} />
            <label htmlFor="image">輸入圖片網址</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={product.imageUrl || ''}
              id="image"
              name='imageUrl'
              placeholder="請輸入圖片連結" />
            <label htmlFor="customFile">或 上傳圖片</label>
            <input type="file" id="customFile" className="form-control"
              ref={inputEl} onChange={uploadFild} />
            {
              product.imageUrl && <img style={{ width: '200px', height: '200px' }} src={product.imageUrl} alt='proPic' />
            }
            <label htmlFor='origin_price'>原價:</label>
            <input
              id='origin_price'
              name='origin_price'
              value={product.origin_price || ''}
              onChange={handleChange} />
            <label htmlFor='price'>特價:</label>
            <input
              id='price'
              name='price'
              value={product.price || ''}
              onChange={handleChange} />
            <label htmlFor='unit'>單位:</label>
            <input
              id='unit'
              name='unit'
              value={product.unit || ''}
              onChange={handleChange} />
            {
              !product.hasOwnProperty('id') ? <button onClick={addProduct}>Add</button> : <button onClick={updateProduct}>Update</button>
            }
            <button onClick={handleCancel}>取消</button>
          </div>
        ) : null
      }
    </>
  )
}