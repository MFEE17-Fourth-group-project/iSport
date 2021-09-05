import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductNav(props) {
    const { url, setUrl } = props;
    // console.log(props);
    return (
        <>
            <nav className="bg-gray-900 flex justify-center text-sm sm:text-base">
                <Link to="/products/allProduct">
                    <div
                        onClick={() => {
                            setUrl(1);
                        }}
                        className="flex-1  sm:flex-initial border-b-2 border-transparent hover:border-yellow-400 w-36 text-white text-center py-5"
                    >
                        所有商品
                    </div>
                </Link>
                <Link to="/products/clothe">
                    <div
                        onClick={() => {
                            setUrl(2);
                        }}
                        className="flex-1  sm:flex-initial border-b-2 border-transparent hover:border-yellow-400 w-36 text-white text-center py-5"
                    >
                        運動服飾
                    </div>
                </Link>
                <Link to="/products/shoes">
                    <div
                        onClick={() => {
                            setUrl(3);
                        }}
                        className="flex-1  sm:flex-initial border-b-2 border-transparent hover:border-yellow-400 w-36 text-white text-center py-5"
                    >
                        運動鞋類
                    </div>
                </Link>
                <Link to="/products/equipment">
                    <div
                        onClick={() => {
                            setUrl(4);
                        }}
                        className="flex-1  sm:flex-initial border-b-2 border-transparent hover:border-yellow-400 w-36 text-white text-center py-5"
                    >
                        健身器材
                    </div>
                </Link>
                <Link to="/products/food">
                    <div
                        onClick={() => {
                            setUrl(5);
                        }}
                        className="flex-1  sm:flex-initial border-b-2 border-transparent hover:border-yellow-400 w-36 text-white text-center py-5"
                    >
                        營養補給
                    </div>
                </Link>
            </nav>
        </>
    );
}

export default ProductNav;
