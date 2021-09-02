import React from 'react';
import { Link } from 'react-router-dom';
import { Aside } from '../../../global/Aside';

function CustomerService(props) {
    return (
        <div className="w-screen h-screen fixed top-8 left-0 z-50">
            <form
                className="w-full max-w-screen-sm rounded justify-center items-center transform -translate-y-1/2
                    -translate-x-1/2 absolute z-20 absolute top-1/2 left-1/2 overflow-y-auto"
            >
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-2xl rounded-t-xl font-bold top-0 left-0">
                    聯絡我們
                </div>
                <div className="bg-gray-500 py-5 px-3 text-white text-opacity-85 text-base  font-bold ">
                    <label
                        className="block text-white text-base font-bold mb-2 mt-5"
                        htmlFor="account"
                    >
                        請輸入帳號：
                    </label>
                    <input
                        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        id="account"
                        type="text"
                    />
                    <hr className="border-1 border-yellow-400 mb-10" />
                    <label
                        className="block text-white text-base font-bold mb-2"
                        for="email"
                    >
                        請輸入註冊信箱：
                    </label>
                    <input
                        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        id="email"
                        type="email"
                    />
                    <hr className="border-1 border-yellow-400 mb-5" />
                    <label htmlFor="type">種類：</label>
                    <div className="ml-12 justify-between flex text-base mb-5">
                        <div>
                            <input
                                type="radio"
                                className=""
                                name="type"
                                value="equity"
                            />
                            會員權益
                        </div>
                        <div>
                            <input
                                type="radio"
                                className=""
                                name="type"
                                value="order"
                            />
                            訂單相關
                        </div>
                        <div>
                            <input
                                type="radio"
                                className=""
                                name="type"
                                value="video"
                            />
                            影片相關
                        </div>
                        <div>
                            <input
                                type="radio"
                                className=""
                                name="type"
                                value="articles"
                            />
                            文章相關
                        </div>
                        <div>
                            <input
                                type="radio"
                                className=""
                                name="type"
                                value="others"
                            />
                            其他
                        </div>
                    </div>
                    <label htmlFor="memo" className="block mb-5">
                        意見：
                    </label>
                    <div className="flex justify-center">
                        <textarea
                            className="block bg-transparent  border border-yellow-400 mb-5 focus:outline-none"
                            name="memo"
                            placeholder="請輸入您的內容"
                            cols="70"
                            rows="10"
                        ></textarea>
                    </div>

                    <div className="flex justify-center ">
                        <button
                            className="btn-green mr-5"
                            onClick={props.onCancel}
                        >
                            返回
                        </button>
                        <button className="btn-yellow" type="submit">
                            送出
                        </button>
                    </div>
                </div>
            </form>
            <div
                className="bg-black bg-opacity-50 w-screen h-screen fixed z-10"
                onClick={props.onCancel}
            ></div>
        </div>
    );
}
export default CustomerService;
