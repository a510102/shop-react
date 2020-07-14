import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';

import EditOrderList from './EditOrderList';
import Order from './Order';
import Loading from '../Loading/Loading'


export default function OrderList() {
  const alert = useAlert();

  const [orders, setOrders] = useState(null);
  const [order, setOrder] = useState(null);
  const [show, setShow] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState([]);

  const fetchData = async () => {
    const Url = 'https://vue-course-api.hexschool.io/api/jay/admin/orders';
    const response = await fetch(Url, {
      credentials: 'include',
    });
    const data = await response.json();
    if (data.success) {
      setOrders(data.orders);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showDetail = num => {
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

  const handleChange = event => {
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

  const openEditOrder = item => {
    setShow(true);
    setOrder(item);
  }

  const editOrderList = async () => {
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

  const handleCancel = () => {
    setShow(false);
    setOrder(null);
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <h2>OrderList</h2>
      {
        show && <EditOrderList order={order} handleChange={handleChange} editOrderList={editOrderList} handleCancel={handleCancel} />
      }

      {
        orders.map((order, i) => {
          return <Order key={i} order={order} showDetail={showDetail} openDetail={openDetail} id={id} openEditOrder={openEditOrder} />
        })
      }
    </div>
  )
}