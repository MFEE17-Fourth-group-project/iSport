import React from 'react';
import CartItem from './components/CartItem';
import product from '../../images/product/1002-3.png';
// import { FaHeart } from '@react-icons/all-files/fa/FaHeart';

function Cart() {
    return (
        <>
            <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                <div className="w-64 mr-2.5 bg-yellow-100">放側欄</div>
                <div className="flex-grow flex-col">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-4xl rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white px-12 py-6">
                        <div className="p-5 flex flex-row">
                            <div className="w-36 mx-5 self-center text-center">
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="good product"
                                ></img>
                            </div>
                            <div className="flex flex-col flex-grow ml-10">
                                規格card
                                <div className="flex flex-row justify-between pb-2.5">
                                    <h3>女款路跑背心</h3>
                                    <p className="text-yellow-400">$350</p>
                                </div>
                                <div className="pb-1.5">MIZUNO 美津濃</div>
                                <div className="flex flex-row items-center pb-1.5">
                                    <p className="mr-2.5">顏色：</p>
                                    <div className="bg-yellow-400 px-4 text-gray-900 text-center text-sm rounded-full">
                                        黑
                                    </div>
                                </div>
                                <div className="flex flex-row items-center pb-1.5">
                                    <p className="mr-2.5">尺寸：</p>
                                    <div className="bg-yellow-400 px-4 text-gray-900 text-center text-sm rounded-full">
                                        M
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="mr-2.5">數量：</p>
                                    <div className="w-16 px-2.5 mr-2.5 border-2 border-yellow-400 rounded-md">
                                        1<i></i>
                                    </div>
                                    <div className="mr-2.5 text-red-400 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-md uppercase text-sm px-4 py-1 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150">
                                        {/* <FaHeart /> */}
                                        <p>移至收藏</p>
                                    </div>
                                    <div className="btn text-yellow-400 bg-transparent border border-solid border-yellow-300 hover:bg-yellow-400 hover:text-gray-800 active:bg-yellow-600 font-md uppercase text-sm px-4 py-1 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150">
                                        <i></i>
                                        <p>移除商品</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2.5 mb-9 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="">Total :</p>
                            <span className="">1400</span>
                        </div>
                        <div className="flex flex-row justify-end">
                            <button className="btn text-yellow-400 bg-transparent border border-solid border-yellow-300 hover:bg-yellow-400 hover:text-gray-800 active:bg-yellow-600 font-md uppercase text-base px-4 py-2 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150">
                                前往結帳
                            </button>
                        </div>
                        {/* <button className="flex flex-row justify-end">前往結帳</button> */}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cart;
