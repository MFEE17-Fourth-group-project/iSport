import React from 'react';
import { Link } from 'react-router-dom';

function ProgressBar() {
    return (
        <>
            <div>
                <div className="sm:mx-4 mx-0 p-4">
                    <div className="flex items-center">
                        <button className="rounded-full transition duration-500 ease-in-out sm:h-20 sm:w-20 h-16 w-16 sm:py-3 border-2 border-yellow-400 sm:text-xl text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                            <Link to="/checkout">
                                確認
                                <br />
                                訂單
                            </Link>
                        </button>

                        <div className="flex-auto border-2 transition duration-500 ease-in-out border-yellow-400"></div>

                        <button className="rounded-full transition duration-500 ease-in-out sm:h-20 sm:w-20 h-16 w-16 py-3 border-2 border-yellow-400 sm:text-xl text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                            <Link to="/checkout2">結帳</Link>
                        </button>

                        <div className="flex-auto border-2 transition duration-500 ease-in-out border-yellow-400"></div>

                        <button className="rounded-full transition duration-500 ease-in-out sm:h-20 sm:w-20 h-16 w-16 sm:py-3 border-2 border-yellow-400 sm:text-xl text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                            <Link to="/finished">
                                完成
                                <br />
                                訂單
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgressBar;
