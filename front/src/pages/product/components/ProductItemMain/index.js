import React, { useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';
import axios from 'axios';
import { withRouter, useParams } from 'react-router-dom';

import ProductPhoto from './ProductPhoto/';
import ProductItemInfo from './ProductItemInfo/';

import product from '../../../../images/product/1002-3.png';

import {
    FaPlus,
    FaMinus,
    FaAngleLeft,
    FaAngleRight,
    FaHeart,
    FaCaretDown,
    FaShare,
} from 'react-icons/fa';

function ProductItemMain(props) {
    const { productId } = useParams();
    const [error, setError] = useState(null);
    const [productInfo, setProductInfo] = useState(null);
    const [skuDetail, setSkuDetail] = useState(null);
    const [typeValue, setTypeValue] = useState(null);
    const [productImg, setProductImg] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getOneProductList = async () => {
            try {
                let response = await axios.get(
                    `${API_URL}/products/item/${productId}`
                );
                console.log(response);
                let oData = response.data;
                setData(oData);
                setProductInfo(response.data.product);
                setSkuDetail(response.data.skuDetail);
                setTypeValue(response.data.typeValue);
                setProductImg(response.data.productImg);
            } catch (e) {
                setError(e.message);
            }
        };
        getOneProductList();
    }, [productId]);

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    return (
        <>
            <main className="px-3 sm:px-6 text-white text-opacity-85 max-w-screen-xl my-0 mx-auto">
                {/* 圖片與資訊 */}
                <section className="w-full py-3 flex flex-col sm:flex-row">
                    {/* 圖片 */}
                    <ProductPhoto productImg={productImg} />
                    {/* 資訊與加入購物車 */}
                    <ProductItemInfo />
                </section>
                {/* 商品簡介 */}
                <section className=" h-96 xl:h-screen mt-5 overflow-y-hidden relative">
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
                        <div className="h-full w-10 bg-gradient-to-r from-gray-800 absolute top-0 left-0 z-10 flex items-center justify-center">
                            <FaAngleLeft className="text-3xl text-white " />
                        </div>
                        <div className="h-full w-10 bg-gradient-to-l from-gray-800 absolute top-0 right-0 z-10 flex items-center justify-center">
                            <FaAngleRight className="text-3xl text-white " />
                        </div>

                        <div className="py-5 flex mx-0 lg:mx-2">
                            <div className="mr-1 lg:mr-4 flex-shrink-0 w-40 lg:w-60 rounded overflow-hidden shadow-lg bg-gray-900 relative">
                                {/* <div className="w-full py-1 flex justify-between items-center absolute">
                                    <div className="text-xs lg:text-sm text-center bg-yellow-400 rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-900 px-3 py-1 invisible">
                                        New
                                    </div>
                                    <FaHeart className="pr-3 text-3xl lg:text-4xl text-red-300 cursor-pointer" />
                                </div> */}
                                <img
                                    className="w-full"
                                    src={product}
                                    alt="Mountain"
                                />
                                <div className="px-4 py-2  lg:px-6 lg:py-4 h-32 lg:h-40 flex flex-col justify-between">
                                    <div className="text-base lg:text-lg mb-2 text-yellow-400">
                                        15 分鐘高强度全身肌肉
                                        無需器材又能在家做的運動
                                    </div>
                                    <div className="text-sm lg:text-base text-white flex justify-between">
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

export default ProductItemMain;
