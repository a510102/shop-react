import React, { useState, useEffect, useContext } from 'react'

import ShopProduct from './ShopProduct';
import Loading from '../Loading/Loading';
import Pages from '../Pages';
import { ShopContext } from '../../contexts/shopCartContext/ShopCartContext';

export default function Shop() {
    const { products, productDispatch } = useContext(ShopContext);
    const [loading, setLoading] = useState(true);
    const [dePage, setDePage] = useState(1)
    const [pages, setPages] = useState(null)
    const [categ, setCateg] = useState('all');

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
            productDispatch({ type: "UPDATE_PRODUCT", product: products });
            setLoading(false);
            setPages(pagination.total_pages)
        }
    }

    function handleCategory(items, text) {
        if (text === 'all') {
            return items
        } else {
            return items.filter(item => item.category === text)
        }
    }

    if (loading) {
        return <Loading />
    }

    if (!products) {
        return <div> error 404</div>
    }

    const style = {
        active: 'mr-2 bg-white w-16 text-teal-600 text-white font-bold py-1 px-2 rounded-full',
        normal: 'mr-2 bg-teal-500 w-16 hover:bg-teal-600 text-white font-bold py-1 px-2 rounded-full',
    }
    const filterProducts = products.filter(data => data.is_enabled === 1);
    const categorys = products.map(product => product.category).filter((product, i, a) => a.indexOf(product) === i);
    return (
        <>
            <div>
                <button
                    onClick={() => setCateg('all')}
                    className={categ === 'all' ? style.active : style.normal}>全部</button>
                {categorys && categorys.map((category, i) =>
                    <button
                        onClick={() => setCateg(category)}
                        key={i}
                        className={categ === category ? style.active : style.normal}>{category}</button>
                )}
            </div>
            <ul className="container flex my-2 flex-wrap">
                {
                    filterProducts.length > 0 ? handleCategory(filterProducts, categ).map(data =>
                        <ShopProduct data={data} key={data.id} />
                    ) : (
                            <div>現在還沒有商品喲~</div>)
                }
                <Pages dePage={dePage} setDePage={setDePage} num={pages} />
            </ul>
        </>
    )
}