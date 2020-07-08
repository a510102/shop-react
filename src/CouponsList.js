import React, { useState, useEffect } from 'react';
import EditCoupon from './EditCoupon';
import Coupon from './Coupon';

export default function CouponsList() {
  const [coupons, setCoupons] = useState(null);
  const [coupon, setCoupon] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Url = 'https://vue-course-api.hexschool.io/api/jay/admin/coupons';
    const response = await fetch(Url, {
      credentials: 'include',
    });
    const data = await response.json();
    if (data.success) {
      setCoupons(data.coupons);
      setLoading(false);
    }
  }

  const updateDate = async (data, id, type) => {
    const Url = id ? `https://vue-course-api.hexschool.io/api/jay/admin/coupon/${id}` : 'https://vue-course-api.hexschool.io/api/jay/admin/coupon';
    const response = await fetch(Url, {
      method: type,
      body: (type === "PUT" || type === 'POST') && JSON.stringify({ data: { ...data } }),
      credentials: 'include',
      headers: { 'content-type': (type === 'PUT' || type === 'POST') && 'application/json' },
    });
    const result = await response.json();
    if (result.success) {
      fetchData();
    }
  }

  const updateIsenable = (event, item) => {
    const newitem = { ...item, is_enabled: event.target.checked ? 1 : 0 };
    updateDate(newitem, item.id, 'PUT');
  }

  const openUpdateCoupon = item => {
    setCoupon(item);
    setOpen(true);
  }

  const handleChange = event => {
    let { name, value, checked, valueAsNumber } = event.target;
    if (name === 'due_date') {
      value = valueAsNumber / 1000;
    } else if (name === 'is_enabled') {
      value = checked ? 1 : 0;
    }
    console.log(name, value);
    setCoupon(preCoupon => {
      return {
        ...preCoupon,
        [name]: value
      }
    })
  }

  const updateCoupon = () => {
    updateDate(coupon, coupon.id, 'PUT');
    setOpen(false);
  }

  const addCoupon = () => {
    updateDate(coupon, null, 'POST');
    setCoupon({});
    setOpen(false);
  }

  const handleCancel = () => {
    setCoupon({})
    setOpen(false)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Coupon</h2>
      <EditCoupon
        open={open}
        setOpen={setOpen}
        coupon={coupon}
        handleChange={handleChange}
        updateCoupon={updateCoupon}
        addCoupon={addCoupon}
        handleCancel={handleCancel}
      />

      <ul>
        <li style={{ display: 'flex', width: '50vw', justifyContent: 'space-around' }}>
          <p>優惠卷</p>
          <p>代碼</p>
          <p>折扣</p>
          <p>使用期限</p>
          <p>使用</p>
          <p>編輯</p>
          <p>刪除</p>
        </li>
        {
          coupons && coupons.map((coupon, i) => {
            return <Coupon
              key={i}
              coupon={coupon}
              updateIsenable={updateIsenable}
              openUpdateCoupon={openUpdateCoupon}
              updateDate={updateDate}
            />
          })
        }
      </ul>
    </div>
  )
}