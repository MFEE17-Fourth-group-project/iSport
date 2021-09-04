import React, { useState, useEffect } from 'react';

import ProductNav from './components/ProductNav';
import ProductMain from './components/ProductMain';

import productHeader from '../../images/product-header.png';
import { FaAngleUp } from 'react-icons/fa';

export default function Product() {
    return (
        <>
            <div className=" w-8 h-8 xl:w-14 xl:h-14 rounded-full bg-yellow-400 text-gray-900 flex justify-center items-center cursor-pointer fixed right-5 bottom-16 z-50">
                <FaAngleUp className="text-3xl sm:text-4xl  xl:text-5xl" />
            </div>
            <header className="relative w-full h-1/3 xl:h-112 overflow-hidden">
                <div className="text-white absolute w-1/2 top-1/2 left-5 sm:left-14 xl:left-32 transform -translate-y-1/2">
                    <p className="text-sm sm:text-base xl:text-2xl break-all w-full leading-normal">
                        iSport商城
                    </p>
                    <h1 className="text-lg sm:text-3xl xl:text-5xl break-all w-full leading-normal">
                        多樣實用運動相關商品等您來挑選
                    </h1>
                </div>
                <figure className="h-full w-full ">
                    <img
                        src={productHeader}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </figure>
            </header>
            <ProductNav />
            <ProductMain />
        </>
    );
}
