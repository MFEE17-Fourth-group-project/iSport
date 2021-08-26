import React from 'react';
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
                            <div className="w-32 mr-10 self-center text-center">
                                圖片
                            </div>
                            <div className="flex flex-col flex-grow">
                                規格card
                                <div className="flex flex-row justify-between pb-2.5">
                                    <h3>女款路跑背心</h3>
                                    <p className="text-yellow-400">$350</p>
                                </div>
                                <div className="pb-1.5">MIZUNO 美津濃</div>
                                <div className="flex flex-row items-center pb-1.5">
                                    <p>顏色：</p>
                                    <div className="bg-yellow-400 px-4 text-gray-900 text-center text-sm rounded-full">
                                        黑
                                    </div>
                                </div>
                                <div className="flex flex-row items-center pb-1.5">
                                    <p>尺寸：</p>
                                    <div className="bg-yellow-400 px-4 text-gray-900 text-center text-sm rounded-full">
                                        M
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p>數量：</p>
                                    <div>
                                        1<i></i>
                                    </div>
                                    <div>
                                        {/* <FaHeart /> */}
                                        <p>移至收藏</p>
                                    </div>
                                    <div>
                                        <i></i>
                                        <p>移除商品</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2.5 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="">Total :</p>
                            <span className="">1400</span>
                        </div>
                        <div className="flex flex-row justify-end">
                            <button>前往結帳</button>
                        </div>
                        {/* <button className="flex flex-row justify-end">前往結帳</button> */}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cart;
