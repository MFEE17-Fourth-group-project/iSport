import React from 'react';
import { Link } from 'react-router-dom';

function ProgressBar() {
    return (
        <>
            <div>
                <div className="mx-4 p-4">
                    <div className="flex items-center">
                        <button className="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2 border-yellow-400 text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                            <h6 className="text-xl">
                                <Link to="/checkout">
                                    確認
                                    <br />
                                    訂單
                                </Link>
                            </h6>
                        </button>

                        <div className="flex-auto border-2 transition duration-500 ease-in-out border-yellow-400"></div>

                        <button className="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2 border-yellow-400 text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                            <h6 className="text-xl">
                                <Link to="/checkout2">結帳</Link>
                            </h6>
                        </button>

                        <div className="flex-auto border-2 transition duration-500 ease-in-out border-yellow-400"></div>

                        <button className="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2 border-yellow-400 text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                            <h6 className="text-xl">
                                <Link to="/finished">
                                    完成
                                    <br />
                                    訂單
                                </Link>
                            </h6>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgressBar;
