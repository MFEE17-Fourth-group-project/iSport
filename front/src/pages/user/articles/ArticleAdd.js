import React from 'react';
import { Link } from 'react-router-dom';
import userHeader from '../../images/user/pic04.jpg';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

function ArticleAdd() {
    return (
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
            {/* ==================== */}
            <artical className="flex-grow flex-col">
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                    新增文章
                </div>
                <div className="text-white bg-gray-900 w-full h-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                    <from>
                        <label className="">作者：</label>
                        <span className="text-base text-red-500 mx-4">
                            必填
                        </span>
                        <br />
                        <input
                            type="text"
                            className="w-full bg-gray-900 border-b-2  p-4 my-4"
                            name="article_name"
                            id="article_name"
                            placeholder="最多50字"
                        ></input>
                        <br />
                        <label>分類：</label>
                        <br />
                        <select
                            name="category"
                            id="category"
                            className="w-full bg-gray-900 border-b-2  p-4 my-4"
                        >
                            <option value="1">有氧</option>
                            <option value="2">重訓</option>
                            <option value="3">tabata</option>
                            <option value="4">核心</option>
                            <option value="5">飲食</option>
                        </select>
                        <br />
                        <label>標題：</label>
                        <span className="text-base text-red-500 mx-4">
                            必填
                        </span>
                        <br />
                        <input
                            type="text"
                            className="w-full bg-gray-900 border-b-2  p-4 my-4"
                            name="added_by"
                            id="added_by"
                            placeholder="最多100字"
                        />
                        <br />
                        <label for="">上傳圖片:</label>
                        <br />
                        <input
                            className="w-full bg-gray-900 border-b-2  p-4 my-4"
                            type="file"
                            name="file"
                            id="file"
                        />
                        <br />
                        <label>內容：</label>
                        <span className="text-base text-red-500	 mx-4">
                            必填
                        </span>
                        <br />
                        <div id="toolbar-container"></div>
                        <div id="editor"></div>
                        <textarea
                            name="content"
                            id="content"
                            className="w-full bg-gray-900 border-b-2  p-10 my-4"
                        ></textarea>
                        <div className="flex flex-row justify-end">
                            <Link to="">
                                <button
                                    className="btn-yellow flex flex-row justify-end items-center"
                                    type="submit"
                                    id="button"
                                >
                                    <p className="font-bold text-xl mx-2">
                                        新增
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </from>
                </div>
            </artical>
        </main>
    );
}

export default ArticleAdd;
