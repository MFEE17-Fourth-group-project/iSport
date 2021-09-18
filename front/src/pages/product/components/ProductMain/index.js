import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

//component import
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';

//fake data
// import ProductList from '../../data/ProductList';
import UserLike from '../../data/UserLike';

function ProductMain(props) {
    const { url, refresh } = props;

    const [data, setData] = useState(null);
    const [categoryProduct, setCategoryProduct] = useState(null);
    const [displayProducts, setDisplayProducts] = useState(null);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState({
        minPrice: 0,
        maxPrice: 999999,
        brand: 0,
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProductList = async () => {
            try {
                let response = await axios.get(`${API_URL}/products/all`);
                setData(response.data);
            } catch (e) {
                setError(e.message);
            }
        };
        getProductList();
    }, []);

    //change category
    useEffect(() => {
        console.log(url);
        const toCategory = () => {
            if (data && url !== 0) {
                let newData = data.filter((item) => {
                    return item.product_category_id === url;
                });
                setCategoryProduct(newData);
            } else {
                setCategoryProduct(data);
            }
        };
        toCategory();
    }, [url, data, refresh]);

    //keyword search
    const doSearch = () => {
        let handelData = categoryProduct.filter((item) => {
            return item.product_name.indexOf(search) !== -1;
        });
        setCategoryProduct(handelData);
    };

    //TODO:filter function
    //filter
    const doFilter = () => {
        let handelData = handelData.filter((item) => {
            return item.name.indexOf(search) !== -1;
        });
    };

    //TODO:sort function

    //TODO:render display products
    useEffect(() => {
        console.log(categoryProduct);
    }, [categoryProduct]);

    /**
     *
     * @param {string} id 商品的id
     * @returns {boolean}
     */
    const isLike = (id) => {
        return UserLike.includes(id);
    };

    return (
        <>
            <main className="px-3 max-w-screen-xl my-0 mx-auto">
                <ProductFilter
                    setSearch={setSearch}
                    search={search}
                    doSearch={doSearch}
                    setFilter={setFilter}
                    filter={filter}
                    doFilter={doFilter}
                />
                <section className="my-5 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                    {categoryProduct &&
                        categoryProduct.map((item) => {
                            return (
                                <ProductCard
                                    key={item.product_id}
                                    productName={item.product_name}
                                    category={item.product_category_name}
                                    brand={item.brand_name}
                                    photo={item.img_name}
                                    price={item.product_price}
                                    sale={item.total_sale}
                                    like={isLike(item.product_id)}
                                />
                            );
                        })}
                </section>
            </main>
        </>
    );
}

export default ProductMain;
