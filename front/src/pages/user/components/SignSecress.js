import React from 'react';
import { Link } from 'react-router-dom';

const SignSecress = () => {
    return (
        <div
            className="w-full max-w-sm rounded justify-center flex-auto items-center transform -translate-y-1/2
            -translate-x-1/2 z-20 absolute top-1/2 left-1/2"
        >
            <div className="bg-gray-900 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold relative">
                成功登入
            </div>
            <div className="bg-gray-700 shadow-md rounded-b-xl px-8 pt-6 pb-8 mb-4">
                <Link to="/user">
                    <button className="btn-yellow">確定</button>
                </Link>
            </div>
        </div>
    );
};

export default SignSecress;
