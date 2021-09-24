import React, { useState, useEffect } from 'react';

import ProductType from './ProductType';

import { FaPlus, FaMinus, FaAngleLeft, FaHeart, FaShare } from 'react-icons/fa';

function ProductItemInfo(props) {
    const priceTest = 350;
    const stockTest = 12;
    const { productInfo, typeValue } = props;
    const [qty, setQty] = useState(1);
    const [info, setInfo] = useState({
        category: '',
        brand: '',
        productName: '',
        productId: '',
        intro: '',
        totalSale: '',
    });

    useEffect(() => {
        // console.log(productInfo);
        if (productInfo) {
            setInfo({
                category: productInfo.product_category_name,
                brand: productInfo.brand_name,
                productName: productInfo.product_name,
                productId: productInfo.product_id,
                intro: productInfo.product_intro,
                totalSale: productInfo.total_sale,
            });
        }
        // console.log(info);
    }, [productInfo]);
    return (
        <>
            <div className="sm:w-1/2 py-5 flex-grow flex flex-col">
                {/* 連結 */}
                <div className=" mb-0 lg:mb-7  text-xs lg:text-sm flex justify-between ">
                    <div className="flex items-center cursor-pointer">
                        <FaAngleLeft className="text-yellow-400" />
                        <span>回 &nbsp; </span>
                        <span className="text-yellow-400">{info.category}</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <FaShare className="text-yellow-400" />
                        &nbsp;
                        <p>分享</p>
                    </div>
                </div>
                <div className="mb-2 lg:mb-8 ">
                    <h1 className="py-1 lg:py-3 font-bold text-xl sm:text-2xl xl:text-2xl">
                        {info.productName}
                    </h1>
                    <div className="text-xs lg:text-sm">
                        品牌：
                        <span className="text-yellow-400 cursor-pointer">
                            {info.brand}
                        </span>
                        ｜ 總銷售量：
                        <span>{info.totalSale}</span>
                    </div>
                </div>
                <div className="flex-grow">
                    <h2 className="py-2 text-lg lg:text-xl font-bold">規格</h2>
                    {typeValue &&
                        typeValue.map((item) => {
                            return (
                                <ProductType
                                    key={item.id}
                                    typeName={item.type_name}
                                    typeValue={item.typeValue}
                                />
                            );
                        })}

                    <div className="py-1 flex justify-between">
                        <div>
                            貨號：
                            <span className="text-gray-400">10011031</span>
                        </div>
                        <div>
                            庫存：<span>{stockTest}</span>
                        </div>
                    </div>
                    <div className="my-2 py-2 border-b-2 border-yellow-400 flex justify-between">
                        <div className="text-yellow-400 text-lg">
                            NT$ <span>{priceTest}</span>
                        </div>
                        <div className="flex py-1 rounded-md justify-between items-center shadow-emboss">
                            <button
                                onClick={() => {
                                    if (qty < stockTest) setQty(qty + 1);
                                }}
                                type="button"
                                className="px-2"
                            >
                                <FaPlus className="hover:text-yellow-400" />
                            </button>
                            <input
                                type="text"
                                className=" w-20 xl:w-auto bg-transparent outline-none text-center"
                                value={qty}
                            />
                            <button
                                onClick={() => {
                                    if (qty > 1) setQty(qty - 1);
                                }}
                                type="button"
                                className="px-2"
                            >
                                <FaMinus className="hover:text-yellow-400" />
                            </button>
                        </div>
                    </div>
                    <div className="text-right text-yellow-400 text-lg">
                        小計 NT$ <span>350</span>
                    </div>
                </div>
                <div className="flex">
                    <button className="btn-yellow mr-3 w-2/3  ">
                        加入購物車
                    </button>
                    <button className="border border-red-300 rounded-full text-red-300 flex-grow flex justify-center items-center">
                        <FaHeart />
                        <p className="pl-2">收藏</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductItemInfo;
