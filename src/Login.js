import React, { useState } from 'react'

export default function Login({ handlePath, setLogin }) {

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
      handlePath('products');
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
      <button onClick={() => handlePath("/")}>Back</button>
    </form>
  )
}