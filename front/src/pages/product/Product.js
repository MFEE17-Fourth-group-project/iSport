import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productHeader from '../../images/product-header.png';
import product from '../../images/product/1002-3.png';
import {
    faAngleUp,
    faFilter,
    faSearch,
    faMinus,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

export default function Product() {
    return (
        <>
            <div className="w-14 h-14 rounded-full bg-yellow-400 text-gray-900 flex justify-center items-center cursor-pointer fixed right-10 bottom-10 z-50">
                <FontAwesomeIcon className="text-5xl" icon={faAngleUp} />
            </div>
            <header className="relative w-full h-4/5 overflow-hidden">
                <div className="text-white absolute w-1/2 top-1/2 left-32 transform -translate-y-1/2">
                    <p className="text-2xl break-all w-full leading-normal">
                        Practice Hard, Play Strong, Pain Is Glory. ( Only For
                        Women )
                    </p>
                    <h1 className="text-6xl break-all w-full leading-normal">
                        Solutions For Moving Better And Feeling Altair.
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
            <nav className="bg-gray-900 flex justify-center">
                <div className="border-b-2 border-yellow-400 w-36 text-white text-center text-base py-3">
                    所有商品
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-3">
                    運動服飾
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-3">
                    運動鞋類
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-3">
                    健身器材
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-3">
                    營養補給
                </div>
            </nav>
            <main className="max-w-screen-xl my-0 mx-auto">
                {/* filter按鈕 */}
                <section className="mt-5">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                className="text-white text-2xl cursor-pointer"
                                icon={faFilter}
                            />

                            <button className="btn-yellow-sm mx-4">
                                價格
                                <FontAwesomeIcon
                                    className="ml-1"
                                    icon={faAngleUp}
                                />
                            </button>
                            <button className="btn-yellow-sm mx-4">最新</button>
                            <button className="btn-gray-sm mx-4">最熱銷</button>
                        </div>
                        <div className="w-1/3 bg-gray-700 rounded-full flex items-center px-4">
                            <input
                                className="bg-transparent outline-none border-none flex-grow placeholder-gray-700::placeholder text-white "
                                placeholder="關鍵字..."
                            />
                            <FontAwesomeIcon
                                className="text-white text-xl cursor-pointer"
                                icon={faSearch}
                            />
                        </div>
                    </div>

                    <div className="mt-3 bg-gray-900 p-6 flex rounded-lg">
                        <div className="mr-10">
                            <p className="border-l-2 border-yellow-400 text-white pl-3 mb-3">
                                價格區間
                            </p>
                            <div className="w-72 py-1 bg-gray-700 rounded-full flex justify-between items-center px-4">
                                <input
                                    className="w-24 bg-transparent outline-none border-none placeholder-gray-700::placeholder text-white text-center "
                                    placeholder="最小值"
                                />
                                <FontAwesomeIcon
                                    className="mx-1 text-yellow-400"
                                    icon={faMinus}
                                />
                                <input
                                    className="w-24 bg-transparent outline-none border-none placeholder-gray-700::placeholder text-white text-center"
                                    placeholder="最大值"
                                />
                            </div>
                        </div>

                        <div>
                            <p className="border-l-2 border-yellow-400 text-white pl-3 mb-2.5">
                                品牌
                            </p>
                            <div className="">
                                <select className="w-72 border-b-2 border-yellow-400 bg-gray-900 py-1 outline-none text-white">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                    <option>F</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-5 grid grid-cols-5 gap-4">
                    {/* 卡片 */}
                    <Link to="/product/item">
                        <div>
                            <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                                <div className="w-full py-3 flex justify-between items-center absolute">
                                    <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-1.5 py-0">
                                        New
                                    </div>
                                    <FontAwesomeIcon
                                        className="pr-3 text-4xl text-red-300 cursor-pointer"
                                        icon={faHeart}
                                    />
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
                    </Link>

                    <div>
                        <div className="w-full rounded overflow-hidden shadow-lg bg-gray-900 relative">
                            <div className="w-full py-3 flex justify-between items-center absolute">
                                <div className="text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-1.5 py-0">
                                    New
                                </div>
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
                                <FontAwesomeIcon
                                    className="pr-3 text-4xl text-red-300 cursor-pointer"
                                    icon={faHeart}
                                />
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
