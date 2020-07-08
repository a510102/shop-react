import React from 'react'

export default function Nav({ handlePath, setLogin, login }) {

    const handleLogout = async () => {
        const Url = 'https://vue-course-api.hexschool.io/logout';
        const response = await fetch(Url, { method: "POST" });
        const result = await response.json();
        if (result.success) {
            handlePath('/')
            setLogin(false);
        }
    }

    return (
        <header>
            <h1>Shop-react</h1>
            <nav>
                <a href="#" onClick={() => handlePath('shop')}>Shop</a>
                {
                    login ? (
                        <>
                            <a href="#" onClick={() => handlePath('products')}>Products</a>
                            <a href="#" onClick={() => handlePath('orderlist')}>OrderList</a>
                            <a href="#" onClick={() => handlePath('coupon')}>Coupon</a>
                        </>
                    ) : (
                            <>
                                <a href="#" onClick={() => handlePath('about')}>About</a>
                                <a href="#" onClick={() => handlePath('connectme')}>Connect Me</a>
                            </>
                        )
                }
            </nav>
            {
                login ? <a href="#" onClick={handleLogout}>Logout</a> : <a href="#" onClick={() => handlePath('login')}>Login</a>
            }

        </header>
    )
}