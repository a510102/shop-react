import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';

import EditCoupon from './EditCoupon';
import Coupon from './Coupon';
import Loading from '../Loading/Loading';
import Pages from '../Pages';

export default function CouponsList() {

  const alert = useAlert();
  const [coupons, setCoupons] = useState(null);
  const [coupon, setCoupon] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [dePage, setDePage] = useState(1);
  const [pages, setPages] = useState(null)

  async function fetchData(page) {
    const Url = `https://vue-course-api.hexschool.io/api/jay/admin/coupons?page=${page}`;
    const response = await fetch(Url, {
      credentials: 'include',
    });
    const data = await response.json();

    const { success, pagination, coupons } = data;

    if (success) {
      setCoupons(coupons);
      setPages(pagination.total_pages)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(dePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dePage]);

  async function updateDate(data, id, type) {
    const Url = id ? `https://vue-course-api.hexschool.io/api/jay/admin/coupon/${id}` : 'https://vue-course-api.hexschool.io/api/jay/admin/coupon';
    const response = await fetch(Url, {
      method: type,
      body: (type === "PUT" || type === 'POST') && JSON.stringify({ data: { ...data } }),
      credentials: 'include',
      headers: { 'content-type': (type === 'PUT' || type === 'POST') && 'application/json' },
    });
    const result = await response.json();
    const { success, message } = result;
    if (success) {
      fetchData();
      if (message) {
        alert.success(message);
      }
    } else {
      if (message) {
        alert.error(message);
      }
    }
  }

  function updateIsenable(event, item) {
    const newitem = { ...item, is_enabled: event.target.checked ? 1 : 0 };
    updateDate(newitem, item.id, 'PUT');
  }

  function openUpdateCoupon(item) {
    setCoupon(item);
    setOpen(true);
  }

  function handleChange(event) {
    let { name, value, checked, valueAsNumber } = event.target;
    if (name === 'due_date') {
      value = valueAsNumber / 1000;
    } else if (name === 'is_enabled') {
      value = checked ? 1 : 0;
    }
    setCoupon(preCoupon => {
      return {
        ...preCoupon,
        [name]: value
      }
    })
  }

  function updateCoupon() {
    updateDate(coupon, coupon.id, 'PUT');
    setOpen(false);
  }

  const addCoupon = () => {
    updateDate(coupon, null, 'POST');
    setCoupon({});
    setOpen(false);
  }

  function handleCancel() {
    setCoupon({})
    setOpen(false)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className='CouponList'>
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
      <table className="CouponList-table">
        <thead>
          <tr>
            <th>優惠卷</th>
            <th>代碼</th>
            <th>折扣</th>
            <th>使用期限</th>
            <th>使用</th>
            <th>編輯</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <Pages dePage={dePage} setDePage={setDePage} num={pages} />
    </div>
  )
}