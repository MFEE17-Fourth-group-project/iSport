import React from 'react';
import product from '../../images/product/1002-3.png';
import {
    FaPlus,
    FaMinus,
    FaAngleLeft,
    FaHeart,
    FaCaretDown,
} from 'react-icons/fa';

function ProductItem() {
    return (
        <>
            <main className="text-white text-opacity-85 max-w-screen-xl my-0 mx-auto">
                {/* 圖片與資訊 */}
                <section className="mt-5 flex">
                    {/* 圖片 */}
                    <div className="flex w-auto mr-5">
                        {/* 小圖 */}
                        <div className="h-500 overflow-y-hidden mr-2 relative">
                            <div className="w-full h-6 bg-gradient-to-b from-gray-800 absolute top-0 left-0">
                                <i></i>
                            </div>
                            <div className="w-full h-6 bg-gradient-to-t from-gray-800 absolute bottom-0 left-0">
                                <i></i>
                            </div>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                            <figure className="mb-2 w-28 h-28 rounded-md overflow-hidden">
                                <img
                                    src={product}
                                    alt="product"
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                        </div>
                        {/* 大圖 */}
                        <div className="w-500 rounded-lg overflow-y-hidden">
                            <img
                                src={product}
                                alt="product"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    {/* 資訊與加入購物車 */}
                    <div className="py-5 flex-grow flex flex-col">
                        {/* 連結 */}
                        <div className="mb-10 text-sm flex justify-between ">
                            <div>
                                <i></i> 回
                                <span className="text-yellow-400">
                                    運動服飾
                                </span>
                            </div>
                            <div>
                                <i></i>分享
                            </div>
                        </div>
                        <div className="mb-8 ">
                            <h1 className="py-3 font-bold text-3xl">
                                女款路跑背心
                            </h1>
                            <div className="text-sm">
                                品名：
                                <span className="text-yellow-400">
                                    MIZUNO 美津濃
                                </span>
                                ｜ 總銷售量：
                                <span>1243</span>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h2 className="py-2 text-xl font-bold">規格</h2>
                            <div className="py-1 flex items-center ">
                                顏色：
                                <div className=" mx-1 px-3 py-0 rounded-full bg-yellow-400 text-gray-900 cursor-pointer">
                                    粉色
                                </div>
                                <div className="mx-1 px-3 py-0 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-transparent cursor-pointer">
                                    灰色
                                </div>
                                <div className="mx-1 px-3 py-0 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-transparent cursor-pointer">
                                    黑色
                                </div>
                            </div>
                            <div className="py-1 flex">
                                尺寸：
                                <div className="mx-1 px-3 py-0 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-transparent cursor-pointer">
                                    S
                                </div>
                                <div className="mx-1 px-3 py-0 rounded-full bg-yellow-400 text-gray-900 cursor-pointer">
                                    M
                                </div>
                                <div className="mx-1 px-3 py-0 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-transparent cursor-pointer">
                                    L
                                </div>
                            </div>
                            <div className="py-1 flex justify-between">
                                <div>
                                    貨號：
                                    <span className="text-gray-400">
                                        10011031
                                    </span>
                                </div>
                                <div>
                                    庫存：<span>134</span>
                                </div>
                            </div>
                            <div className="my-2 py-2 border-b-2 border-yellow-400 flex justify-between">
                                <div className="text-yellow-400 text-lg">
                                    NT$ <span>350</span>
                                </div>
                                <div className="flex py-1 rounded-md justify-between items-center shadow-emboss">
                                    <button type="button" className="px-2">
                                        <FaPlus />
                                    </button>
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none text-center"
                                        value={0}
                                    />
                                    <button type="button" className="px-2">
                                        <FaMinus />
                                    </button>
                                </div>
                            </div>
                            <div className="text-right text-yellow-400 text-lg">
                                小計 NT$ <span>350</span>
                            </div>
                        </div>
                        <div className="flex">
                            <button className="btn-yellow mr-3 w-2/3  ">
                                加入購物車
                            </button>
                            <button className="border border-red-300 rounded-full text-red-300 flex-grow ">
                                收藏
                            </button>
                        </div>
                    </div>
                </section>
                {/* 商品簡介 */}
                <section className="h-screen mt-5 overflow-y-hidden relative">
                    <h1 className="py-3 text-xl border-b-2 border-yellow-400 ">
                        商品介紹
                    </h1>
                    <div className="  py-3 break-all leading-relaxed">
                        吸汗快乾材質,​前胸後中反光燙印,優惠便宜好價格,值得推薦！
                        <br />
                        <br /> 多次實驗調整
                        <br /> 完美比例QQ彈力纖維 全面包覆胸部
                        <br />
                        體驗自由運動的舒適
                        <br /> 滿足各種運動姿勢的溫柔包覆
                        <br />
                        高強度防震支
                        <br />
                        <br /> 運動內衣也要滿滿的安全感 商品內容：
                        <br />
                        顏色：黑/膚/藍 隨機（不含內褲）
                        <br /> 材質：尼龍/氨綸
                        <br />
                        適穿尺寸： S 70/32 BCD M 75/34 BCD L 80/36 BCD XL 85/38
                        <br />
                        BCD
                        <br />
                        <br />
                        (((貼身內著衣物-內褲、襪子(基於衛生原則)，以上述無法受理退換貨，瑕疵品除外)))
                        <br />
                        注意事項：
                        <br />
                        布料染料時，深色比淺色不易固色，因此深色衣服下水時，會見水中有許色水，此屬正常現象，請您別擔心，請安心穿著！
                        <br />
                        洗滌方法：手洗（深色衣物與淺色衣物請分開洗，請勿浸泡或使用洗衣機、脫水機，及任何刷子類物品清洗，請使用中性洗劑（沐浴乳、洗
                        精等），加入少許清水，待充分溶解后再放入衣物清洗。
                        <br />
                        吸汗快乾材質,​前胸後中反光燙印,優惠便宜好價格,值得推薦！
                        <br />
                        <br /> 多次實驗調整
                        <br /> 完美比例QQ彈力纖維 全面包覆胸部
                        <br />
                        體驗自由運動的舒適
                        <br /> 滿足各種運動姿勢的溫柔包覆
                        <br />
                        高強度防震支
                        <br />
                        <br /> 運動內衣也要滿滿的安全感 商品內容：
                        <br />
                        顏色：黑/膚/藍 隨機（不含內褲）
                        <br /> 材質：尼龍/氨綸
                        <br />
                        適穿尺寸： S 70/32 BCD M 75/34 BCD L 80/36 BCD XL 85/38
                        <br />
                        BCD
                        <br />
                        <br />
                        (((貼身內著衣物-內褲、襪子(基於衛生原則)，以上述無法受理退換貨，瑕疵品除外)))
                        <br />
                        注意事項：
                        <br />
                        布料染料時，深色比淺色不易固色，因此深色衣服下水時，會見水中有許色水，此屬正常現象，請您別擔心，請安心穿著！
                        <br />
                        洗滌方法：手洗（深色衣物與淺色衣物請分開洗，請勿浸泡或使用洗衣機、脫水機，及任何刷子類物品清洗，請使用中性洗劑（沐浴乳、洗
                        精等），加入少許清水，待充分溶解后再放入衣物清洗。
                        <br />
                    </div>
                    <div className="w-full pt-20 pb-1 absolute bottom-0 left-0 flex flex-col justify-center items-center bg-gradient-to-t from-gray-900 text-yellow-400 text-center">
                        <p>顯示完整資訊</p>
                        <FaCaretDown />
                    </div>
                </section>
                {/* 你可能會喜歡 */}
                <section className="my-5">
                    <h1 className="py-3 text-xl border-b-2 border-yellow-400 ">
                        你可能會喜歡......
                    </h1>
                    <div className="w-full overflow-x-hidden relative">
                        <div className="h-full w-10 bg-gradient-to-r from-gray-800 absolute top-0 left-0 z-10">
                            <i></i>
                        </div>
                        <div className="h-full w-10 bg-gradient-to-l from-gray-800 absolute top-0 right-0 z-10">
                            <i></i>
                        </div>

                        <div className="py-5 flex justify-center mx-2">
                            <div className="mx-2 flex-shrink-0 w-60 rounded overflow-hidden shadow-lg bg-gray-900 relative">
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

                            <div className="mx-2 flex-shrink-0 w-60 rounded overflow-hidden shadow-lg bg-gray-900 relative">
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

                            <div className="mx-2 flex-shrink-0 w-60 rounded overflow-hidden shadow-lg bg-gray-900 relative">
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

                            <div className="mx-2 flex-shrink-0 w-60 rounded overflow-hidden shadow-lg bg-gray-900 relative">
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

                            <div className="mx-2 flex-shrink-0 w-60 rounded overflow-hidden shadow-lg bg-gray-900 relative">
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
                            <div className="mx-2 flex-shrink-0 w-60 rounded overflow-hidden shadow-lg bg-gray-900 relative">
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
                    </div>
                </section>
            </main>
        </>
    );
}

export default ProductItem;
