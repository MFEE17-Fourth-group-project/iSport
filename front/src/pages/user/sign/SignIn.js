import React from 'react';

function SignIn() {
    return (
        <div className="w-full max-w-sm rounded justify-center flex-auto items-center">
            <div className="bg-gray-900 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold ">
                登入
            </div>
            <form className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block text-white text-base font-bold mb-2"
                        for="username"
                    >
                        請輸入帳號：
                    </label>
                    <input
                        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        id="username"
                        type="text"
                    />
                    <hr className="border-2 border-yellow-400" />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-white text-base font-bold mb-2"
                        for="password"
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

                    <a
                        className="font-bold text-sm text-red-500 hover:text-red-800 justify-end flex mt-1 mb-1"
                        href="#"
                    >
                        忘記密碼?
                    </a>
                    <div className="flex items-center justify-center">
                        <button className="btn-green mr-10" type="button">
                            註冊
                        </button>
                        <button className="btn-yellow" type="button">
                            登入
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default SignIn;
