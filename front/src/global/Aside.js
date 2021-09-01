import React from 'react';
import { Link } from 'react-router-dom';
import userHeader from '../images/user/pic04.jpg';
import {
    FaUserAlt,
    FaShoppingCart,
    FaHeart,
    FaMoneyCheck,
    FaComment,
} from 'react-icons/fa';

function Aside() {
    return (
        <aside className="sm:block hidden w-64 mr-2.5 bg-gray-900 rounded-xl shadow-xl">
            <div className="w-64 h-64 flex justify-center items-center">
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
                        <Link to="">
                            <FaUserAlt className="userIcons" /> 會員資料
                        </Link>
                    </li>
                    <li className="users-li">
                        <Link to="">
                            <FaShoppingCart className="userIcons" />
                            訂單管理
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link to="/user/cart/TradingRecord">
                                    購買紀錄
                                </Link>
                            </li>
                            <li>
                                <Link to="/user/cart">購物車</Link>
                            </li>
                            <li>
                                <Link to="/user/cart/favourite">我的最愛</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="users-li">
                        <Link to="">
                            <FaHeart className="userIcons" />
                            影片收藏
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link to="">我的最愛</Link>
                            </li>
                            <li>
                                <Link to="">稍後觀看</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="users-li">
                        <Link to="">
                            <FaMoneyCheck className="userIcons" />
                            文章管理
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link to="ArticleAdd">我的文章</Link>
                            </li>
                            <li>
                                <Link to="ArticleCollect">新增文章</Link>
                            </li>
                            <li>
                                <Link to="ArticleMyart">收藏文章</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="users-li">
                        <Link to="">
                            <FaComment className="userIcons" />
                            聯絡我們
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
export default Aside;
