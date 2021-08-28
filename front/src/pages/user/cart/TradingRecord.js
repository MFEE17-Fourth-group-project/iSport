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

function TradingRecord() {
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
            <artical className="flex-grow flex-col rounded-lg overflow-hidden text-white text-opacity-85 shadow-2xl ">
                <div className="bg-gray-700 pl-5 py-5 text-3xl font-bold">
                    購買紀錄
                </div>
                <section className="my-2.5 p-4 leading-relaxed border-2 border-yellow-400">
                    <h6 className="text-xl ">注意事項：</h6>
                    <p>
                        1.產品均享有10天猶豫期之權益(注意！猶豫期非試用期)，若退/換回產品非全新狀態且包裝完整，將影響您的退貨權益及需負擔回復原狀責任。
                        <br />
                        2.個人衛生之商品暫不提供退/換貨，其它商品僅限換貨1次。
                        <br />
                        3.若無法線上操作，請與我們聯絡。
                    </p>
                    <h6 className="text-xl ">退/換貨規範：</h6>
                    <p>
                        1.取消訂單，若有多個商品於同張訂單時，須同單其他商品一同取消、退貨。
                        <br />
                        2.限定配送狀態為『已送達』，且為同一品號之商品，方可進行換貨服務。
                    </p>
                </section>
                {/* 選取時間 */}
                <div className="my-4 mx-auto flex items-center justify-between border-b-2 border-yellow-400 w-96">
                    <input
                        type="date"
                        className="outline-none bg-transparent"
                    />
                    <span>至</span>
                    <input
                        type="date"
                        className="outline-none bg-transparent"
                    />
                    <FaSearch className=" text-xl" />
                </div>
                <section className="text-white bg-gray-900 w-full h-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10 ">
                    {/* 購買紀錄卡片 */}
                    <div className="mb-8  p-4 rounded-lg bg-gray-700 border-r-8 border-yellow-400 flex">
                        <figure className="mr-4 w-32 h-32 overflow-hidden rounded-lg">
                            <img
                                src={product}
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <div className="text-sm py-2  flex-grow grid grid-flow-col grid-cols-3 grid-rows-4 gap-y-px">
                            <p>
                                訂單編號：<span>123456789</span>
                            </p>
                            <p>
                                商品名稱：<span>居家健身組</span>
                            </p>
                            <p>
                                商品價格：<span>250元</span>
                            </p>
                            <p>
                                購買數量：<span>1</span>
                            </p>
                            <p>
                                商品顏色：<span>紅色</span>
                            </p>
                            <p>
                                商品尺寸：<span>無</span>
                            </p>
                            <p>
                                付款方式：<span>信用卡</span>
                            </p>
                            <p>
                                運送方式：<span>宅配</span>
                            </p>
                            <p>
                                購買時間：<span>2021-08-08</span>
                            </p>
                            <p>
                                送達時間：<span>2021-08-09</span>
                            </p>
                        </div>
                    </div>
                    <div className="mb-8  p-4 rounded-lg bg-gray-700 border-r-8 border-yellow-400 flex">
                        <figure className="mr-4 w-32 h-32 overflow-hidden rounded-lg">
                            <img
                                src={product}
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <div className="text-sm py-2  flex-grow grid grid-flow-col grid-cols-3 grid-rows-4 gap-y-px">
                            <p>
                                訂單編號：<span>123456789</span>
                            </p>
                            <p>
                                商品名稱：<span>居家健身組</span>
                            </p>
                            <p>
                                商品價格：<span>250元</span>
                            </p>
                            <p>
                                購買數量：<span>1</span>
                            </p>
                            <p>
                                商品顏色：<span>紅色</span>
                            </p>
                            <p>
                                商品尺寸：<span>無</span>
                            </p>
                            <p>
                                付款方式：<span>信用卡</span>
                            </p>
                            <p>
                                運送方式：<span>宅配</span>
                            </p>
                            <p>
                                購買時間：<span>2021-08-08</span>
                            </p>
                            <p>
                                送達時間：<span>2021-08-09</span>
                            </p>
                        </div>
                    </div>
                    <div className="mb-8  p-4 rounded-lg bg-gray-700 border-r-8 border-yellow-400 flex">
                        <figure className="mr-4 w-32 h-32 overflow-hidden rounded-lg">
                            <img
                                src={product}
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <div className="text-sm py-2  flex-grow grid grid-flow-col grid-cols-3 grid-rows-4 gap-y-px">
                            <p>
                                訂單編號：<span>123456789</span>
                            </p>
                            <p>
                                商品名稱：<span>居家健身組</span>
                            </p>
                            <p>
                                商品價格：<span>250元</span>
                            </p>
                            <p>
                                購買數量：<span>1</span>
                            </p>
                            <p>
                                商品顏色：<span>紅色</span>
                            </p>
                            <p>
                                商品尺寸：<span>無</span>
                            </p>
                            <p>
                                付款方式：<span>信用卡</span>
                            </p>
                            <p>
                                運送方式：<span>宅配</span>
                            </p>
                            <p>
                                購買時間：<span>2021-08-08</span>
                            </p>
                            <p>
                                送達時間：<span>2021-08-09</span>
                            </p>
                        </div>
                    </div>
                    <div className="mb-8  p-4 rounded-lg bg-gray-700 border-r-8 border-yellow-400 flex">
                        <figure className="mr-4 w-32 h-32 overflow-hidden rounded-lg">
                            <img
                                src={product}
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <div className="text-sm py-2  flex-grow grid grid-flow-col grid-cols-3 grid-rows-4 gap-y-px">
                            <p>
                                訂單編號：<span>123456789</span>
                            </p>
                            <p>
                                商品名稱：<span>居家健身組</span>
                            </p>
                            <p>
                                商品價格：<span>250元</span>
                            </p>
                            <p>
                                購買數量：<span>1</span>
                            </p>
                            <p>
                                商品顏色：<span>紅色</span>
                            </p>
                            <p>
                                商品尺寸：<span>無</span>
                            </p>
                            <p>
                                付款方式：<span>信用卡</span>
                            </p>
                            <p>
                                運送方式：<span>宅配</span>
                            </p>
                            <p>
                                購買時間：<span>2021-08-08</span>
                            </p>
                            <p>
                                送達時間：<span>2021-08-09</span>
                            </p>
                        </div>
                    </div>
                    <div className="mb-8  p-4 rounded-lg bg-gray-700 border-r-8 border-yellow-400 flex">
                        <figure className="mr-4 w-32 h-32 overflow-hidden rounded-lg">
                            <img
                                src={product}
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <div className="text-sm py-2  flex-grow grid grid-flow-col grid-cols-3 grid-rows-4 gap-y-px">
                            <p>
                                訂單編號：<span>123456789</span>
                            </p>
                            <p>
                                商品名稱：<span>居家健身組</span>
                            </p>
                            <p>
                                商品價格：<span>250元</span>
                            </p>
                            <p>
                                購買數量：<span>1</span>
                            </p>
                            <p>
                                商品顏色：<span>紅色</span>
                            </p>
                            <p>
                                商品尺寸：<span>無</span>
                            </p>
                            <p>
                                付款方式：<span>信用卡</span>
                            </p>
                            <p>
                                運送方式：<span>宅配</span>
                            </p>
                            <p>
                                購買時間：<span>2021-08-08</span>
                            </p>
                            <p>
                                送達時間：<span>2021-08-09</span>
                            </p>
                        </div>
                    </div>
                    <div className="mb-8  p-4 rounded-lg bg-gray-700 border-r-8 border-yellow-400 flex">
                        <figure className="mr-4 w-32 h-32 overflow-hidden rounded-lg">
                            <img
                                src={product}
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <div className="text-sm py-2  flex-grow grid grid-flow-col grid-cols-3 grid-rows-4 gap-y-px">
                            <p>
                                訂單編號：<span>123456789</span>
                            </p>
                            <p>
                                商品名稱：<span>居家健身組</span>
                            </p>
                            <p>
                                商品價格：<span>250元</span>
                            </p>
                            <p>
                                購買數量：<span>1</span>
                            </p>
                            <p>
                                商品顏色：<span>紅色</span>
                            </p>
                            <p>
                                商品尺寸：<span>無</span>
                            </p>
                            <p>
                                付款方式：<span>信用卡</span>
                            </p>
                            <p>
                                運送方式：<span>宅配</span>
                            </p>
                            <p>
                                購買時間：<span>2021-08-08</span>
                            </p>
                            <p>
                                送達時間：<span>2021-08-09</span>
                            </p>
                        </div>
                    </div>
                </section>
            </artical>
        </main>
    );
}

export default TradingRecord;
