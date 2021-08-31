import React from 'react';
import { Link } from 'react-router-dom';
import productHeader from '../../images/product-header.png';
import product from '../../images/product/1002-3.png';
import {
    FaAngleUp,
    FaFilter,
    FaSearch,
    FaMinus,
    FaHeart,
} from 'react-icons/fa';

export default function Product() {
    return (
        <>
            <div className=" w-8 h-8 xl:w-14 xl:h-14 rounded-full bg-yellow-400 text-gray-900 flex justify-center items-center cursor-pointer fixed right-5 bottom-16 z-50">
                <FaAngleUp className="text-3xl xl:text-5xl" />
            </div>
            <header className="relative w-full h-1/3 xl:h-112 overflow-hidden">
                <div className="text-white absolute w-1/2 top-1/2 left-5 xl:left-32 transform -translate-y-1/2">
                    <p className="text-sm xl:text-2xl break-all w-full leading-normal">
                        iSport商城
                    </p>
                    <h1 className="text-lg xl:text-5xl break-all w-full leading-normal">
                        多樣實用運動相關商品等您來挑選
                    </h1>
                </div>
                <figure className="h-full w-full ">
                    <img
                        src={productHeader}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </figure>
            </header>
            <nav className="bg-gray-900 flex justify-center text-sm xl:text-base">
                <div className="flex-1  xl:flex-initial border-b-2 border-yellow-400 w-36 text-white text-center py-5">
                    所有商品
                </div>
                <div className="flex-1  xl:flex-initial border-b-2 border-transparent w-36 text-white text-center py-5">
                    運動服飾
                </div>
                <div className="flex-1  xl:flex-initial border-b-2 border-transparent w-36 text-white text-center py-5">
                    運動鞋類
                </div>
                <div className="flex-1  xl:flex-initial border-b-2 border-transparent w-36 text-white text-center py-5">
                    健身器材
                </div>
                <div className="flex-1  xl:flex-initial border-b-2 border-transparent w-36 text-white text-center py-5">
                    營養補給
                </div>
            </nav>
            <main className="px-3 max-w-screen-xl my-0 mx-auto">
                {/* filter按鈕 */}
                <section className="mt-3 xl:mt-5">
                    <div className="flex flex-col-reverse xl:flex-row xl:justify-between">
                        <div className="flex items-center justify-between xl:justify-start">
                            <FaFilter className="text-white text-2xl cursor-pointer mr-4" />

                            <button className="flex items-center btn-yellow-sm mx-1">
                                <div>價格</div>
                                <FaAngleUp className="ml-1 text-xl" />
                            </button>
                            <button className="btn-yellow-sm mx-1">最新</button>
                            <button className="btn-gray-sm mx-1">最熱銷</button>
                        </div>
                        <div className="mb-2 w-full xl:w-1/3 bg-gray-700 rounded-full flex items-center px-4 py-2">
                            <input
                                className="bg-transparent outline-none border-none flex-grow placeholder-gray-700::placeholder text-white "
                                placeholder="關鍵字..."
                            />
                            <FaSearch className="text-white text-xl cursor-pointer" />
                        </div>
                    </div>

                    <div className="mt-3 bg-gray-900 p-4 xl:p-6 grid grid-cols-1 xl:grid-cols-3 rounded-lg">
                        <div className=" mb-2 xl:mb-0 xl:mr-10 ">
                            <p className="text-sm xl:text-base border-l-2 border-yellow-400 text-white pl-3 mb-3">
                                價格區間
                            </p>
                            <div className="w-full xl:w-72 py-1 bg-gray-700 rounded-full flex justify-between items-center px-4">
                                <input
                                    className="text-sm xl:text-base w-24 bg-transparent outline-none border-none placeholder-gray-700::placeholder text-white text-center "
                                    placeholder="最小值"
                                />
                                <FaMinus className="mx-1 text-yellow-400 text-xl" />
                                <input
                                    className="text-sm xl:text-base w-24 bg-transparent outline-none border-none placeholder-gray-700::placeholder text-white text-center"
                                    placeholder="最大值"
                                />
                            </div>
                        </div>

                        <div className="mb-2 xl:mb-0">
                            <p className="border-l-2 border-yellow-400 text-white pl-3 mb-0 xl:mb-2.5">
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
                <section className="my-5 grid grid-cols-2 xl:grid-cols-5 gap-3 xl:gap-4">
                    {/* 卡片 */}
                    <Link to="/product/item">
                        <div>
                            <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                                <div className="w-full py-1 flex justify-between items-center absolute">
                                    <div className="text-xs xl:text-sm text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-1.5 py-0">
                                        New
                                    </div>
                                    <FaHeart className="pr-3 text-3xl xl:text-4xl text-red-300 cursor-pointer" />
                                </div>
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="Mountain"
                                />
                                <div className=" px-4 py-2  xl:px-6 xl:py-4 h-32 xl:h-40 flex flex-col justify-between">
                                    <div className="text-base xl:text-lg mb-2 text-yellow-400">
                                        15 分鐘高强度全身肌肉
                                        無需器材又能在家做的運動
                                    </div>
                                    <div className="text-sm xl:text-base text-white flex justify-between">
                                        <div>$350</div>
                                        <div>
                                            已出售 <span>100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-1.5 py-0">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-1.5 py-0">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-1.5 py-0">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-1.5 py-0">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-1.5 py-0">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 看不見的New */}
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                    New
                                </div>
                                <FaHeart className="pr-3 text-4xl text-red-300 cursor-pointer" />
                            </div>
                            <img
                                className="w-full"
                                src={product}
                                alt="Mountain"
                            />
                            <div className="px-6 py-4 h-40 flex flex-col justify-between">
                                <div className=" text-lg mb-2 text-yellow-400">
                                    15 分鐘高强度全身肌肉
                                    無需器材又能在家做的運動
                                </div>
                                <div className="text-white flex justify-between">
                                    <div>$350</div>
                                    <div>
                                        已出售 <span>100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
