import React from 'react';
// import userHeader from '../../images/user/pic04.jpg';
// import { FaUserAlt } from 'react-icons/fa';
// import { FaShoppingCart } from 'react-icons/fa';
// import { FaHeart } from 'react-icons/fa';
// import { FaMoneyCheck } from 'react-icons/fa';
// import { FaComment } from 'react-icons/fa';
import Aside from '../../global/Aside.js';

function Users() {
    return (
        <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
            <Aside />
            {/* <aside className="w-64 mr-2.5 bg-gray-900 rounded-t-xl shadow-xl">
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
            </aside> */}
            <artical className="flex-grow flex-col">
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                    基本資料
                    <span className="text-base text-red-500	">(必填)</span>
                </div>
                <div className="text-white bg-gray-900 w-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                    <from>
                        <br />
                        <div className="items-center border-b py-2">
                            <label for="menberName">暱稱：</label>
                            <input
                                type="text"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
                                type="text"
                                placeholder="小咪"
                                aria-label="Full name"
                                name="menberName"
                                disabled
                            />
                        </div>
                        <br />
                        <div className="flex flex-wrap mr-3 mb-6 justify-between text-white">
                            <div className="items-center border-b py-2 md:w-2/5">
                                <label for="menberAccount">帳號：</label>
                                <input
                                    type="text"
                                    className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none "
                                    placeholder="Ab145gp12304"
                                    name="menberAccount"
                                />
                            </div>
                            <div className="items-center border-b py-2 md:w-2/5 text-white">
                                <label for="password">密碼：</label>
                                <input
                                    type="password"
                                    className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none "
                                    name="password"
                                />
                            </div>
                        </div>
                        <div className="items-center border-b py-2 mb-6 text-white">
                            <label for="email">信箱：</label>
                            <input
                                type="email"
                                className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none "
                                type="text"
                                placeholder="Ab145gp12304@test.com"
                                name="email"
                            />
                        </div>
                        <div className="items-center border-b py-2 mb-6 text-white">
                            <label for="phone">行動電話：</label>
                            <input
                                type="number"
                                className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none "
                                type="text"
                                placeholder="0900123456"
                                name="phone"
                            />
                        </div>
                        <div className="items-center border-b py-2 mb-6 text-white">
                            <label for="address">住家地址</label>
                            <input
                                type="text"
                                className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none "
                                type="text"
                                placeholder="台北市中山區羅斯福路9段201巷5弄20號3樓"
                                name="address"
                            />
                        </div>
                    </from>
                </div>
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl font-bold">
                    其他資料
                </div>

                <from>
                    <div className="text-white bg-gray-900 w-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                        <div className="flex flex-wrap mr-3 mb-6 justify-between">
                            <div className="items-center border-b py-2 md:w-2/5">
                                <label for="menberAccount">生日：</label>
                                <input
                                    type="date"
                                    className="ml-10 bg-gray-700 border-none  text-white mr-3 py-1 px-2 leading-tight focus:outline-none "
                                    name="menberAccount"
                                />
                            </div>
                            <div class="inline-block w-64">
                                <label for="gender">性別：</label>
                                <select
                                    name="gender"
                                    className="bg-transparent"
                                >
                                    <option className="text-black" value="null">
                                        保留
                                    </option>
                                    <option className="text-black" value="male">
                                        男性
                                    </option>
                                    <option
                                        className="text-black"
                                        value="female"
                                    >
                                        女性
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div classNmae="mt-10"></div>
                        <label>關於我：</label>
                        <textarea
                            class="w-full px-3 py-2 text-white border rounded-lg focus:outline-none bg-transparent"
                            rows="4"
                        ></textarea>
                        <div className="justify-center flex">
                            <button type="submit" className="btn-yellow">
                                更改個人資料
                            </button>
                        </div>
                    </div>
                </from>
            </artical>
        </main>
    );
}

export default Users;
