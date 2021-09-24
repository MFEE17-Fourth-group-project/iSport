import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './components/CartItem';
import { FaArrowRight } from 'react-icons/fa';
import Aside from '../../../global/Aside';
import { useAuth } from '../../../context/auth';
import NotAuth from '../components/NotAuth';

function Cart(props) {
    const { counts, setCounts } = props;
    const { member, setMember } = useAuth();

    return (
        <>
            {member ? (
                member(
                    <main className="sm:max-w-screen-xl w-full mx-auto px-2.5 py-5 flex lg:justify-start border-red-300">
                        <Aside />
                        <article className="w-full flex-grow flex-col">
                            <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title rounded-t-xl">
                                購物車
                            </div>
                            <div className="text-white lg:px-10 px-4 py-6 bg-gray-900 rounded-b-xl">
                                {/* 購物車商品卡片 */}
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
                                <div className="pt-2.5 mt-2.5 mb-9 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                                    <p className="text-lg font-bold">Total :</p>
                                    <span className="text-lg font-bold">
                                        1400
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
                                {/* <button className="flex flex-row justify-end">前往結帳</button> */}
                            </div>
                        </article>
                    </main>
                )
            ) : (
                <NotAuth />
            )}
        </>
    );
}

export default Cart;
