import React from 'react';
import { Link } from 'react-router-dom';
import userHeader from './images.png';
import {
    FaUserAlt,
    FaShoppingCart,
    FaHeart,
    FaMoneyCheck,
    FaComment,
} from 'react-icons/fa';
import { useState } from 'react';
import CustomerService from '../sign/CustomerService';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../../context/auth';
import { IMAGE_URL } from '../../utils/config';

// 聯絡我們跳窗
// async
function UserAside() {
    const { member, setMember } = useAuth();
    const [CustomerServiceWindow, setCustomerServiceWindow] = useState(false);
    const [photo, setphoto] = useState();
    const formData = new FormData();

    const handleCustomerService = () => {
        setCustomerServiceWindow(true);
    };

    const handleCancel = () => {
        setCustomerServiceWindow(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.append('photo', photo);
        let response = await axios.put(
            `${API_URL}/users/photo/${member.account}`,
            formData,
            {
                withCredentials: true,
            }
        );
        try {
            alert('頭像上傳成功');
        } catch (e) {
            //透過e.response拿到axios的response
            console.error(e.response);
            //顯示錯誤訊息到前端，目前先使用alert顯示後面可以修改成套窗或者紅字顯示
            alert(e.response.data.message);
        }
    };

    return (
        <aside className="lg:block hidden w-64 mr-2.5 bg-gray-900 rounded-xl shadow-xl">
            {CustomerServiceWindow && (
                <CustomerService onCancel={handleCancel} />
            )}
            <form onSubmit={handleSubmit}>
                <div className=" w-64 h-54 flex justify-center items-center cursor-pointer relative mt-3 mb-3 hover:opacity-60">
                    <input
                        required
                        type="file"
                        id="photo"
                        name="photo"
                        onChange={(e) => {
                            setphoto(e.target.files[0]);
                        }}
                        className="w-48 h-48 rounded-full  overflow z-10 absolute opacity-0 cursor-pointer"
                    />
                    {member.photo ? (
                        <div className="w-48 h-48 rounded-full  overflow-hidden z-0 ">
                            <img
                                src={`${IMAGE_URL}${member.photo}`}
                                alt=""
                                className="w-full h-full object-cover object-center opacity-40"
                            />
                        </div>
                    ) : (
                        <div className="w-48 h-48 rounded-full  overflow-hidden z-0 ">
                            <img
                                src={userHeader}
                                alt=""
                                className="w-full h-full object-cover object-center opacity-50 "
                            />
                        </div>
                    )}
                </div>
                <button className="btn-green block m-auto">上傳</button>
            </form>
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
                                    <Link to="/user/cart/favorite" exact>
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
export default UserAside;
