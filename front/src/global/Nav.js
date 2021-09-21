import Logo from '../images/biceps.svg';
import SignIn from '../pages/user/sign/SignIn';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import { HiMenu } from 'react-icons/hi';
import userHeader from '../images/user/pic04.jpg';
import MobileAside from './MobileAside';

function Nav(props) {
    const [signInWindow, setSignInWindow] = useState(false);

    const handleSignIn = () => {
        setSignInWindow(true);
    };

    const handleCancel = () => {
        setSignInWindow(false);
    };

    return (
        <>
            <nav className="App sticky top-0 z-40">
                <div className="bg-gray-900 px-4 py-1.5 flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            width="40"
                            alt="Logo"
                            className="my-1 "
                        />
                        <Link
                            to="/"
                            className="sm:text-3xl text-2xl text-white text-opacity-70 sm:mx-4 mx-2"
                        >
                            iSport!
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" id="nav-toggle" />
                        <label
                            for="nav-toggle"
                            className="lg:hidden w-12 h-12 rounded-full bg-white overflow-hidden mr-2"
                        >
                            <img
                                src={userHeader}
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </label>
                        <MobileAside />
                        <button
                            className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase text-base sm:px-3.5 px-2.5 py-1 mr-2 rounded-full outline-none ease-linear transition-all duration-150"
                            onClick={handleSignIn}
                        >
                            登入
                        </button>
                        <Link to="/video">
                            <p className="hidden xl:block text-white text-opacity-85 mx-4 hover:text-yellow-400">
                                精選影片
                            </p>
                        </Link>
                        <Link to="/products/allProduct">
                            <p className="hidden xl:block text-white text-opacity-85 mx-4 hover:text-yellow-400">
                                多樣商品
                            </p>
                        </Link>
                        <Link to="/articles">
                            <p className="hidden xl:block text-white text-opacity-85 mx-4 hover:text-yellow-400">
                                優質文章
                            </p>
                        </Link>
                        <Link
                            to="/gym"
                            className="hidden xl:block text-white text-opacity-85 mx-4 hover:text-yellow-400"
                        >
                            健身房
                        </Link>
                        <Link
                            to="/user/cart"
                            className="text-white text-opacity-85 sm:mx-4 mx-0 relative"
                        >
                            <p className="hover:text-yellow-400">購物車</p>
                            <div className="absolute -right-3 -top-2 bg-red-600 w-5 h-5 rounded-full text-center text-xs pt-0.5">
                                1
                            </div>
                        </Link>
                    </div>
                </div>
                {signInWindow && <SignIn onCancel={handleCancel} />}
            </nav>
            <nav className="xl:hidden fixed bottom-0 z-50 w-full bg-gray-900 flex justify-center items-center text-center">
                <Link className="flex-1" to="/video">
                    <p className="text-white text-opacity-85 hover:text-yellow-400 hover:bg-gray-700 py-4">
                        精選影片
                    </p>
                </Link>
                <Link className="flex-1" to="/products/allProduct">
                    <p className="text-white text-opacity-85 hover:text-yellow-400 hover:bg-gray-700 py-4">
                        多樣商品
                    </p>
                </Link>
                <Link className="flex-1" to="/articles">
                    <p className="text-white text-opacity-85 hover:text-yellow-400 hover:bg-gray-700 py-4">
                        優質文章
                    </p>
                </Link>
                <Link className="flex-1" to="/gym">
                    <p className="text-white text-opacity-85 hover:text-yellow-400 hover:bg-gray-700 py-4">
                        健身房
                    </p>
                </Link>
            </nav>
        </>
    );
}

export default Nav;
