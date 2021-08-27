import React from 'react';
import userHeader from '../../images/user/pic04.jpg';
// import {FontAwesomeIcon} from `@fortawesome/react-fontawesome`;


function Users() {
    return (
        <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
        <aside className="w-64 mr-2.5 bg-gray-900 rounded-t-xl shadow-xl pt-5">
            <div className=" w-64 h-64">
            <div className="w-48 h-48 rounded-full bg-white mt-auto overflow-hidden">
            <img
                        src={userHeader}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
            </div>
            </div>
            <div className="h-full aside-menu">
                <ul className="text-white text-lg ">
                    <li className="users-li"><a href=""> 會員資料</a></li>
                    <li  className="users-li"><a href="">訂單管理</a>
                        <ul className="submenu">
                                <li><a href="">購買紀錄</a></li>
                                <li><a href="">購物車</a></li>
                                <li><a href="">我的最愛</a></li>
                        </ul>
                        </li>
                    <li  className="users-li"><a href="">影片收藏</a>
                        <ul className="submenu">
                            <li><a href="">我的最愛</a></li>
                            <li><a href="">稍後觀看</a></li>
                        </ul>
                    </li>
                    <li  className="users-li"><a href="">文章管理</a>
                        <ul className="submenu"> 
                                <li><a href="">我的文章</a></li>
                                <li><a href="">新增文章</a></li>
                                <li><a href="">收藏文章</a></li>
                        </ul>
                    </li>
                    <li  className="users-li"><a href="">聯絡我們</a></li>
                </ul>
            </div>
        </aside>
        <artical className="flex-grow flex-col">
            <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                基本資料<span className="text-base text-red-500	" >(必填)</span>
            </div>
            <div className="text-white bg-gray-900 w-full h-full object-cover object-center"> 
            
            

            </div>
            
        </artical>
    </main>
        

    );
}

export default Users;