import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
            <artical className="flex-grow flex-col">
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                    基本資料
                    <span className="text-base text-red-500	">(必填)</span>
                </div>
                <div className="text-white bg-gray-900 w-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                    <from>
                        <br />
                        <div>
                            <label for="menberName">姓名：</label>
                            <input
                                type="text"
                                className="input-style "
                                placeholder="請輸入姓名"
                                name="menberName"
                                required
                            />
                        </div>
                        <br />
                        <div className="lg:flex lg:flex-wrap mr-3 mb-6 lg:justify-between text-white">
                            <div className="lg:items-center lg:py-2 lg:w-2/5 text-white mt-5 mb-5">
                                <label for="menberAccount">帳號：</label>
                                <input
                                    type="text"
                                    className="input-style"
                                    placeholder="請輸入帳號"
                                    name="menberAccount"
                                    required
                                />
                            </div>
                            <div className="lg:items-center lg:py-2 lg:w-2/5 text-white mt-5 mb-5">
                                <label for="password">密碼：</label>
                                <input
                                    type="password"
                                    placeholder="請輸入6-8位英數密碼"
                                    className="input-style"
                                    name="password"
                                />
                            </div>
                        </div>
                        <div className="py-2 mb-5">
                            <label for="email">信箱：</label>
                            <input
                                type="email"
                                className="input-style "
                                placeholder="請輸入信箱"
                                name="email"
                                required
                            />
                        </div>
                        <div className=" py-2 mb-5">
                            <label for="phone">行動電話：</label>
                            <input
                                type="phone"
                                className="input-style "
                                placeholder="請輸入行動電話09xx-xxx-xxx"
                                name="phone"
                                required
                            />
                        </div>
                        <div className="py-2 mb-5">
                            <label for="address">住家地址</label>
                            <input
                                type="text"
                                className="input-style"
                                placeholder="請輸入地址    ex:台北市中山區羅斯福路x段x巷x弄x號x樓"
                                name="address"
                                required
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
                            className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none bg-transparent"
                            rows="4"
                        ></textarea>
                        <div className="justify-center flex">
                            <Link to="/">
                                <button
                                    className="btn-green mr-10"
                                    type="button"
                                >
                                    返回
                                </button>
                            </Link>
                            <button type="submit" className="btn-yellow">
                                註冊
                            </button>
                        </div>
                    </div>
                </from>
            </artical>
        </main>
    );
}

export default SignUp;
