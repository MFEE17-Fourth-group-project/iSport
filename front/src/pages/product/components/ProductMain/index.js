import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../../utils/config';

//component import
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';

//fake data
import ProductList from '../../data/ProductList';
import UserLike from '../../data/UserLike';

function ProductMain(props) {
    console.log(API_URL);
    const [search, setSearch] = useState('');
    let handelData = ProductList;
    console.log(handelData);
    const doSearch = () => {
        let handelData = [];
        handelData = ProductList.filter((item) => {
            return item.name.indexOf(search) !== -1;
        });
        console.log(handelData);
        console.log(search);
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
                />
                <section className="my-5 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                    {handelData.map((item) => {
                        return (
                            <ProductCard
                                key={item.id}
                                productName={item.name}
                                category={item.category}
                                brand={item.brand}
                                photo={item.photo}
                                price={item.price}
                                sale={item.sale}
                                like={isLike(item.id)}
                            />
                        );
                    })}
                </section>
            </main>
        </>
    );
}

export default ProductMain;
