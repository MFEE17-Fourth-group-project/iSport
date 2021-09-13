import React from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../../global/Aside';
import ProgressBar from './components/ProgressBar';
import CreditCard from './components/CreditCard';

function Checkout2() {
    return (
        <>
            <main className="sm:max-w-screen-xl w-full mx-auto px-2.5 py-5 flex justify-start border-red-300">
                <Aside />
                <article className="flex-grow flex-col">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white sm:px-12 px-4 py-6 bg-gray-900 rounded-b-xl">
                        <div>
                            <ProgressBar />
                        </div>
                        <div className="flex justify-center mb-8">
                            <h3 className="sm:text-xl text-lg text-white text-opacity-85 py-2 border-b-2 border-yellow-400">
                                信用卡付款
                            </h3>
                        </div>
                        <div className="sm:flex hidden justify-center mb-8">
                            {/* FIXME: 用好刪掉 */}
                            {/* <img src="creditCard" alt=""></img> */}
                            {/* <div className="w-56 h-32 bg-white rounded-lg bg-opacity-90 text-gray-700 text-center flex justify-center items-center">
                                <p>示意圖</p>
                            </div> */}
                            <div>
                                <CreditCard />
                            </div>
                        </div>
                        <from>
                            <div className="flex sm:mb-8 mb-4">
                                <label className="w-24">信用卡號碼</label>
                                <input
                                    type="text"
                                    className="input-style flex-1"
                                ></input>
                            </div>
                            <div className="flex sm:mb-8 mb-4">
                                <label className="w-24">持卡人姓名</label>
                                <input
                                    type="text"
                                    className="input-style flex-1"
                                ></input>
                            </div>
                            <div className="flex sm:flex-row flex-col mb-8">
                                <div className="flex flex-1 sm:mr-8 sm:mb-0 mb-4">
                                    <label className="w-24">有效期限</label>
                                    <input
                                        type="text"
                                        className="input-style flex-1"
                                    ></input>
                                </div>
                                <div className="flex flex-1">
                                    <label className="w-20">CVC</label>
                                    <input
                                        type="text"
                                        className="input-style flex-1"
                                    ></input>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <button type="" className="mr-4">
                                    <Link
                                        to="/checkout"
                                        className="btn-yellow-hollow flex flex-row justify-end items-center"
                                    >
                                        <p className="font-bold sm:text-xl text-lg">
                                            上一步
                                        </p>
                                    </Link>
                                </button>
                                <button type="submit">
                                    <Link
                                        to="/finished"
                                        className="btn-yellow flex flex-row justify-end items-center"
                                    >
                                        <p className="font-bold sm:text-xl text-lg">
                                            下一步
                                        </p>
                                    </Link>
                                </button>
                            </div>
                        </from>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Checkout2;
