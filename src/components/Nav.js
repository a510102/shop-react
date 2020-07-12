import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Nav.scss'

export default function Nav({ login, setLogin }) {
    let history = useHistory();
    const handleLogout = async () => {
        const Url = 'https://vue-course-api.hexschool.io/logout';
        const response = await fetch(Url, { method: "POST" });
        const result = await response.json();
        if (result.success) {
            setLogin(false);
            history.replace('/home');
        }
    }

    return (
        <header>
            <h1>Shop-react</h1>
            <nav>
                <ul>
                    <li><Link to='/shop'>Shop</Link></li>
                    {
                        login ? (
                            <>
                                <li><Link to='/products'>Products</Link></li>
                                <li><Link to='/orderList'>OrderList</Link></li>
                                <li><Link to='/coupon'>Coupon</Link></li>
                            </>
                        ) : (
                                <>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/home'>Home</Link></li>
                                </>
                            )
                    }
                </ul>
            </nav>
            {
                login ? <Link to='/' onClick={handleLogout}>LogOut</Link> : <Link to='login'>Login</Link>
            }
        </header>
    )
}