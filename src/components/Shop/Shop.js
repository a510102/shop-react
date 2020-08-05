import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import ShopProduct from './ShopProduct';
import Loading from '../Loading/Loading';
import Pages from '../Pages';

const Shop = () => {
    const dispatch = useDispatch();
    const products = useSelector(store => store.productsState.products);
    const [loading, setLoading] = useState(true);
    const [dePage, setDePage] = useState(1)
    const [pages, setPages] = useState(null)
    const [categ, setCateg] = useState('all');

    useEffect(() => {
        dispatch(fetchProducts(dePage));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dePage])

    function fetchProducts(page) {
        return dispatch => {
            const Url = `https://vue-course-api.hexschool.io/api/jay/products?page=${page}`;
            fetch(Url)
                .then(res => res.json())
                .then(data => {
                    const { products, pagination } = data;
                    dispatch({ type: "UPDATE_PRODUCT", product: products });
                    setPages(pagination.total_pages);
                    setLoading(false);
                }).catch(error => console.log(error));
        };
    }

    function handleCategory(items, text) {
        if (text === 'all') {
            return items
        } else {
            return items.filter(item => item.category === text)
        }
    }

    const style = {
        active: 'm-2 mx-auto bg-white w-16 text-teal-600 text-white font-bold py-1 px-2 rounded-full',
        normal: 'm-2 mx-auto bg-teal-500 w-16 hover:bg-teal-600 text-white font-bold py-1 px-2 rounded-full',
    }
    const filterProducts = products.filter(data => data.is_enabled === 1);
    const categorys = products.map(product => product.category).filter((product, i, a) => a.indexOf(product) === i);

    if (loading) {
        return <Loading />
    }

    if (!products) {
        return <div> error 404</div>
    }

    return (
        <div className='container mx-auto h-auto min-h-screen'>
            <div className='grid grid-cols-3 sm:grid-cols-6 gap-2 lg:gap-4'>
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
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 p-2 md:p-0">
                {
                    filterProducts.length > 0 ? handleCategory(filterProducts, categ).map(data =>
                        <ShopProduct data={data} key={data.id} />
                    ) : (
                            <div>現在還沒有商品喲~</div>)
                }
                <Pages dePage={dePage} setDePage={setDePage} num={pages} />
            </ul>
        </div>
    )
}

export default Shop;