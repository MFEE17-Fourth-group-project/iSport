import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerService from '../pages/user/sign/CustomerService';
import userHeader from '../images/user/pic04.jpg';
import {
    FaUserAlt,
    FaShoppingCart,
    FaHeart,
    FaMoneyCheck,
    FaComment,
    FaTimes,
    FaSignOutAlt,
} from 'react-icons/fa';

function MobileAside({ isOpen, toggle }) {
    const [CustomerServiceWindow, setCustomerServiceWindow] = useState(false);

    const handleCustomerService = () => {
        setCustomerServiceWindow(true);
    };

    const handleCancel = () => {
        setCustomerServiceWindow(false);
    };
    return (
        <>
            <aside
                className={
                    isOpen
                        ? 'lg:block w-64 mr-2.5 bg-gray-900 shadow-xl absolute top-0 left-0 z-50'
                        : 'hidden'
                }
                onClick={toggle}
            >
                {CustomerServiceWindow && (
                    <CustomerService onCancel={handleCancel} />
                )}
                <div className="flex justify-center items-center p-2.5 bg-gray-800">
                    <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
                        <img
                            src={userHeader}
                            alt=""
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <p className="text-white text-opacity-85 ml-2.5">
                        Hi BB，歡迎回來！
                    </p>
                    <div className="w-10 h-10 p-2 rounded-full bg-gray-900 text-center items-center">
                        <FaTimes className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="h-full aside-menu">
                    <ul className="text-white text-lg ">
                        <Link to="/user">
                            <li className="users-li">
                                <FaUserAlt className="userIcons" />
                                會員資料
                            </li>
                        </Link>
                        <li className="users-li">
                            <FaShoppingCart className="userIcons" />
                            訂單管理
                            <ul className="submenu">
                                <li className="user-p">
                                    <Link to="user/cart/TradingRecord">
                                        購買紀錄
                                    </Link>
                                </li>
                                <li className="user-p">
                                    <Link to="/cart">購物車</Link>
                                </li>
                                <li className="user-p">
                                    <Link to="user/cart/favourite">
                                        我的最愛
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="users-li">
                            <FaHeart className="userIcons" />
                            影片收藏
                            <ul className="submenu">
                                <li className="user-p">
                                    <Link to="/user/videoCollection">
                                        收藏影片
                                    </Link>
                                </li>
                                <li className="user-p">
                                    <Link to="/user/watchLater">稍後觀看</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="users-li">
                            <FaMoneyCheck className="userIcons" />
                            文章管理
                            <ul className="submenu">
                                <li className="user-p">
                                    <Link to="/user/ArticleMyart">
                                        我的文章
                                    </Link>
                                </li>
                                <li className="user-p">
                                    <Link to="/user/ArticleAdd">新增文章</Link>
                                </li>
                                <li className="user-p">
                                    <Link to="/user/ArticleCollect">
                                        收藏文章
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <button
                            onClick={handleCustomerService}
                            className="pl-8 py-2.5 block"
                        >
                            <FaComment className="userIcons" />
                            聯絡我們
                        </button>
                        <button className="w-64 pl-8 py-2.5 border-t-2 border-yellow-400 text-left">
                            <FaSignOutAlt className="userIcons" />
                            登出帳號
                        </button>
                    </ul>
                </div>
            </aside>
        </>
    );
}
export default MobileAside;