import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Nav.scss'

export default function Nav({ auth, setAuth }) {
    let history = useHistory();
    const path = useLocation().pathname;
    const handleLogout = async () => {
        const Url = 'https://vue-course-api.hexschool.io/logout';
        const response = await fetch(Url, { method: "POST" });
        const result = await response.json();
        if (result.success) {
            setAuth(false);
            history.replace('/home');
        }
    }

    return (
        <header>
            <h1 className='header-title'>Shop-react</h1>
            <nav>
                <ul className='nav-navbar'>
                    {
                        auth ? (
                            <>
                                <li className='navbar-item'>
                                    <Link
                                        to='/products'
                                        className={path === '/products' ? 'active' : ''}>
                                        Products
                                    </Link>
                                </li>
                                <li className='navbar-item'>
                                    <Link
                                        to='/orderList'
                                        className={path === '/orderList' ? 'active' : ''}>
                                        OrderList
                                    </Link>
                                </li>
                                <li className='navbar-item'>
                                    <Link
                                        to='/coupon'
                                        className={path === '/coupon' ? 'active' : ''}>
                                        Coupon
                                    </Link>
                                </li>
                            </>
                        ) : (
                                <>
                                    <li className='navbar-item'>
                                        <Link
                                            to='/home'
                                            className={path === '/home' ? 'active' : ''}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='navbar-item'>
                                        <Link
                                            to='/about'
                                            className={path === '/about' ? 'active' : ''}>
                                            About
                                        </Link>
                                    </li>
                                </>
                            )
                    }
                    <li className='navbar-item'>
                        <Link
                            to='/shop'
                            className={path === '/shop' ? 'active' : ''}>
                            Shop
                        </Link>
                    </li>
                    {
                        !auth && (<li className='navbar-item'>
                            <Link
                                to='/shopcart'
                                className={path === '/shopcart' ? 'active' : ''}>
                                ShopCart
                        </Link>
                        </li>)
                    }

                </ul>
            </nav>
            {
                auth ? <Link to='/home' onClick={handleLogout}>LogOut</Link> : <Link to='/login' className={path === '/login' ? 'active' : ''}>Login</Link>
            }
        </header>
    )
}