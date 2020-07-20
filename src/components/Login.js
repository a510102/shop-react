import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Loading from './Loading/Loading';

export default function Login({ setAuth }) {
  const history = useHistory();
  const alert = useAlert();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);


  function handleChange(event) {
    const { name, value } = event.target;
    setUser(preUser => {
      return {
        ...preUser,
        [name]: value
      }
    });
  }

  async function handleLogin(event) {
    event.preventDefault();

    const { username, password } = user;
    if (username && password) {
      setLoading(true);
      const Url = 'https://vue-course-api.hexschool.io/admin/signin';
      const response = await fetch(Url, {
        method: "POST",
        body: JSON.stringify(user),
        credentials: 'include',
        headers: { 'content-type': 'application/json' }
      });
      const result = await response.json();
      if (result.success) {
        setLoading(false);
        setAuth(true);
        history.push('/products');
      }
    } else if (!username && password) {
      alert.show('請輸入E-mail');
    } else if (!password && username) {
      alert.show('請輸入Password')
    } else {
      alert.show('請輸入Email 跟Password')
    }

  }

  if (loading) {
    return <Loading />
  }


  return (
    <div className='w-full sm:max-w-xs mx-auto mt-4'>
      <form onSubmit={handleLogin} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className="my-2 text-teal-500">LogoIn</h2>
        <div className='my-4'>
          <label className='block text-teal-500 text-sm font-bold mb-2'> Email :
        <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="email"
              placeholder='email'
              name='username'
              onChange={handleChange}
              value={user.username} />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-teal-500 text-sm font-bold mb-2'> Password :
        <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type="current-password"
              placeholder='password'
              name="password"
              onChange={handleChange}
              value={user.password} />
          </label>
        </div>
        <div className='flex items-center justify-between'>
          <button className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Submit</button>
          <button className='inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800' onClick={() => { history.push('/home') }}>Back</button>
        </div>
      </form>
    </div>

  )
}