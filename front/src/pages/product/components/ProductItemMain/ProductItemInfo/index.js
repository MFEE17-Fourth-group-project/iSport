import React, { useState, useEffect } from 'react';

import ProductType from './ProductType';

import { FaPlus, FaMinus, FaAngleLeft, FaHeart, FaShare } from 'react-icons/fa';

function ProductItemInfo() {
    return (
        <>
            <div className="sm:w-1/2 py-5 flex-grow flex flex-col">
                {/* 連結 */}
                <div className=" mb-0 lg:mb-7  text-xs lg:text-sm flex justify-between ">
                    <div className="flex items-center cursor-pointer">
                        <FaAngleLeft className="text-yellow-400" />
                        <span>回 &nbsp; </span>
                        <span className="text-yellow-400">運動服飾</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <FaShare className="text-yellow-400" />
                        &nbsp;
                        <p>分享</p>
                    </div>
                </div>
                <div className="mb-2 lg:mb-8 ">
                    <h1 className="py-1 lg:py-3 font-bold text-xl sm:text-2xl xl:text-3xl">
                        女款路跑背心
                    </h1>
                    <div className="text-xs lg:text-sm">
                        品名：
                        <span className="text-yellow-400 cursor-pointer">
                            MIZUNO 美津濃
                        </span>
                        ｜ 總銷售量：
                        <span>1243</span>
                    </div>
                </div>
                <div className="flex-grow">
                    <h2 className="py-2 text-lg lg:text-xl font-bold">規格</h2>
                    <ProductType />
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
                            貨號：
                            <span className="text-gray-400">10011031</span>
                        </div>
                        <div>
                            庫存：<span>134</span>
                        </div>
                    </div>
                    <div className="my-2 py-2 border-b-2 border-yellow-400 flex justify-between">
                        <div className="text-yellow-400 text-lg">
                            NT$ <span>350</span>
                        </div>
                        <div className="flex py-1 rounded-md justify-between items-center shadow-emboss">
                            <button type="button" className="px-2">
                                <FaPlus />
                            </button>
                            <input
                                type="text"
                                className=" w-20 xl:w-auto bg-transparent outline-none text-center"
                                value={1}
                            />
                            <button type="button" className="px-2">
                                <FaMinus />
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
