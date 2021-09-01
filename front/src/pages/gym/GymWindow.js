import React from 'react';
import gym from '../../images/map/gym.png';

const GymWindow = (props) => {
    return (
        <div className="w-screen h-screen fixed z-20">
            <div
                className="w-full max-w-sm rounded justify-center flex-auto items-center transform -translate-y-1/2
                -translate-x-1/2 absolute z-20 absolute top-1/2 left-1/2"
            >
                <div className="bg-gray-900 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold text-center">
                    地圖
                </div>
                <div className="">
                    <img
                        src={gym}
                        className="h-full w-full object-cover filter brightness-50"
                    />
                </div>
            </div>
            <div
                className="bg-black bg-opacity-50 w-screen h-screen fixed z-10"
                onClick={props.onCancel}
            ></div>
        </div>
    );
};

export default GymWindow;
