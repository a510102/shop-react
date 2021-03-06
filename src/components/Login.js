import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { useInputValue } from '../hooks/useInputValue';

import Loading from './Loading/Loading';

export default function Login() {
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { ...username } = useInputValue('');
  const { ...password } = useInputValue('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    const user = {
      username: username.value,
      password: password.value
    }

    if (username.value && password.value) {
      setLoading(true);
      const Url = 'https://vue-course-api.hexschool.io/admin/signin';
      const response = await fetch(Url, {
        method: "POST",
        body: JSON.stringify(user),
        credentials: 'include',
        headers: { 'content-type': 'application/json' }
      });
      const result = await response.json();
      const { success, message } = result;
      if (success) {
        setLoading(false);
        dispatch({ type: 'LOGO_IN' });
        history.push('/shop-react/products');
      } else {
        setLoading(false);
        history.replace('/shop-react/login');
        alert.error(message);
      }
    } else if (!username.value && password.value) {
      alert.show('請輸入E-mail');
    } else if (!password.value && username.value) {
      alert.show('請輸入Password')
    } else {
      alert.show('請輸入Email 跟Password')
    }

  }

  if (loading) {
    return <Loading />
  }


  return (
    <div className='w-full sm:max-w-xs mx-auto mt-4 h-screen'>
      <form onSubmit={handleLogin} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className="my-1 text-4xl text-teal-500">LogoIn</h2>
        <section className='my-8'>
          <label className='block text-teal-500 text-sm font-bold mb-2'> Email :</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="email"
            placeholder='email'
            name='username'
            {...username} />
        </section>
        <section className='mb-8'>
          <label className='block text-teal-500 text-sm font-bold mb-2'> Password :</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            type="current-password"
            placeholder='password'
            name="password"
            {...password} />
        </section>
        <section className='flex items-center justify-between'>
          <button className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Submit</button>
          <button className='inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800' onClick={() => { history.push('/shop-react/home') }}>Back</button>
        </section>
      </form>
    </div>

  )
}