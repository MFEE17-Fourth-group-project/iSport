import React, { useState } from 'react';
import product from '../../../../images/product/1002-3.png';
import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import { TiPlus, TiMinus } from 'react-icons/ti';
// import { BsCaretDownFill } from 'react-icons/bs';

function CartItem(props) {
    const { count, setCount } = props;

    // const [selectedOption, setSelectedOption] = useState('');

    function minus() {
        setCount(count - 1);
    }

    function plus() {
        setCount(count + 1);
    }

    return (
        <>
            <div className="sm:p-2.5 lg:p-4 p-1.5 flex flex-row">
                {/* ========== 商品圖片 ========== */}
                <figure className="sm:w-36 w-2/5 sm:mx-5 mx-0 self-center">
                    <img
                        className="w-full"
                        src={product}
                        alt="good product"
                    ></img>
                </figure>
                <div className="flex flex-col flex-grow lg:ml-10 ml-5">
                    <div className="flex flex-row justify-between pb-2.5">
                        <h3 className="sm:text-xl text-lg font-bold">
                            女款路跑背心
                        </h3>
                        <p className="text-yellow-400 font-bold">$350</p>
                    </div>
                    <div className="pb-1.5 text-sm text-yellow-400">
                        MIZUNO 美津濃
                    </div>
                    <div className="flex flex-row items-center pb-1.5">
                        <p className="sm:mr-2.5 mr-6">顏色：</p>
                        <div className="btn-yellow-tag px-4">黑</div>
                    </div>
                    <div className="flex flex-row items-center pb-1.5">
                        <p className="sm:mr-2.5 mr-6">尺寸：</p>
                        <div className="btn-yellow-tag px-4">M</div>
                    </div>
                    <div className="flex sm:flex-row sm:items-center flex-col">
                        <div className="flex flex-row pb-1.5 sm:pb-0">
                            <p className="sm:mr-2.5 mr-4">數量：</p>

                            {/* ============= 數量加減鈕 ============= */}
                            <div className="px-2 sm:mr-2.5 mr-0 border border-yellow-400 rounded-md flex flex-row items-center bg-transparent">
                                <div onClick={minus} className="">
                                    <TiMinus />
                                </div>
                                <div>
                                    <div className="w-5 text-center">
                                        {count}
                                    </div>
                                </div>
                                <div onClick={plus}>
                                    <TiPlus />
                                </div>
                            </div>
                        </div>
                        {/* <select
                            className="w-16 px-2.5 mr-2.5 border border-yellow-400 rounded-md flex items-center bg-transparent"
                            value={selectedOption}
                            onChange={(e) => {
                                setSelectedOption(e.target.value);
                            }}
                        >
                            <option
                                className="bg-gray-900 text-white text-opacity-85"
                                value="1"
                            >
                                1
                            </option>
                            <option
                                className="bg-gray-900 text-white text-opacity-85"
                                value="2"
                            >
                                2
                            </option>
                            <option
                                className="bg-gray-900 text-white text-opacity-85"
                                value="3"
                            >
                                3
                            </option>
                            <option
                                className="bg-gray-900 text-white text-opacity-85"
                                value="4"
                            >
                                4
                            </option>
                        </select> */}
                        {/* <BsCaretDownFill className="mr-2.5" /> */}
                        <div className="flex flex-row">
                            <div className=" cursor-pointer mr-2.5 text-red-400 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white hover:text-opacity-85 active:bg-red-600 font-md uppercase text-sm sm:px-2 px-4 py-1 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center">
                                <FaHeart className="mx-1 sm:mr-2.5" />
                                <p className="sm:block hidden">移至收藏</p>
                            </div>
                            <div className="cursor-pointer btn text-yellow-400 bg-transparent border border-solid border-yellow-300 hover:bg-yellow-400 hover:text-gray-800 active:bg-yellow-600 font-md uppercase text-sm sm:px-2 px-4 py-1 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center">
                                <FaTrashAlt className="mx-1 sm:mr-2.5" />
                                <p className="sm:block hidden">移除商品</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;
