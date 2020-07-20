import React, { useState, useEffect } from 'react'

import ShopProduct from './ShopProduct';
import Loading from '../Loading/Loading';
import Pages from '../Pages';

export default function Shop() {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dePage, setDePage] = useState(1)
    const [pages, setPages] = useState(null)

    useEffect(() => {
        fetchProducts(dePage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dePage])

    async function fetchProducts(page) {
        const Url = `https://vue-course-api.hexschool.io/api/jay/products?page=${page}`;
        const response = await fetch(Url);
        const datas = await response.json();
        const { success, products, pagination } = datas;
        if (success) {
            setProducts(products);
            setLoading(false);
            setPages(pagination.total_pages)
        }

    }

    if (loading) {
        return <Loading />
    }

    if (!products) {
        return <div> error 404</div>
    }
    const filterProducts = products.filter(data => data.is_enabled === 1);
    return (
        <ul className="flex my-2 flex-wrap">
            {
                filterProducts.length > 0 ? filterProducts.map(data => <ShopProduct data={data} key={data.id} />) : (
                    <div>現在還沒有商品喲~</div>)
            }
            <Pages dePage={dePage} setDePage={setDePage} num={pages} />
        </ul>
    )
}