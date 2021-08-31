import React from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../../global/Aside';
import CheckItem from './components/CheckItem';
import ProgressBar from './components/ProgressBar';
import { CgChevronDoubleDown } from 'react-icons/cg';

function Checkout() {
    return (
        <>
            <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                <Aside />
                <article className="flex-grow flex-col">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-4xl rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white px-12 py-6 bg-gray-900 mb-2.5">
                        <div>
                            <ProgressBar />
                        </div>
                        <CheckItem />
                        <CheckItem />
                        <CheckItem />
                        <div className="pt-2.5 mb-6 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="text-lg font-bold">Total :</p>
                            <span className="text-lg font-bold">1400</span>
                        </div>
                        <div className="flex justify-center animate-bounce py-1">
                            <CgChevronDoubleDown className="text-2xl text-yellow-400" />
                        </div>
                    </div>
                    <div className="text-white px-12 py-6 bg-gray-900 rounded-b-xl">
                        <from>
                            <div
                                className="flex mb-8 border-b border-gray-700
                            pb-2.5 focus:border-yellow-400"
                            >
                                <label>收件人</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1 outline-none"
                                ></input>
                            </div>
                            <div
                                className="flex mb-8 border-b border-gray-700
                            pb-2.5 hover:border-yellow-400"
                            >
                                <label>行動電話</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1 outline-none"
                                ></input>
                            </div>
                            <div
                                className="flex mb-8 border-b border-gray-700
                            pb-2.5 hover:border-yellow-400"
                            >
                                <label>信箱</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1"
                                ></input>
                            </div>
                            <div
                                className="flex mb-8 border-b border-gray-700
                            pb-2.5 hover:border-yellow-400"
                            >
                                <label>住家地址</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1"
                                ></input>
                            </div>
                            <div
                                className="flex mb-8 border-b border-gray-700
                            pb-2.5 hover:border-yellow-400"
                            >
                                <label>寄送方式</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1"
                                ></input>
                            </div>
                            {/* <div
                                className="flex mb-8 border-b border-gray-700
                            pb-2.5 hover:border-yellow-400"
                            >
                                <label>多得多得多的</label>
                                <input
                                    type="text"
                                    className="bg-transparent flex-1"
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
                                    <p className="font-bold text-xl">下一步</p>
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
