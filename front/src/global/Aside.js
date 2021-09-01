import React from 'react';
import { Link } from 'react-router-dom';
import userHeader from '../images/user/pic04.jpg';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { useState } from 'react';
import CustomerService from '../pages/user/sign/CustomerService';

function Aside() {
    const [CustomerServiceWindow, setCustomerServiceWindow] = useState(false);

    const handleCustomerService = () => {
        setCustomerServiceWindow(true);
    };

    const handleCancel = () => {
        setCustomerServiceWindow(false);
    };
    return (
        <aside className="w-64 mr-2.5 bg-gray-900 rounded-xl shadow-xl">
            {CustomerServiceWindow && (
                <CustomerService onCancel={handleCancel} />
            )}
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
                        <Link to="/user">
                            <FaUserAlt className="userIcons" />
                            會員資料
                        </Link>
                    </li>
                    <li className="users-li">
                        <a>
                            <FaShoppingCart className="userIcons" />
                            訂單管理
                        </a>
                        <ul className="submenu">
                            <Link to="user/cart/TradingRecord">購買紀錄</Link>
                            <li>
                                <Link to="/cart">購物車</Link>
                            </li>
                            <li>
                                <Link to="user/cart/favourite">我的最愛</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="users-li">
                        <a>
                            <FaHeart className="userIcons" />
                            影片收藏
                        </a>
                        <ul className="submenu">
                            <li>
                                <Link to="/user/videoCollection">收藏影片</Link>
                            </li>
                            <li>
                                <Link to="/user/watchLater">稍後觀看</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="users-li">
                        <a>
                            <FaMoneyCheck className="userIcons" />
                            文章管理
                        </a>
                        <ul className="submenu">
                            <li>

                                <Link to="/user/ArticleMyart">我的文章</Link>
                            </li>
                            <li>
                                <Link to="/user/ArticleAdd">新增文章</Link>
                            </li>
                            <li>
                                <Link to="/user/ArticleCollect">收藏文章</Link>


                            </li>
                        </ul>
                    </li>
                    <li className="users-li">
                        <button
                            onClick={handleCustomerService}
                            className="pl-8 py-2.5 block"
                        >
                            <FaComment className="userIcons" />
                            聯絡我們
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
export default Aside;
