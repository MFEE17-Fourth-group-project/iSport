import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../../global/Aside';
import CheckItem from './components/CheckItem';
import ProgressBar from './components/ProgressBar';
import { HiChevronDoubleDown, HiChevronDoubleUp } from 'react-icons/hi';

function Checkout() {
    // TRY ANIMATE TRANSITION and DURATION
    const cartHeight = 180;
    const cartList = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ];
    console.log(cartHeight * cartList.length);

    const showCheckItemRef = useRef(null);
    const showItem = () => {
        const showCheckItem = showCheckItemRef.current;
        console.log('showCheckItem', showCheckItem);
        // showCheckItem.classList.toggle('max-h-500');
    };
    return (
        <>
            <main className="sm:max-w-screen-xl w-full mx-auto px-2.5 py-5 flex justify-start border-red-300">
                <Aside />
                <article className="flex-grow flex-col ">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white sm:px-12 px-4 py-6 bg-gray-900 mb-2.5">
                        <div>
                            <ProgressBar />
                        </div>
                        <div
                            ref={showCheckItemRef}
                            className="max-h-44 overflow-hidden transition-all duration-500"
                        >
                            {cartList.map(function (object, i) {
                                return <CheckItem obj={object} key={i} />;
                            })}
                        </div>
                        <div className="pt-2.5 mt-2.5 mb-6 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="text-lg font-bold">Total :</p>
                            <span className="text-lg font-bold">1400</span>
                        </div>
                        <div
                            className="flex justify-center animate-bounce py-1 cursor-pointer"
                            onClick={showItem}
                        >
                            <HiChevronDoubleDown className="text-2xl text-yellow-400" />
                        </div>
                    </div>
                    <div className="text-white bg-gray-900 w-full object-cover object-center text-opacity-85 text-lg sm:px-12 px-4 py-6 rounded-b-xl">
                        <from>
                            <div className="items-center pt-2 mb-6">
                                <label for="recipient">收件人</label>
                                <input
                                    type="text"
                                    className="input-style"
                                    id="recipient"
                                    placeholder="Jennifer"
                                ></input>
                            </div>
                            <div className="items-center pt-2 mb-6">
                                <label for="phone">行動電話</label>
                                <input
                                    type="text"
                                    className="input-style"
                                    id="phone"
                                    placeholder="0955123456"
                                ></input>
                            </div>
                            <div className="items-center pt-2 mb-6">
                                <label for="email">信箱</label>
                                <input
                                    type="text"
                                    className="input-style"
                                    id="email"
                                    placeholder="jen@isport.com"
                                ></input>
                            </div>
                            <div className="items-center pt-2 mb-6">
                                <label for="address">住家地址</label>
                                <input
                                    type="text"
                                    className="input-style"
                                    id="address"
                                    placeholder="桃園市平鎮區中央路123號"
                                ></input>
                            </div>
                            <div className="items-center pt-2 mb-6">
                                <label for="delivery">寄送方式</label>
                                <select
                                    type="text"
                                    className="input-style"
                                    id="delivery"
                                    value=""
                                >
                                    <option value="1">郵寄</option>
                                    <option value="2">宅急便</option>
                                    <option value="3">超商貨到付款</option>
                                </select>
                            </div>
                            {/* <div
                                className="items-center pt-2 mb-6"
                            >
                                <label>多得多得多的</label>
                                <input
                                    type="text"
                                    className="input-style"
                                ></input>
                            </div> */}
                        </from>
                        {/* <div className="pt-2.5 my-4 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end"></div> */}
                        <div className="flex flex-row justify-center">
                            <button type="submit">
                                <Link
                                    to="/checkout2"
                                    className="btn-yellow flex flex-row justify-end items-center"
                                >
                                    <p className="font-bold sm:text-xl text-lg">
                                        下一步
                                    </p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Checkout;
