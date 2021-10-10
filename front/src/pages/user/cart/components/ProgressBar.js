import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

function ProgressBar(props) {
    const [currentLocation, setCurrentLocation] = useState(
        props.location.pathname
    );
    return (
        <>
            <div>
                <div className="sm:mx-4 mx-0 p-4">
                    <div className="flex items-center">
                        <Link to="/checkout">
                            <button
                                className={
                                    currentLocation === '/checkout' ||
                                    currentLocation === '/checkout2' ||
                                    currentLocation === '/finished'
                                        ? 'rounded-full sm:h-20 sm:w-20 h-16 w-16 sm:py-3 border-2 sm:text-xl border-yellow-400 bg-yellow-400 text-gray-900'
                                        : 'rounded-full transition duration-500 ease-in-out sm:h-20 sm:w-20 h-16 w-16 sm:py-3 border-2 border-yellow-400 sm:text-xl text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
                                }
                            >
                                確認
                                <br />
                                訂單
                            </button>
                        </Link>

                        <div className="flex-auto border-2 transition duration-500 ease-in-out border-yellow-400"></div>

                        <Link to="/checkout2">
                            <button
                                className={
                                    currentLocation === '/checkout2' ||
                                    currentLocation === '/finished'
                                        ? 'rounded-full sm:h-20 sm:w-20 h-16 w-16 sm:py-3 border-2 sm:text-xl border-yellow-400 bg-yellow-400 text-gray-900'
                                        : 'rounded-full transition duration-500 ease-in-out sm:h-20 sm:w-20 h-16 w-16 sm:py-3 border-2 border-yellow-400 sm:text-xl text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
                                }
                            >
                                結帳
                            </button>
                        </Link>

                        <div className="flex-auto border-2 transition duration-500 ease-in-out border-yellow-400"></div>

                        <Link to="/finished">
                            <button
                                className={
                                    currentLocation === '/finished'
                                        ? 'rounded-full h-16 w-16 border-2 sm:h-20 sm:w-20 sm:py-3 sm:text-xl border-yellow-400 bg-yellow-400 text-gray-900'
                                        : 'rounded-full transition duration-500 ease-in-out sm:h-20 sm:w-20 h-16 w-16 sm:py-3 border-2 border-yellow-400 sm:text-xl text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
                                }
                            >
                                完成
                                <br />
                                訂單
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(ProgressBar);
