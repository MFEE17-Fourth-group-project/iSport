import React from 'react';
import product from '../../../images/product/1002-3.png';
import { FaHeart } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { BsCaretDownFill } from 'react-icons/bs';

function CartItem() {
    return (
        <>
            <div className="p-5 flex flex-row">
                <div className="w-36 mx-5 self-center text-center">
                    <img
                        className="w-full"
                        src={product}
                        alt="good product"
                    ></img>
                </div>
                <div className="flex flex-col flex-grow ml-10">
                    <div className="flex flex-row justify-between pb-2.5">
                        <h3 className="text-xl font-bold">女款路跑背心</h3>
                        <p className="text-yellow-400 font-bold">$350</p>
                    </div>
                    <div className="pb-1.5 text-sm text-yellow-400">
                        MIZUNO 美津濃
                    </div>
                    <div className="flex flex-row items-center pb-1.5">
                        <p className="mr-2.5">顏色：</p>
                        <div className="btn-yellow-tag px-4">黑</div>
                    </div>
                    <div className="flex flex-row items-center pb-1.5">
                        <p className="mr-2.5">尺寸：</p>
                        <div className="btn-yellow-tag px-4">M</div>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="mr-2.5">數量：</p>
                        <div className="w-16 px-2.5 mr-2.5 border border-yellow-400 rounded-md flex items-center">
                            <p>1</p>
                            <BsCaretDownFill className="mr-2.5" />
                        </div>
                        <div className="cursor-pointer mr-2.5 text-red-400 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white hover:text-opacity-85 active:bg-red-600 font-md uppercase text-sm px-4 py-1 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center">
                            <FaHeart className="mr-2.5" />
                            <p>移至收藏</p>
                        </div>
                        <div className="cursor-pointer btn text-yellow-400 bg-transparent border border-solid border-yellow-300 hover:bg-yellow-400 hover:text-gray-800 active:bg-yellow-600 font-md uppercase text-sm px-4 py-1 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center">
                            <FaTrashAlt className="mr-2.5" />
                            <p>移除商品</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;
