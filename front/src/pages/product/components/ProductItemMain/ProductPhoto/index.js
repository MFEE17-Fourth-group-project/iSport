import React, { useState, useEffect } from 'react';

import PictureGroup from './PictureGroup';

import product from '../../../../../images/product/1002-3.png';

import {
    FaAngleLeft,
    FaAngleRight,
    FaAngleUp,
    FaAngleDown,
    FaCircle,
} from 'react-icons/fa';

function ProductPhoto(props) {
    const { productImg } = props;
    const [bigImg, setBigImg] = useState('1002-3.png');
    const [bigImgUrl, setBigImgUrl] = useState(null);

    console.log(bigImg);

    // const bigImgUrl = require('../../../../../images/product/' + bigImg);

    useEffect(() => {
        console.log(productImg);
        if (productImg) {
            setBigImg(productImg[0].img_name);
        }
    }, [productImg]);

    useEffect(() => {
        setBigImgUrl(require('../../../../../images/product/' + bigImg));
    }, [bigImg]);

    return (
        <>
            <div className="w-full sm:w-2/5 xl:w-1/2 flex sm:justify-end sm:flex-col-reverse xl:flex-row mr-2 lg:mr-5 py-3">
                {/* 小圖 */}
                <div className=" hidden sm:block sm:w-full xl:w-auto xl:h-500 sm:overflow-x-hidden xl:overflow-y-hidden mr-2 relative">
                    <div className="sm:w-6 sm:h-full xl:w-full xl:h-6 sm:bg-gradient-to-r xl:bg-gradient-to-b from-gray-800 absolute top-0 left-0 cursor-pointer flex justify-center items-center">
                        <FaAngleUp className="hidden xl:block text-2xl text-yellow-400" />
                        <FaAngleLeft className="xl:hidden sm:block text-2xl text-yellow-400" />
                    </div>
                    <div className="sm:w-6 sm:h-full xl:w-full xl:h-6 sm:bg-gradient-to-l xl:bg-gradient-to-t from-gray-800 absolute bottom-0 right-0 cursor-pointer flex justify-center items-center">
                        <FaAngleDown className="hidden xl:block text-2xl text-yellow-400" />
                        <FaAngleRight className="xl:hidden sm:block text-2xl text-yellow-400" />
                    </div>
                    {/* 圖片群組 */}
                    <div className="flex w-auto flex-row xl:flex-col">
                        {productImg &&
                            productImg.map((item) => {
                                return (
                                    <PictureGroup
                                        key={item.id}
                                        id={item.id}
                                        imgName={item.img_name}
                                        bigImg={bigImg}
                                        setBigImg={setBigImg}
                                    />
                                );
                            })}
                    </div>
                </div>
                {/* 大圖 */}
                <div className="sm:mb-5 w-full xl:w-500 rounded-lg overflow-y-hidden shadow-xl relative">
                    <div className="sm:hidden h-full w-8 absolute left-0 top-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <FaAngleLeft className="text-lg text-white " />
                    </div>
                    <div className="sm:hidden h-full w-8 absolute right-0 top-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <FaAngleRight className="text-lg text-white " />
                    </div>
                    <img
                        src={bigImgUrl ? bigImgUrl.default : ''}
                        alt="product"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
            {/* 點點 */}
            <div className="sm:hidden flex justify-center">
                <FaCircle className="text-yellow-400 text-xs p-0.5" />
                <FaCircle className="text-gray-700 text-xs p-0.5" />
                <FaCircle className="text-gray-700 text-xs p-0.5" />
                <FaCircle className="text-gray-700 text-xs p-0.5" />
                <FaCircle className="text-gray-700 text-xs p-0.5" />
            </div>
        </>
    );
}

export default ProductPhoto;
