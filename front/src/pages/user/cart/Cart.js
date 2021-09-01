import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './components/CartItem';
import { FaArrowRight } from 'react-icons/fa';
import Aside from '../../../global/Aside';

function Cart(props) {
    const { counts, setCounts } = props;

    return (
        <>
            <main className="lg:max-w-screen-xl mx-auto px-2.5 py-5 flex lg:justify-start sm:justify-center border-red-300">
                <Aside />
                <article className="lg:max-w-full sm:max-w-xl flex-grow flex-col">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white px-12 py-6 bg-gray-900 rounded-b-xl">
                        <CartItem
                            count={counts}
                            setCount={(newCount) => {
                                // 先從目前狀態中拷貝一個新陣列, [1,1,1,1]
                                let newCounts = 0;

                                // 更新數量陣列自己的索引值，如果小於1則用1來更新
                                newCounts = newCount < 1 ? 1 : newCount;

                                // 更新到狀態中
                                setCounts(newCounts);
                            }}
                        />
                        <CartItem
                            count={counts}
                            setCount={(newCount) => {
                                let newCounts = 0;
                                newCounts = newCount < 1 ? 1 : newCount;
                                setCounts(newCounts);
                            }}
                        />
                        <CartItem
                            count={counts}
                            setCount={(newCount) => {
                                let newCounts = 0;
                                newCounts = newCount < 1 ? 1 : newCount;
                                setCounts(newCounts);
                            }}
                        />
                        <div className="pt-2.5 mb-9 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="text-lg font-bold">Total :</p>
                            <span className="text-lg font-bold">1400</span>
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
                        {/* <button className="flex flex-row justify-end">前往結帳</button> */}
                    </div>
                </article>
            </main>
        </>
    );
}

export default Cart;
