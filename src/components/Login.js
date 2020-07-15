import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Loading from './Loading/Loading';
import './Logoin.scss'

export default function Login({ setAuth }) {
  const history = useHistory();
  const alert = useAlert();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);


  const handleChange = event => {
    const { name, value } = event.target;
    setUser(preUser => {
      return {
        ...preUser,
        [name]: value
      }
    });
  }

  const handleLogin = async (event) => {
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
    <form onSubmit={handleLogin}>
      <h2>LogoIn</h2>
      <label> Email :
        <input
          type="email"
          placeholder='email'
          name='username'
          onChange={handleChange}
          value={user.username} />
      </label>
      <label> Password :
        <input
          type="current-password"
          placeholder='password'
          name="password"
          onChange={handleChange}
          value={user.password} />
      </label>
      <div className='form-btn'>
        <button type='submit'>Submit</button>
        <button onClick={() => { history.push('/home') }}>Back</button>
      </div>
    </form>
  )
}