import React from 'react';
import { Link } from 'react-router-dom';
import product from '../../images/product/1002-3.png';
import userHeader from '../../images/11.jpeg';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

function Checkout() {
    return (
        <>
            <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                <aside className="w-64 mr-2.5 bg-gray-900 rounded-t-xl shadow-xl">
                    <div className=" w-64 h-64 flex justify-center items-center">
                        <div className="w-48 h-48 rounded-full bg-white overflow-hidden">
                            <img
                                src={userHeader}
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="h-full aside-menu">
                        <ul className="text-white text-lg ">
                            <li className="users-li">
                                <a href="">
                                    <FaUserAlt className="userIcons" /> 會員資料
                                </a>
                            </li>
                            <li className="users-li">
                                <a href="">
                                    <FaShoppingCart className="userIcons" />
                                    訂單管理
                                </a>
                                <ul className="submenu">
                                    <li>
                                        <a href="">購買紀錄</a>
                                    </li>
                                    <li>
                                        <a href="">購物車</a>
                                    </li>
                                    <li>
                                        <a href="">我的最愛</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="users-li">
                                <a href="">
                                    <FaHeart className="userIcons" />
                                    影片收藏
                                </a>
                                <ul className="submenu">
                                    <li>
                                        <a href="">我的最愛</a>
                                    </li>
                                    <li>
                                        <a href="">稍後觀看</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="users-li">
                                <a href="">
                                    <FaMoneyCheck className="userIcons" />
                                    文章管理
                                </a>
                                <ul className="submenu">
                                    <li>
                                        <a href="">我的文章</a>
                                    </li>
                                    <li>
                                        <a href="">新增文章</a>
                                    </li>
                                    <li>
                                        <a href="">收藏文章</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="users-li">
                                <a href="">
                                    <FaComment className="userIcons" />
                                    聯絡我們
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="flex-grow flex-col">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-4xl rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white px-12 py-6 bg-gray-900 mb-2.5">
                        <div className="p-5 flex flex-row">
                            {' '}
                            {/* Checkout Card */}
                            <div className="w-36 mx-5 self-center text-center">
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="good product"
                                ></img>
                            </div>
                            <div className="flex flex-col flex-grow ml-10">
                                <div className="flex flex-row justify-between pb-2.5">
                                    <h3 className="text-xl font-bold">
                                        女款路跑背心
                                    </h3>
                                    <p className="text-yellow-400 font-bold">
                                        $350
                                    </p>
                                </div>
                                <div className="pb-1.5 text-sm text-yellow-400">
                                    MIZUNO 美津濃
                                </div>
                                <div className="flex flex-row items-center pb-1.5">
                                    <p className="mr-2.5">顏色：</p>
                                    <div className="px-4 text-white text-opacity-85 text-center text-sm rounded-full">
                                        黑
                                    </div>
                                </div>
                                <div className="flex flex-row items-center pb-1.5">
                                    <p className="mr-2.5">尺寸：</p>
                                    <div className="px-4 text-white text-opacity-85 text-center text-sm rounded-full">
                                        M
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="mr-2.5">數量：</p>
                                    <div className="w-16 px-4 mr-2.5 border-l-2 border-transparent rounded-md flex items-center">
                                        <p>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2.5 mb-9 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="text-lg font-bold">Total :</p>
                            <span className="text-lg font-bold">1400</span>
                        </div>

                        {/* <button className="flex flex-row justify-end">前往結帳</button> */}
                    </div>
                    <div className="text-white px-12 py-6 bg-gray-900 rounded-b-xl">
                        <from>
                            <label>收件人：</label>
                            <br />
                            <input
                                type="text"
                                className="w-full bg-gray-900 border-b-2 bg-gray-700 "
                            ></input>
                            <br />
                            <label>行動電話：</label>
                            <br />
                            <input
                                type="text"
                                className="w-full bg-gray-900 border-b-2 bg-gray-700 "
                            ></input>
                            <br />
                            <label>信箱：</label>
                            <br />
                            <input
                                type="text"
                                className="w-full bg-gray-900 border-b-2 bg-gray-700 "
                            ></input>
                            <br />
                            <label>住家地址：</label>
                            <br />
                            <input
                                type="text"
                                className="w-full bg-gray-900 border-b-2 bg-gray-700 "
                            ></input>
                            <br />
                            <label>寄送方式：</label>
                            <br />
                            <input
                                type="text"
                                className="w-full bg-gray-900 border-b-2 bg-gray-700 "
                            ></input>
                            <br />
                            <label>多得多得多的：</label>
                            <br />
                            <input
                                type="text"
                                className="w-full bg-gray-900 border-b-2 bg-gray-700 "
                            ></input>
                            <br />
                        </from>
                        <div className="pt-2.5 my-4 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end"></div>
                        <div className="flex flex-row justify-end">
                            <Link
                                to="/checkout"
                                className="btn-yellow flex flex-row justify-end items-center"
                            >
                                <p className="font-bold text-xl">下一步</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Checkout;
