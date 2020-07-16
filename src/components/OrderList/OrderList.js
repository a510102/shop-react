import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';

import Pages from '../Pages';
import EditOrderList from './EditOrderList';
import Order from './Order';
import Loading from '../Loading/Loading'

import '../../styles/OrderList.scss';


export default function OrderList() {
  const alert = useAlert();

  const [orders, setOrders] = useState(null);
  const [order, setOrder] = useState(null);
  const [show, setShow] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState([]);
  const [dePage, setDePage] = useState(1);
  const [pages, setPages] = useState(null);


  async function fetchData(page) {
    setLoading(true);
    const Url = `https://vue-course-api.hexschool.io/api/jay/admin/orders?page=${page}`;
    const response = await fetch(Url, {
      credentials: 'include',
    });
    const data = await response.json();
    const { success, orders, pagination } = data;
    if (success) {
      setOrders(orders);
      setPages(pagination.total_pages)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(dePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dePage]);

  function showDetail(num) {
    if (!openDetail && id.length === 0) {
      setOpenDetail(!openDetail);
      setId([num])
    } else if (openDetail && id && !id.includes(num)) {
      const newid = [...id, num];
      setId(newid)
    } else if (openDetail && id.length > 1 && id.includes(num)) {
      const newid = id.filter(item => item !== num)
      setId(newid)
    } else {
      setOpenDetail(false);
      setId([]);
    }
  }

  function handleChange(event) {
    const { name, value, checked } = event.target;
    setOrder(preOrder => {
      if (name === 'email' || name === 'address' || name === 'name' || name === 'tel') {
        return {
          ...preOrder,
          user: {
            ...preOrder.user,
            [name]: value
          }
        }
      } else if (name === 'is_paid') {
        return {
          ...preOrder,
          [name]: checked
        }
      }
      else {
        return {
          ...preOrder,
          [name]: value
        }
      }
    })
  }

  function openEditOrder(item) {
    setShow(true);
    setOrder(item);
  }

  async function editOrderList() {
    const Url = `https://vue-course-api.hexschool.io/api/jay/admin/order/${order.id}`;
    setShow(false);
    setLoading(true);
    const data = { ...order };
    const response = await fetch(Url, {
      method: 'PUT',
      body: JSON.stringify({ data: { ...data } }),
      credentials: 'include',
      headers: { 'content-type': 'application/json' },
    });
    const result = await response.json();
    const { success, message } = result;
    if (success) {
      fetchData();
      alert.success(message);
    }
  }

  function handleCancel() {
    setShow(false);
    setOrder(null);
  }

  if (orders && !loading) {
    const filterOrders = orders.filter(order => order.user);
    return (
      <div className='OrderList'>
        <h2>OrderList</h2>
        {
          show && <EditOrderList order={order} handleChange={handleChange} editOrderList={editOrderList} handleCancel={handleCancel} />
        }
        <table className="OrderList-table">
          <thead>
            <tr>
              <th>訂單編號 :</th>
              <th>商品列表 :</th>
              <th>名字 :</th>
              <th>地址 :</th>
              <th>連絡電話 :</th>
              <th>E-mail :</th>
              <th>下單時間 :</th>
              <th>結帳時間 :</th>
              <th>是否付款 :</th>
              <th>修改資料 :</th>
            </tr>
          </thead>
          <tbody>
            {
              filterOrders.map((order, i) => {
                return <Order key={i} show={show} order={order} showDetail={showDetail} openDetail={openDetail} id={id} openEditOrder={openEditOrder} />
              })
            }
          </tbody>
        </table>
        <Pages dePage={dePage} setDePage={setDePage} num={pages} />
      </div>
    )
  }

  return <Loading />
}