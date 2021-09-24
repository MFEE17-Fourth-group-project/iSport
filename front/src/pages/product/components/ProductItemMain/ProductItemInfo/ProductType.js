import React, { useState, useEffect } from 'react';

function ProductType() {
    return (
        <>
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
        </>
    );
}

export default ProductType;
