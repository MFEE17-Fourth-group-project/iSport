import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import CustomerService from '../pages/user/sign/CustomerService';

function Footer() {
    const [CustomerServiceWindow, setCustomerServiceWindow] = useState(false);
    const handleCustomerService = () => {
        setCustomerServiceWindow(true);
    };

    const handleCancel = () => {
        setCustomerServiceWindow(false);
    };
    return (
        <>
            {CustomerServiceWindow && (
                <CustomerService onCancel={handleCancel} />
            )}
            <footer className="footer-1 bg-gray-900 py-14">
                <div className="flex justify-center text-gray-900 mb-3.5">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 border border-2 border-gray-400 rounded-full text-center py-1 mx-1 bg-white
                            bg-opacity-85 hover:bg-yellow-400 text-2xl flex justify-center items-center"
                    >
                        <FiInstagram />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 border border-2 border-gray-400 rounded-full text-center py-1 mx-1 bg-white
                            bg-opacity-85 hover:bg-yellow-400 text-2xl flex justify-center items-center"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 border border-2 border-gray-400 rounded-full text-center py-1 mx-1 bg-white
                            bg-opacity-85 hover:bg-yellow-400 text-2xl flex justify-center items-center"
                    >
                        <FaTwitter />
                    </a>
                </div>
                <div className="flex justify-center text-white text-opacity-85 mb-3.5">
                    <div className="hover:text-yellow-400 cursor-pointer">
                        <Link to="/articles">??????</Link>
                    </div>
                    <div className="px-3">??</div>
                    <div className="hover:text-yellow-400 cursor-pointer">
                        <Link to="/products/allProduct">??????</Link>
                    </div>
                    <div className="px-3">??</div>
                    <div className="hover:text-yellow-400 cursor-pointer">
                        <Link to="/video">??????</Link>
                    </div>
                </div>
                <div className="flex justify-center text-white text-opacity-85 mb-3.5">
                    <div
                        className="hover:text-yellow-400 cursor-pointer"
                        onClick={handleCustomerService}
                    >
                        <Link to="/">????????????</Link>
                    </div>
                    {/* <div className="px-3">??</div> */}
                    {/* <div className="hover:text-yellow-400 cursor-pointer">
                        <Link to="/">????????????</Link>
                    </div> */}
                </div>
                <div className="flex justify-center text-white text-opacity-85 mb-5">
                    <p>Copyright ?? ISport! All rights reserved.</p>
                </div>
                <div className="flex justify-center text-center text-xs text-gray-500 text-opacity-85">
                    <p>
                        ???????????????????????????????????????????????????MFEE17???????????????????????????????????????????????????????????????????????????
                        <br />
                        ?????????????????????????????????????????? -
                        ??????????????????????????????????????????(MFEE17)????????????????????????????????????
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
