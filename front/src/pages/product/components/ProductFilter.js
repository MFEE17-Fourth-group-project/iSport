import React, { useState, useEffect } from 'react';
import {
    FaAngleUp,
    FaFilter,
    FaSearch,
    FaMinus,
    FaHeart,
} from 'react-icons/fa';

function ProductFilter() {
    return (
        <section className="mt-3 sm:mt-5">
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
                <div className="flex items-center justify-between sm:justify-start">
                    <FaFilter className="text-white text-2xl cursor-pointer mr-4" />

                    <button className="flex items-center btn-yellow-sm mx-1">
                        <div>價格</div>
                        <FaAngleUp className="ml-1 text-xl" />
                    </button>
                    <button className="btn-yellow-sm mx-1">最新</button>
                    <button className="btn-gray-sm mx-1">最熱銷</button>
                </div>
                <div className="mb-2 w-full sm:w-1/3 bg-gray-700 rounded-full flex items-center px-4 py-2">
                    <input
                        className="bg-transparent outline-none border-none flex-grow placeholder-gray-700::placeholder text-white "
                        placeholder="關鍵字..."
                    />
                    <FaSearch className="text-white text-xl cursor-pointer" />
                </div>
            </div>

            <div className="mt-3 bg-gray-900 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 rounded-lg">
                <div className=" mb-2 sm:mb-0 sm:mr-10 ">
                    <p className="text-sm sm:text-base border-l-2 border-yellow-400 text-white pl-3 mb-3">
                        價格區間
                    </p>
                    <div className="w-full xl:w-72 py-1 bg-gray-700 rounded-full flex justify-between items-center px-4">
                        <input
                            className="text-sm xl:text-base w-1/3 bg-transparent outline-none border-none placeholder-gray-700::placeholder text-white text-center "
                            placeholder="最小值"
                        />
                        <FaMinus className="mx-1 text-yellow-400 text-xl" />
                        <input
                            className="text-sm xl:text-base w-1/3 bg-transparent outline-none border-none placeholder-gray-700::placeholder text-white text-center"
                            placeholder="最大值"
                        />
                    </div>
                </div>

                <div className="mb-2 sm:mb-0">
                    <p className="border-l-2 border-yellow-400 text-white pl-3 mb-0 sm:mb-2.5">
                        品牌
                    </p>
                    <div className="">
                        <select className="w-full xl:w-72 border-b-2 border-yellow-400 bg-gray-900 py-1 outline-none text-white">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                            <option>F</option>
                        </select>
                    </div>
                </div>

                <button className="btn-gray-sm place-self-end mx-1">
                    篩選
                </button>
            </div>
        </section>
    );
}

export default ProductFilter;
