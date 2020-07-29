import React, { useState, useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { ShopContext } from '../../contexts/shopCartContext/ShopCartContext';

export default function Nav() {
    let history = useHistory();
    const path = useLocation().pathname;
    const { carts, user, userDispatch } = useContext(ShopContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        const Url = 'https://vue-course-api.hexschool.io/logout';
        const response = await fetch(Url, { method: "POST" });
        const result = await response.json();
        if (result.success) {
            userDispatch({ type: 'LOGO_OUT' })
            history.replace('/shop-react/home');
        }
    }
    const active = {
        nav: 'p-3 relative block mt-4 lg:inline-block lg:mt-0 text-white mr-4 border rounded-lg',
        logo: "inline-block text-sm px-4 py-2 leading-none border rounded border-white border-transparent text-teal-500 bg-white mt-4 lg:mt-0",
        navbar: "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    };
    const normal = {
        nav: 'p-3 relative block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4',
        logo: "inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",
        navbar: "w-full hidden flex-grow lg:flex lg:items-center lg:w-auto"
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-400 p-6 shadow-md mb-2 rounded rounded-t-none">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Shop-react</span>
            </div>
            <div className="block lg:hidden" onClick={() => { setIsOpen(!isOpen) }}>
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className={isOpen ? active.navbar : normal.navbar}>
                <div className="text-sm lg:flex-grow">
                    {
                        user.auth ? (
                            <>
                                <Link
                                    to='/shop-react/products'
                                    className={path === '/shop-react/products' ? active.nav : normal.nav}>
                                    Products
                                    </Link>
                                <Link
                                    to='/shop-react/orderList'
                                    className={path === '/shop-react/orderList' ? active.nav : normal.nav}>
                                    OrderList
                                    </Link>

                                <Link
                                    to='/shop-react/coupon'
                                    className={path === '/shop-react/coupon' ? active.nav : normal.nav}>
                                    Coupon
                                    </Link>
                            </>
                        ) : (
                                <>
                                    <Link
                                        to='/shop-react/home'
                                        className={path === '/shop-react/home' ? active.nav : normal.nav}>
                                        Home
                                        </Link>
                                    <Link
                                        to='/shop-react/about'
                                        className={path === '/shop-react/about' ? active.nav : normal.nav}>
                                        About
                                        </Link>
                                </>
                            )
                    }
                    <Link
                        to='/shop-react/shop'
                        className={path === '/shop-react/shop' ? active.nav : normal.nav}>
                        Shop
                        </Link>
                    {
                        !user.auth && (
                            <Link
                                to='/shop-react/shopcart'
                                className={path === '/shop-react/shopcart' ? active.nav : normal.nav}>
                                ShopCart
                                {carts.carts && carts.carts.length > 0 && <span className='absolute  bottom-0 right-0 w-5 h-5 flex items-center justify-center text-red-500 border border-red-500 rounded-full'>{carts.carts.length}</span>}
                            </Link>
                        )
                    }
                </div>
                <div>
                    {
                        user.auth ? (
                            <Link to='/shop-react/home' onClick={handleLogout} className={normal.logo}>LogOut</Link>) : (
                                <Link to='/shop-react/login' className={path === '/shop-react/login' ? active.logo : normal.logo}>Login</Link>)
                    }
                </div>
            </div>
        </nav>
    )
}