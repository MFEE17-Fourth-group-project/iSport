import React from 'react';
import product from '../../../images/product/1002-3.png';
import userHeader from '../../../images/user/pic04.jpg';
import { Link } from 'react-router-dom';

import {
    FaComment,
    FaMoneyCheck,
    FaShoppingCart,
    FaUserAlt,
    FaAngleUp,
    FaFilter,
    FaSearch,
    FaMinus,
    FaHeart,
} from 'react-icons/fa';

function FavouriteProduct() {
    return (
        <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
            <aside className="w-64 mr-2.5 bg-gray-900 rounded-lg shadow-xl">
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
            <artical className="flex-grow flex-col rounded-lg overflow-hidden">
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl font-bold">
                    我的最愛
                </div>
                <div className="text-white bg-gray-900 w-full h-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                    {/* filter */}
                    <div className="flex justify-between">
                        <div className="flex">
                            <button className="flex items-center items-center btn-yellow-sm mr-2">
                                <div>價格</div>
                                <FaAngleUp className="ml-1 text-xl" />
                            </button>
                            <div className="">
                                <select className="w-44  border-b-2 border-yellow-400 bg-gray-900 py-1 outline-none text-white">
                                    <option>所有分類</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                    <option>F</option>
                                </select>
                            </div>
                        </div>

                        <div className=" bg-gray-700 rounded-full flex justify-between  items-center px-4">
                            <input
                                className="w-52  bg-transparent outline-none border-none flex-grow placeholder-gray-700::placeholder text-white "
                                placeholder="關鍵字..."
                            />
                            <FaSearch className="text-white text-xl cursor-pointer" />
                        </div>
                    </div>
                    {/* product */}
                    <section className="my-5 grid grid-cols-3 gap-4">
                        {/* 卡片 */}
                        <Link to="/product/item">
                            <div>
                                <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 relative">
                                    <img
                                        className="w-full"
                                        src={product}
                                        alt="Mountain"
                                    />
                                    <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                        <div className=" text-lg mb-2 text-yellow-400">
                                            15 分鐘高强度全身肌肉
                                            無需器材又能在家做的運動
                                        </div>
                                        <div className="text-white flex justify-between">
                                            <div>$350</div>
                                            <div>
                                                已出售 <span>100</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div>
                            <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 relative">
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="Mountain"
                                />
                                <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                    <div className=" text-lg mb-2 text-yellow-400">
                                        15 分鐘高强度全身肌肉
                                        無需器材又能在家做的運動
                                    </div>
                                    <div className="text-white flex justify-between">
                                        <div>$350</div>
                                        <div>
                                            已出售 <span>100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 relative">
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="Mountain"
                                />
                                <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                    <div className=" text-lg mb-2 text-yellow-400">
                                        15 分鐘高强度全身肌肉
                                        無需器材又能在家做的運動
                                    </div>
                                    <div className="text-white flex justify-between">
                                        <div>$350</div>
                                        <div>
                                            已出售 <span>100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 relative">
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="Mountain"
                                />
                                <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                    <div className=" text-lg mb-2 text-yellow-400">
                                        15 分鐘高强度全身肌肉
                                        無需器材又能在家做的運動
                                    </div>
                                    <div className="text-white flex justify-between">
                                        <div>$350</div>
                                        <div>
                                            已出售 <span>100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 relative">
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="Mountain"
                                />
                                <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                    <div className=" text-lg mb-2 text-yellow-400">
                                        15 分鐘高强度全身肌肉
                                        無需器材又能在家做的運動
                                    </div>
                                    <div className="text-white flex justify-between">
                                        <div>$350</div>
                                        <div>
                                            已出售 <span>100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 relative">
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="Mountain"
                                />
                                <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                    <div className=" text-lg mb-2 text-yellow-400">
                                        15 分鐘高强度全身肌肉
                                        無需器材又能在家做的運動
                                    </div>
                                    <div className="text-white flex justify-between">
                                        <div>$350</div>
                                        <div>
                                            已出售 <span>100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 relative">
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="Mountain"
                                />
                                <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                    <div className=" text-lg mb-2 text-yellow-400">
                                        15 分鐘高强度全身肌肉
                                        無需器材又能在家做的運動
                                    </div>
                                    <div className="text-white flex justify-between">
                                        <div>$350</div>
                                        <div>
                                            已出售 <span>100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div></div>
                </div>
            </artical>
        </main>
    );
}

export default FavouriteProduct;