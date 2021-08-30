import React from 'react';
import product from '../../../images/product/1002-3.png';

function CheckItem() {
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
                        <div className="px-4 text-white text-opacity-85 text-center text-sm rounded-full">
                            黑
                        </div>
                    </div>
                    <div className="flex flex-row items-center pb-1.5">
                        <p className="mr-2.5">尺寸：</p>
                        <div className="px-4 text-white text-opacity-85 text-center text-sm rounded-full">
                            M
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="mr-2.5">數量：</p>
                        <div className="w-16 px-4 mr-2.5 border-l-2 border-transparent rounded-md flex items-center">
                            <p>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckItem;
