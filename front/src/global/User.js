import React from 'react';
import userHeader from '../../images/user/pic04.jpg';
import Aside from '../global/Aside';

function Users() {
    return (
        <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
            <Aside />

            <artical className="flex-grow flex-col">
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                    基本資料
                    <span className="text-base text-red-500	">(必填)</span>
                </div>
                <div className="text-white bg-gray-900 w-full h-full object-cover object-center"></div>
            </artical>
        </main>
    );
}

export default Users;
