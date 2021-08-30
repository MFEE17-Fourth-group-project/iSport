import React from 'react';
import { Link } from 'react-router-dom';
// import creditCard from '../../images/';
import userHeader from '../../images/11.jpeg';
import ProgressBar from './components/ProgressBar';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

function Checkout2() {
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
                            <div className="flex flex-row justify-end">
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
