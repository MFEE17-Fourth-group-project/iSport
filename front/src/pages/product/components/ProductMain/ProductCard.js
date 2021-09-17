import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function ProductCard(props) {
    const { productName, brand, category, price, sale, photo, like } = props;
    const productPhotoUrl = require('../../../../images/product/' + photo);
    // console.log(productPhotoUrl);
    return (
        <>
            <div>
                <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                    <div className="w-full py-1 flex justify-between items-center absolute">
                        <div className="text-xs sm:text-sm text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-1.5 py-0">
                            New
                        </div>
                        {like ? (
                            <>
                                <FaRegHeart className="pr-3 text-3xl sm:text-4xl text-red-300 cursor-pointer hidden" />
                                <FaHeart className="pr-3 text-3xl sm:text-4xl text-red-300 cursor-pointer" />
                            </>
                        ) : (
                            <>
                                <FaRegHeart className="pr-3 text-3xl sm:text-4xl text-red-300 cursor-pointer " />
                                <FaHeart className="pr-3 text-3xl sm:text-4xl text-red-300 cursor-pointer hidden" />
                            </>
                        )}
                    </div>
                    <Link to="/product/item">
                        <img
                            className="w-full"
                            src={productPhotoUrl.default}
                            alt="Mountain"
                        />
                    </Link>
                    <div className=" px-4 py-2 sm:px-5 sm:py-3 xl:px-6 xl:py-4 h-36 sm:h-40 flex flex-col justify-between">
                        <div className="h-20 text-base md:text-lg　mb-1 text-yellow-400 ">
                            {productName}
                        </div>
                        <div className=" text-sm md:text-base mb-1 text-gray-400 ">
                            {category}&nbsp;/&nbsp;{brand}
                        </div>
                        <div className="text-sm sm:text-base text-white flex justify-between">
                            <div>${price}</div>
                            <div>
                                已出售 <span>{sale}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;