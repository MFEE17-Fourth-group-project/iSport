import React from 'react';
import { Link } from 'react-router-dom';
import userHeader from '../pages/user/components/images.png';
import {
    FaUserAlt,
    FaShoppingCart,
    FaHeart,
    FaMoneyCheck,
    FaComment,
} from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from '../context/auth';
import { IMAGE_URL } from '../pages/utils/config';
import { Image } from 'cloudinary-react';
import { REACT_APP_CLOUDINARY } from '../utils/config';
import CustomerService from '../pages/user/sign/CustomerService';

// 聯絡我們跳窗
function Aside() {
    const [CustomerServiceWindow, setCustomerServiceWindow] = useState(false);
    const { member, setMember } = useAuth();
    const handleCustomerService = () => {
        setCustomerServiceWindow(true);
    };

    const handleCancel = () => {
        setCustomerServiceWindow(false);
    };
    return (
        <aside className="lg:block hidden w-64 mr-2.5 bg-gray-900 rounded-xl shadow-xl">
            {CustomerServiceWindow && (
                <CustomerService onCancel={handleCancel} />
            )}
            <div className=" w-64 h-64 flex justify-center items-center">
                <div className="w-48 h-48 rounded-full bg-white overflow-hidden">
                    {member.photo ? (
                        <Image
                            cloudName={REACT_APP_CLOUDINARY}
                            publicId={member.photo}
                            secure="true"
                            className="w-full h-full object-cover object-center group-hover:filter group-hover:blur-sm transition-all duration-300 ease-in-out"
                        ></Image>
                    ) : (
                        <img
                            src={userHeader}
                            alt=""
                            className="w-full h-full object-cover object-center "
                        />
                    )}
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
                        <label for="ordermenu" className="cursor-pointer">
                            訂單管理
                        </label>
                        <input
                            type="checkbox"
                            id="ordermenu"
                            className="hidden"
                        />
                        <section className="hidden-section">
                            <ul className="submenu">
                                <li className="user-submenu-li">
                                    <Link to="/user/cart/TradingRecord">
                                        購買紀錄
                                    </Link>
                                </li>
                                <li className="user-submenu-li">
                                    <Link to="/user/cart">購物車</Link>
                                </li>
                                <li className="user-submenu-li">
                                    <Link to="/user/cart/favourite">
                                        我的最愛
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </li>
                    <li className="users-li">
                        <FaHeart className="userIcons" />
                        <label for="videomenu" className="cursor-pointer">
                            影片收藏
                        </label>
                        <input
                            type="checkbox"
                            id="videomenu"
                            className="hidden"
                        />
                        <section className="hidden-section">
                            <ul className="submenu">
                                <li className="user-submenu-li">
                                    <Link to="/user/videoCollection">
                                        收藏影片
                                    </Link>
                                </li>
                                <li className="user-submenu-li">
                                    <Link to="/user/watchLater">稍後觀看</Link>
                                </li>
                            </ul>
                        </section>
                    </li>
                    <li className="users-li ">
                        <FaMoneyCheck className="userIcons" />
                        <label for="articlemenu" className="cursor-pointer">
                            文章管理
                        </label>
                        <input
                            id="articlemenu"
                            type="checkbox"
                            className="hidden"
                        />
                        <section className="hidden-section">
                            <ul className="submenu">
                                <li className="user-submenu-li ">
                                    <Link to="/user/ArticleMyart">
                                        我的文章
                                    </Link>
                                </li>
                                <li className="user-submenu-li">
                                    <Link to="/user/ArticleAdd">新增文章</Link>
                                </li>
                                <li className="user-submenu-li">
                                    <Link to="/user/ArticleCollect">
                                        收藏文章
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </li>
                    <li
                        onClick={handleCustomerService}
                        className="users-li cursor-pointer"
                    >
                        <FaComment className="userIcons" />
                        聯絡我們
                    </li>
                </ul>
            </div>
        </aside>
    );
}
export default Aside;
