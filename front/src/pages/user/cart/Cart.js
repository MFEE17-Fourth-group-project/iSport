import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './components/CartItem';
import { FaArrowRight } from 'react-icons/fa';
import Aside from '../../../global/Aside';

function Cart(props) {
    const showNoItemRef = useRef('');
    const hideItemRef = useRef('');

    const getCartFromLocalStorage = () => {
        const itemInLocalStorage = localStorage.getItem('cart');

        if (!itemInLocalStorage) {
            const showNoItem = showNoItemRef.current;
            const hideItem = hideItemRef.current;
            showNoItem.classList.toggle('hidden');
            hideItem.classList.toggle('hidden');
        }

        // FIXME: 預設 localStorage 資料，之後刪掉
        localStorage.setItem(
            'cart',
            JSON.stringify([
                {
                    id: 1,
                    product_id: 43,
                    sku_code: 10062011,
                    qty: 1,
                },
                {
                    id: 2,
                    product_id: 5,
                    sku_code: 10011015,
                    qty: 2,
                },
                {
                    id: 3,
                    product_id: 24,
                    sku_code: 30013010,
                    qty: 1,
                },
            ])
        );

        // 初始化：一開始開啟這個網站時，取得 localStorage 中 cart 資料，如果 localStorage 中沒有 cart 時，存一個空的 []。
        const newCart = localStorage.getItem('cart') || '[]';

        console.log('newCart', JSON.parse(newCart));
    };
    // componentDidMount 一進到此頁面，從 localStorage 得到 cart 資料
    useEffect(() => {
        getCartFromLocalStorage();
    }, []);

    return (
        <>
            <main className="sm:max-w-screen-xl w-full mx-auto px-2.5 py-5 flex lg:justify-start border-red-300">
                <Aside />
                <article className="w-full flex-grow flex-col">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title rounded-t-xl">
                        購物車
                    </div>
                    <div
                        ref={showNoItemRef}
                        className="h-screen text-white text-opacity-85 text-xl text-center pt-14 hidden bg-gray-900 rounded-b-xl"
                    >
                        您的購物車目前沒有商品！！
                    </div>
                    <div
                        ref={hideItemRef}
                        className="text-white lg:px-10 px-4 py-6 bg-gray-900 rounded-b-xl"
                    >
                        {/* 購物車商品卡片 */}
                        <CartItem />

                        <div className="pt-2.5 mt-2.5 mb-9 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            {/* <p className="text-lg font-bold">Total :</p>
                            <span className="text-lg font-bold">1400</span> */}
                        </div>
                        <div className="flex flex-row justify-end">
                            <Link
                                to="/checkout"
                                className="btn-yellow flex flex-row justify-center items-center"
                            >
                                <FaArrowRight className="mr-2.5" />
                                <p className="font-bold text-xl">前往結帳</p>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Cart;
