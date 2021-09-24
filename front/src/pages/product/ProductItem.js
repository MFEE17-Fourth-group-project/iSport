import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import ProductItemMain from './components/ProductItemMain/';

function ProductItem(props) {
    // console.log(props);

    const [productId, setProductId] = useState(null);

    useEffect(() => {
        //使用網址上的id和伺服器要資料
        const paramsString = props.location.search;
        const searchParams = new URLSearchParams(paramsString);

        setProductId(searchParams.get('id'));

        // const newProduct = data.find((v) => {
        //     return v.id === id;
        // });

        // if (newProduct) setProduct(newProduct);
    }, []);

    return (
        <>
            <nav className="mt-2 text-white bg-gray-900 flex justify-center text-sm xl:text-base">
                <div className="flex-1 sm:flex-initial w-36  text-center py-3">
                    所有商品
                </div>
                <div className="flex-1 sm:flex-initial w-36 text-center py-3">
                    運動服飾
                </div>
                <div className="flex-1 sm:flex-initial w-36 text-center py-3">
                    運動鞋類
                </div>
                <div className="flex-1 sm:flex-initial w-36 text-center py-3">
                    健身器材
                </div>
                <div className="flex-1 sm:flex-initial w-36 text-center py-3">
                    營養補給
                </div>
            </nav>
            <ProductItemMain productId={productId} />
        </>
    );
}

export default withRouter(ProductItem);
