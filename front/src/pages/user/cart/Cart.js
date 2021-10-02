import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './components/CartItem';
import { FaArrowRight } from 'react-icons/fa';
import Aside from '../../../global/Aside';
import { useAuth } from '../../../context/auth';
import NotAuth from '../components/NotAuth';

function Cart(props) {
    const { member, setMember } = useAuth();
    const { cartAdd } = props;
    const [totalAmount, setTotalAmount] = useState(0);
    const [showNoItem, setShowNoItem] = useState(false);

    const checkLocalStorage = () => {
        // 顯示購物車沒有商品
        const cartInLocalStorage = localStorage.getItem('cart');
        if (
            !cartInLocalStorage ||
            JSON.parse(cartInLocalStorage).length === 0
        ) {
            setShowNoItem(true);
        }

        // 初始化：一開始開啟這個網站時，取得 localStorage 中 cart 資料，如果 localStorage 中沒有 cart 時，存一個空的 []。
        const newCart = localStorage.getItem('cart') || '[]';

        console.log('newCart', JSON.parse(newCart));
    };
    // componentDidMount 一進到此頁面，從 localStorage 得到 cart 資料
    useEffect(() => {
        checkLocalStorage();
        cartAdd();
    }, []);

    return (
        <>
            {member ? (
                <main className="sm:max-w-screen-xl w-full mx-auto px-2.5 py-5 flex lg:justify-start border-red-300">
                    <Aside />
                    <article className="w-full flex-grow flex-col">
                        <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title rounded-t-xl">
                            購物車
                        </div>
                        {showNoItem ? (
                            <div
                                // ref={showNoItemRef}
                                className="h-screen text-white text-opacity-85 text-xl text-center pt-14 bg-gray-900 rounded-b-xl"
                            >
                                您的購物車目前沒有商品！！
                            </div>
                        ) : (
                            <div
                                // ref={hideItemRef}
                                className="text-white lg:px-10 px-4 py-6 bg-gray-900 rounded-b-xl"
                            >
                                {/* 購物車商品卡片 */}
                                <CartItem
                                    cartAdd={cartAdd}
                                    setTotalAmount={setTotalAmount}
                                    checkLocalStorage={checkLocalStorage}
                                />

                                <div className="pt-2.5 mt-2.5 mb-9 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                                    <p className="text-lg font-bold">
                                        Total : ${' '}
                                    </p>
                                    <span className="text-lg font-bold">
                                        {totalAmount}
                                    </span>
                                </div>
                                <div className="flex flex-row justify-end">
                                    <Link
                                        to="/checkout"
                                        className="btn-yellow flex flex-row justify-center items-center"
                                    >
                                        <FaArrowRight className="mr-2.5" />
                                        <p className="font-bold text-xl">
                                            前往結帳
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </article>
                </main>
            ) : (
                <NotAuth />
            )}
        </>
    );
}

export default Cart;
