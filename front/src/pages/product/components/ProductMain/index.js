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
    const { url } = props;
    console.log(url);
    // console.log(API_URL);
    const [data, setData] = useState(null);
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
    let handelData = data;
    console.log(handelData);

    //keyword search
    const doSearch = () => {
        let handelData = [];
        handelData = data.filter((item) => {
            return item.name.indexOf(search) !== -1;
        });
        // console.log(handelData);
        // console.log(search);
    };

    //filter
    const doFilter = () => {
        handelData = handelData.filter((item) => {
            return item.name.indexOf(search) !== -1;
        });
    };

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
                    {handelData &&
                        handelData.map((item) => {
                            return (
                                <ProductCard
                                    key={item.prduct_id}
                                    productName={item.product_name}
                                    category={item.product_category_name}
                                    brand={item.brand_name}
                                    photo={item.img_name}
                                    price={item.product_price}
                                    sale={item.total_sale}
                                    like={isLike(item.prduct_id)}
                                />
                            );
                        })}
                </section>
            </main>
        </>
    );
}

export default ProductMain;
