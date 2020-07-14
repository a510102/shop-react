import React, { useState, useEffect } from 'react'
import ShopProduct from './ShopProduct';
import Loading from '../Loading/Loading';
import './shop.scss';



export default function Shop() {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchProducts = async () => {
        const Url = 'https://vue-course-api.hexschool.io/api/jay/products';
        const response = await fetch(Url);
        const datas = await response.json();
        setProducts(datas.products);
        setLoading(false);
    }

    if (loading) {
        return <Loading />
    }

    if (!products) {
        return <div> error 404</div>
    }
    const filterProducts = products.filter(data => data.is_enabled === 1);
    return (
        <ul className="productlist">
            {
                filterProducts.length > 0 ? filterProducts.map(data => <ShopProduct data={data} key={data.id} />) : (
                    <div>現在還沒有商品喲~</div>)
            }
        </ul>
    )
}