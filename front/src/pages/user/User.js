import React from 'react';
import productHeader from '../../images/product-header.png';

function Users() {
    return (
        <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
        <div className="w-64 mr-2.5 bg-gray-900 rounded-t-xl">
            <div className=" w-64 h-72 ">
            <div className="w-48 h-48 rounded-full bg-white m-auto"> </div>
            </div>
                <ul className="text-white text-lg leading-relaxed">
                    <li className="users-li">會員資料</li>
                    <li  className="users-li">訂單管理</li>
                    <li  className="users-li">影片收藏</li>
                    <li  className="users-li">文章管理</li>
                    <li  className="users-li">聯絡我們</li>
                </ul>
        </div>
        <div className="flex-grow flex-col">
            <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-4xl rounded-t-xl">
                會員基本資料<span className="text-base text-red-500	" >(必填)</span>
            </div>
            <div>

            </div>
            
        </div>
    </main>
        

    );
}

export default Users;