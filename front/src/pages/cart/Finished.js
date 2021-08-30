import React from 'react';
import { Link } from 'react-router-dom';
import userHeader from '../../images/11.jpeg';
import CheckItem from './components/CheckItem';
import ProgressBar from './components/ProgressBar';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { CgChevronDoubleDown } from 'react-icons/cg';

function Finished() {
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
                    <div className="text-white px-12 py-6 bg-gray-900 mb-2.5">
                        <div>
                            <ProgressBar />
                        </div>
                        <CheckItem />
                        <div className="pt-2.5 mb-6 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="text-lg font-bold">Total :</p>
                            <span className="text-lg font-bold">1400</span>
                        </div>
                        <div className="flex justify-center">
                            <CgChevronDoubleDown className="text-2xl text-yellow-400" />
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
                                to="/checkout2"
                                className="btn-yellow flex flex-row justify-end items-center"
                            >
                                <p className="font-bold text-xl">下一步</p>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Finished;
