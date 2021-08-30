import React from 'react';
import { Link } from 'react-router-dom';
// import creditCard from '../../images/';
import Aside from '../../../global/Aside';
import ProgressBar from './components/ProgressBar';

function Checkout2() {
    return (
        <>
            <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                <Aside />
                <article className="flex-grow flex-col">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-4xl rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white px-12 py-6 bg-gray-900 rounded-b-xl">
                        <div>
                            <ProgressBar />
                        </div>
                        <div className="flex justify-center mb-8">
                            <h3 className="text-xl text-white text-opacity-85 py-2 border-b-2 border-yellow-400">
                                信用卡付款
                            </h3>
                        </div>
                        <div className="flex justify-center mb-8">
                            {/* <img src="creditCard" alt=""></img> */}
                            <div className="w-56 h-32 bg-white rounded-lg bg-opacity-90 text-gray-700 text-center flex justify-center items-center">
                                <p>示意圖</p>
                            </div>
                        </div>
                        <from>
                            <div
                                className="flex mb-8 border-b border-gray-700
                            pb-2.5 hover:border-yellow-400"
                            >
                                <label className="w-24">信用卡號碼</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1"
                                ></input>
                            </div>
                            <div
                                className="flex mb-8 border-b border-gray-700
                            pb-2.5 hover:border-yellow-400"
                            >
                                <label className="w-24">持卡人姓名</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1"
                                ></input>
                            </div>
                            <div className="flex mb-8">
                                <div
                                    className="flex flex-1 border-b border-gray-700
                            pb-2.5 hover:border-yellow-400 mr-8"
                                >
                                    <label className="w-20">有效期限</label>
                                    <input
                                        type="text"
                                        className="bg-transparent flex-1"
                                    ></input>
                                </div>
                                <div
                                    className="flex flex-1 border-b border-gray-700
                            pb-2.5 hover:border-yellow-400"
                                >
                                    <label className="w-20">CVC</label>
                                    <input
                                        type="text"
                                        className="bg-transparent flex-1"
                                    ></input>
                                </div>
                            </div>

                            {/* <div>
                                <label className="w-20">住家地址</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1"
                                ></input>
                            </div>

                            <div>
                                <label className="w-20">寄送方式</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1"
                                ></input>
                            </div>

                            <div>
                                <label className="w-20">多得多得多的</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1"
                                ></input>
                            </div> */}

                            {/* <div className="pt-2.5 my-4 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end"></div> */}
                            <div className="flex flex-row justify-center">
                                <button type="" className="mr-4">
                                    <Link
                                        to="/checkout"
                                        className="btn-yellow-hollow flex flex-row justify-end items-center"
                                    >
                                        <p className="font-bold text-xl">
                                            上一步
                                        </p>
                                    </Link>
                                </button>
                                <button type="submit">
                                    <Link
                                        to="/finished"
                                        className="btn-yellow flex flex-row justify-end items-center"
                                    >
                                        <p className="font-bold text-xl">
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
