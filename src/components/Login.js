import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Login({ setLogin }) {
  const history = useHistory();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

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
    const Url = 'https://vue-course-api.hexschool.io/admin/signin';
    const response = await fetch(Url, {
      method: "POST",
      body: JSON.stringify(user),
      credentials: 'include',
      headers: { 'content-type': 'application/json' }
    });
    const result = await response.json();
    if (result.success) {
      setLogin(true);
      history.push('/products');
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder='email'
        name='username'
        onChange={handleChange}
        value={user.username} />
      <input
        type="current-password"
        placeholder='password'
        name="password"
        onChange={handleChange}
        value={user.password} />
      <button type='submit'>Submit</button>
      <button>Back</button>
    </form>
  )
}