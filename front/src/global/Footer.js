import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <>
            <footer className="footer-1 bg-gray-900 py-14">
                <div className="flex justify-center text-gray-900 mb-3.5">
                    <Link
                        to="#/"
                        className="w-11 h-11 border border-2 border-gray-400 rounded-full text-center py-1 mx-1 bg-white
                            bg-opacity-85 hover:bg-yellow-400 text-2xl flex justify-center items-center"
                    >
                        <FiInstagram />
                    </Link>
                    <Link
                        to="#/"
                        className="w-11 h-11 border border-2 border-gray-400 rounded-full text-center py-1 mx-1 bg-white
                            bg-opacity-85 hover:bg-yellow-400 text-2xl flex justify-center items-center"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        to="#/"
                        className="w-11 h-11 border border-2 border-gray-400 rounded-full text-center py-1 mx-1 bg-white
                            bg-opacity-85 hover:bg-yellow-400 text-2xl flex justify-center items-center"
                    >
                        <FaTwitter />
                    </Link>
                </div>
                <div className="flex justify-center text-white text-opacity-85 mb-3.5">
                    <div className="hover:text-yellow-400 cursor-pointer">
                        <Link to="/articles">文章</Link>
                    </div>
                    <div className="px-3">·</div>
                    <div className="hover:text-yellow-400 cursor-pointer">
                        <Link to="/products">商品</Link>
                    </div>
                    <div className="px-3">·</div>
                    <div className="hover:text-yellow-400 cursor-pointer">
                        <Link to="/video">影片</Link>
                    </div>
                </div>
                <div className="flex justify-center text-white text-opacity-85 mb-3.5">
                    <div className="hover:text-yellow-400 cursor-pointer">
                        <Link to="/">聯絡我們</Link>
                    </div>
                    <div className="px-3">·</div>
                    <div className="hover:text-yellow-400 cursor-pointer">
                        <Link to="/">關於我們</Link>
                    </div>
                </div>
                <div className="flex justify-center text-white text-opacity-85">
                    <p>Copyright © ISport! All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
