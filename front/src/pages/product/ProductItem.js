import React from 'react';
import product from '../../images/product/1002-3.png';

function ProductItem() {
    return (
        <>
            <main className="text-white text-opacity-85 max-w-screen-xl my-0 mx-auto">
                {/* 圖片與資訊 */}
                <section className="flex">
                    {/* 圖片 */}
                    <div className="flex w-auto mr-5">
                        {/* 小圖 */}
                        <div className="h-500 overflow-y-hidden mr-2 relative">
                            <div className="w-full h-6 bg-gradient-to-b from-gray-800 absolute top-0 left-0">
                                <i></i>
                            </div>
                            <div className="w-full h-6 bg-gradient-to-t from-gray-800 absolute bottom-0 left-0">
                                <i></i>
                            </div>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                        </div>
                        {/* 大圖 */}
                        <div className="w-500 rounded-lg overflow-y-hidden">
                            <img
                                src={product}
                                alt="product"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    {/* 資訊與加入購物車 */}
                    <div className="py-5 flex-grow flex flex-col">
                        {/* 連結 */}
                        <div className="mb-10 text-sm flex justify-between ">
                            <div>
                                <i></i> 回
                                <span className="text-yellow-400">
                                    運動服飾
                                </span>
                            </div>
                            <div>
                                <i></i>分享
                            </div>
                        </div>
                        <div className="mb-8 ">
                            <h1 className="py-3 font-bold text-3xl">
                                商品名稱
                            </h1>
                            <div className="text-sm">
                                品名：
                                <span className="text-yellow-400">美金農</span>
                                ｜ 總銷售量：
                                <span>1243</span>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h2 className="py-2 text-xl font-bold">規格</h2>
                            <div className="py-1 flex items-center ">
                                顏色：
                                <div className="mx-1 px-3 py-0 rounded-full bg-yellow-400 text-gray-900 cursor-pointer">
                                    粉色
                                </div>
                                <div className="mx-1 px-3 py-0 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-transparent cursor-pointer">
                                    灰色
                                </div>
                                <div className="mx-1 px-3 py-0 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-transparent cursor-pointer">
                                    黑色
                                </div>
                            </div>
                            <div className="py-1 flex">
                                尺寸：
                                <div className="mx-1 px-3 py-0 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-transparent cursor-pointer">
                                    S
                                </div>
                                <div className="mx-1 px-3 py-0 rounded-full bg-yellow-400 text-gray-900 cursor-pointer">
                                    M
                                </div>
                                <div className="mx-1 px-3 py-0 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-transparent cursor-pointer">
                                    L
                                </div>
                            </div>
                            <div className="py-1 flex justify-between">
                                <div>
                                    貨號：<span>10011031</span>
                                </div>
                                <div>
                                    庫存：<span>134</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    $ <span>350</span>
                                </div>
                                <div>
                                    <button type="button">+</button>
                                    <input type="text" />
                                    <button type="button">-</button>
                                </div>
                            </div>
                            <div className="text-right">
                                小計 <span>350</span>
                            </div>
                        </div>
                        <div className="flex">
                            <button className="btn-yellow mr-3 w-2/3  ">
                                加入購物車
                            </button>
                            <button className="btn-yellow flex-grow ">
                                收藏
                            </button>
                        </div>
                    </div>
                </section>
                {/* 商品簡介 */}
                <section></section>
                {/* 你可能會喜歡 */}
                <section></section>
            </main>
        </>
    );
}

export default ProductItem;
