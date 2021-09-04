import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import product from '../../../images/product/1002-3.png';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function ProductCard(props) {
    const { productName, price, sale, like } = props;
    console.log(like);
    return (
        <>
            <Link to="/product/item">
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
                        <img className="w-full" src={product} alt="Mountain" />
                        <div className=" px-4 py-2 sm:px-5 sm:py-3 xl:px-6 xl:py-4 h-36 sm:h-40 flex flex-col justify-between">
                            <div className=" h-20 text-base md:text-lg　mb-2 text-yellow-400 ">
                                {productName}
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
            </Link>
        </>
    );
}

export default ProductCard;
