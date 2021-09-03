import React, { useState, useEffect } from 'react';

function ProductNav() {
    return (
        <>
            <nav className="bg-gray-900 flex justify-center text-sm sm:text-base">
                <div className="flex-1  sm:flex-initial border-b-2 border-yellow-400 w-36 text-white text-center py-5">
                    所有商品
                </div>
                <div className="flex-1  sm:flex-initial border-b-2 border-transparent w-36 text-white text-center py-5">
                    運動服飾
                </div>
                <div className="flex-1  sm:flex-initial border-b-2 border-transparent w-36 text-white text-center py-5">
                    運動鞋類
                </div>
                <div className="flex-1  sm:flex-initial border-b-2 border-transparent w-36 text-white text-center py-5">
                    健身器材
                </div>
                <div className="flex-1  sm:flex-initial border-b-2 border-transparent w-36 text-white text-center py-5">
                    營養補給
                </div>
            </nav>
        </>
    );
}

export default ProductNav;
