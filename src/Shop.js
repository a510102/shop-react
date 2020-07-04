import React, { useState, useEffect } from 'react'
import Product from './Product';



export default function Shop() {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        const Url = 'https://vue-course-api.hexschool.io/api/jay/products';
        const response = await fetch(Url);
        const datas = await response.json();
        setProducts(datas.products);
        setLoading(false);
    }

    if (loading) {
        return <div>Loading ....</div>
    }

    if (!products) {
        return <div> error 404</div>
    }

    return (
        <ul className="productlist">{
            products.filter(data => data.is_enabled === 1).map(data => <Product data={data} key={data.id} />)
        }</ul>
    )
}