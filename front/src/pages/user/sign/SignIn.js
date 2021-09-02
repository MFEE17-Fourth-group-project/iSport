import React from 'react';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
function SignIn(props) {
    return (
        <div className="w-screen h-screen fixed z-0">
            <div
                className="w-full max-w-sm rounded justify-center flex-auto items-center transform -translate-y-1/2
                -translate-x-1/2 absolute z-20 absolute top-1/2 left-1/2"
            >
                <div className="bg-gray-900 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                    登入
                </div>
                <form className="bg-gray-700 shadow-md rounded-b-xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-white text-base font-bold mb-2"
                            htmlFor="account"
                        >
                            請輸入帳號：
                        </label>
                        <input
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                            id="account"
                            type="text"
                        />
                        <hr className="border-2 border-yellow-400" />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-white text-base font-bold mb-2"
                            htmlFor="password"
                        >
                            請輸入密碼：
                        </label>
                        <input
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                        <hr className="border-2 border-yellow-400" />
                        <Link to="/SearchPassword">
                            <a className="font-bold text-sm text-red-500 hover:text-red-800 justify-end flex mt-1 mb-1">
                                忘記密碼?
                            </a>
                        </Link>
                        <div className="flex items-center justify-center">
                            <Link to="/SignUp">
                                <button
                                    className="btn-green mr-10"
                                    type="button"
                                >
                                    註冊
                                </button>
                            </Link>
                            <Link to="/user">
                                <a className="btn-yellow" type="button">
                                    登入
                                </a>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div
                className="bg-black bg-opacity-50 w-screen h-screen fixed z-10"
                onClick={props.onCancel}
            ></div>
        </div>
    );
}
export default SignIn;
