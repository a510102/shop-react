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
    const { success, message, imageUrl } = result;
    if (success) {
      setProduct(preProducts => {
        return {
          ...preProducts,
          imageUrl
        }
      });
      alert.success('上傳成功');
    } else {
      if (message) {
        alert.error(message);
      } else {
        alert.error('上傳失敗, 檔案過大');
      }
    }
  }
  const style = {
    div: 'w-full md:w-1/2 lg:w-1/3  px-3 mt-3 mb-6 md:mb-0',
    label: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
    input: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name',
  };


  const { div, input, label } = style;
  const { category, title, content, description, imageUrl, origin_price, price, unit, is_enabled } = product;
  return (
    <>
      <button
        className='my-2 bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded'
        onClick={() => { setOpen(!open) }}>建立新商品</button>
      {
        open ? (
          <div className='w-full'>
            <div className='flex flex-wrap mb-6'>
              <section className={div}>
                <label className={label} htmlFor='category'>類別:</label>
                <input
                  className={input}
                  id='category'
                  name='category'
                  value={category || ''}
                  onChange={handleChange} />
              </section>
              <section className={div}>
                <label className={label} htmlFor='title'>商品:</label>
                <input
                  className={input}
                  id='title'
                  name='title'
                  value={title || ''}
                  onChange={handleChange} />
              </section>
              <section className={div}>
                <label htmlFor='content' className={label}>內容:</label>
                <input
                  className={input}
                  id='content'
                  name='content'
                  value={content || ''}
                  onChange={handleChange} />
              </section>
              <section className={div}>
                <label htmlFor='description' className={label}>描述:</label>
                <input
                  className={input}
                  id='description'
                  name='description'
                  value={description || ''}
                  onChange={handleChange} />
              </section>
              <section className={div}>
                <label htmlFor="image" className={label}>輸入圖片網址</label>
                <input
                  type="text"
                  className={input}
                  onChange={handleChange}
                  value={imageUrl || ''}
                  id="image"
                  name='imageUrl'
                  placeholder="請輸入圖片連結" />
              </section>
              <section className={div}>
                <label htmlFor="customFile" className={label}>或 上傳圖片:</label>
                <input
                  type="file"
                  id="customFile"
                  className={input}
                  ref={inputEl}
                  onChange={uploadFild} />
                {
                  product.imageUrl && <img style={{ width: '200px', height: '200px' }} src={product.imageUrl} alt='proPic' />
                }
              </section>
              <section className={div}>
                <label htmlFor='origin_price' className={label}>原價:</label>
                <input
                  className={input}
                  id='origin_price'
                  name='origin_price'
                  value={origin_price || ''}
                  onChange={handleChange} />
              </section>
              <section className={div}>
                <label htmlFor='price' className={label}>特價:</label>
                <input
                  className={input}
                  id='price'
                  name='price'
                  value={price || ''}
                  onChange={handleChange} />
              </section>
              <section className={div}>
                <label htmlFor='unit' className={label}>單位:</label>
                <input
                  className={input}
                  id='unit'
                  name='unit'
                  value={unit || ''}
                  onChange={handleChange} />
              </section>
              <section className={div}>
                <label className={label} htmlFor='is_enabled'>啟用:</label>
                <input
                  type='checkbox'
                  checked={(is_enabled === 1 ? true : false) || ''}
                  onChange={handleChange}
                  id='is_enabled'
                  name='is_enabled' />
              </section>
              <div className='w-full md:w-1/2 lg:w-1/3 px-3 flex p-4 justify-end'>
                {
                  !product.hasOwnProperty('id') ? <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded' onClick={addProduct}>Add</button> : <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded' onClick={updateProduct}>Update</button>
                }
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-3' onClick={handleCancel}>取消</button>
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  )
}