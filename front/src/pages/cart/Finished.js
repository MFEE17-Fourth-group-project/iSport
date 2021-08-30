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
                    <div className="text-white px-12 py-6 bg-gray-900 rounded-b-xl">
                        <div>
                            <ProgressBar />
                        </div>
                        <div className="flex justify-center mb-8">
                            <h3 className="text-2xl font-bold text-yellow-400 py-2">
                                訂單已成立，謝謝您的購買!
                            </h3>
                        </div>
                        <div className="border-b-2 border-yellow-400 mb-8">
                            <h5 className="pb-2.5 text-xl text-center">
                                訂單編號 : 2107ORD1425
                            </h5>
                        </div>
                        <div className="flex flex-row mb-8">
                            <div className="flex-1">
                                <table>
                                    <tr className="">
                                        <td className="w-20 pb-4">收件人 : </td>
                                        <td className="pb-4">Aaliyah</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">聯絡電話 : </td>
                                        <td className="pb-4">0988777888</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">信箱 : </td>
                                        <td className="pb-4">
                                            aali@isport.com
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">收件地址 : </td>
                                        <td className="pb-4">
                                            台北市中山區羅斯福路9段201巷5弄20號3樓
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="flex-1 ml-5">
                                <table>
                                    <tr>
                                        <td className="w-20 pb-4">
                                            下單日期 :
                                        </td>
                                        <td className="pb-4">2021/8/19</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">付款方式 : </td>
                                        <td className="pb-4">信用卡</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">運送方式 : </td>
                                        <td className="pb-4">宅急便</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">訂單狀態 : </td>
                                        <td className="pb-4">備貨中</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className="border-b-2 border-yellow-400 mb-8">
                            <h5 className="pb-2.5 text-xl text-center">
                                訂購明細
                            </h5>
                        </div>
                        <CheckItem />
                        <CheckItem />
                        <CheckItem />
                        <div className="pt-2.5 mt-8 mb-6 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="text-lg font-bold">Total :</p>
                            <span className="text-lg font-bold">1400</span>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Finished;
