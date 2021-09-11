import React from 'react';
// 要導入資鏈結還沒導入

import axios from 'axios';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaTimesCircle } from 'react-icons/fa';

function SignIn(props) {
    // 控制取得帳號密碼值
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    //控制handleSumbit
    // const handleSubmit = async (e) => {
    //     e.prevenntDefault();
    //     let result = await axios.post(`${API_URL}/Signin`, {
    //         account,
    //         password,
    //     });
    //     console.log(result);
    // };

    // 控制密碼顯示隱藏
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
        <form
            className="w-screen h-screen fixed z-0" /*onSubmit={handleSubmit}*/
        >
            <div
                className="w-full max-w-sm rounded justify-center flex-auto items-center transform -translate-y-1/2
                -translate-x-1/2 z-20 absolute top-1/2 left-1/2"
            >
                <div className="bg-gray-900 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold relative">
                    登入
                    <FaTimesCircle
                        className="userIcons absolute flex right-0 cursor-pointer"
                        onClick={props.onCancel}
                    />
                </div>
                <form className="bg-gray-700 shadow-md rounded-b-xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-white text-base font-bold mb-2"
                            htmlFor="account"
                        >
                            帳號：
                        </label>
                        <input
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                            id="account"
                            type="text"
                            placeholder="請輸入帳號"
                            value={account}
                            onChange={(e) => {
                                setAccount(e.target.value);
                            }}
                        />
                        <hr className="border-2 border-yellow-400" />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-white text-base font-bold mb-2 "
                            htmlFor="password"
                        >
                            密碼：
                        </label>
                        <input
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none relative"
                            placeholder="請輸入密碼"
                            id="password"
                            name="password"
                            type={passwordShown ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <i
                            onClick={togglePasswordVisiblity}
                            className="eyesposition"
                        >
                            <FaEye className="userIcons hover:text-green-400" />
                        </i>
                        <hr className="border-2 border-yellow-400" />
                        <Link to="/SearchPassword">
                            <button
                                className="font-bold text-sm text-red-500 hover:text-red-800 justify-end flex mt-1 mb-1"
                                onClick={props.onCancel}
                            >
                                忘記密碼?
                            </button>
                        </Link>
                        <div className="flex items-center justify-center">
                            <Link to="/SignUp">
                                <button
                                    className="btn-green mr-10"
                                    type="button"
                                    onClick={props.onCancel}
                                >
                                    註冊
                                </button>
                            </Link>
                            <Link to="/user">
                                <button
                                    className="btn-yellow"
                                    type="button"
                                    onClick={props.onCancel}
                                >
                                    登入
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div
                className="bg-black bg-opacity-50 w-screen h-screen fixed z-10"
                onClick={props.onCancel}
            ></div>
        </form>
    );
}
export default SignIn;
