import React from 'react';

import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';

import ProductList from '../data/ProductList';
import UserLike from '../data/UserLike';

function ProductMain() {
    // console.log(UserLike);

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
                <ProductFilter />
                <section className="my-5 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                    {ProductList.map((item) => {
                        return (
                            <ProductCard
                                key={item.id}
                                productName={item.name}
                                category={item.category}
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
