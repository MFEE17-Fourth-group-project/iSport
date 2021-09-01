import React from 'react';
import { Link } from 'react-router-dom';
import userHeader from '../images/user/pic04.jpg';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

function Aside() {
    return (
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
                                <Link to="/ArticleMyart">我的文章</Link>
                            </li>
                            <li>
                                <Link to="/ArticleAdd">新增文章</Link>
                            </li>
                            <li>
                                <Link to="/ArticleCollect">收藏文章</Link>
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
    );
}
export default Aside;
