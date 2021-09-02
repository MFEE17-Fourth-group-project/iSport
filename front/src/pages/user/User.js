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

            <artical className="flex-grow flex-col">
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85  rounded-t-xl user-page-title">
                    基本資料
                    <span className="text-base text-red-500	">(必填)</span>
                </div>
                <div className="text-white bg-gray-900 w-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                    <from>
                        <br />
                        <div className="items-center  py-2">
                            <label for="menberName">暱稱：</label>
                            <input
                                type="text"
                                className="input-style "
                                placeholder="小咪"
                                aria-label="Full name"
                                name="menberName"
                            />
                        </div>
                        <br />
                        <div className="lg:flex lg:flex-wrap mr-3 mb-6 lg:justify-between text-white">
                            <div className="lg:items-center lg:py-2 lg:w-2/5 text-white mt-5 mb-5 relative">
                                <label for="menberAccount">帳號：</label>
                                <input
                                    type="text"
                                    className="input-style lg:items-center  border-b "
                                    placeholder="Ab145gp12304 "
                                    name="menberAccount"
                                    disabled
                                />
                                <p className="flex text-red-700 text-sm absolute  right-0 bottom-3">
                                    不可修改
                                </p>
                            </div>

                            <div className="lg:items-center lg:py-2 lg:w-2/5 text-white mt-5 mb-5">
                                <label for="password">密碼：</label>
                                <input
                                    type="password"
                                    className="input-style lg:items-center  border-b"
                                    name="password"
                                />
                            </div>
                        </div>
                        <div className="mt-5 mb-5">
                            <label for="email">信箱：</label>
                            <input
                                type="email"
                                className="input-style "
                                placeholder="Ab145gp12304@test.com"
                                name="email"
                            />
                        </div>
                        <div className=" mt-5 mb-5">
                            <label for="phone">行動電話：</label>
                            <input
                                type="phone"
                                className="input-style"
                                placeholder="0900123456"
                                name="phone"
                            />
                        </div>
                        <div className="mt-5 mb-5">
                            <label for="address">住家地址</label>
                            <input
                                type="text"
                                className="input-style "
                                placeholder="台北市中山區羅斯福路9段201巷5弄20號3樓"
                                name="address"
                            />
                        </div>
                    </from>
                </div>
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title">
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
                            <div class="xl:inline-block xl:w-64 mt-5">
                                <label for="gender">性別：</label>
                                <select
                                    name="gender"
                                    className="bg-transparent border-2 border-gray-700 w-40"
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
