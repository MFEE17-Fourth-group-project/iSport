import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleHeader from '../../images/11.jpeg';
import Gyms from '../../images/map/gym.png';
import NorthGym from './NorthGym/NorthGym';
import MidthGym from './MidthGym/MidthGym';
import SouthGym from './SouthGym/SouthGym';
import EasthGym from './EasthGym/EasthGym';

function Gym() {
    let [gym, setGym] = useState(<NorthGym />);
    const changeNorthGym = () => {
        setGym(<NorthGym />);
    };
    const changeMidthGym = () => {
        setGym(<MidthGym />);
    };
    const changeSouthGym = () => {
        setGym(<SouthGym />);
    };
    const changeEasthGym = () => {
        setGym(<EasthGym />);
    };
    return (
        <>
            <div>
                <img
                    className="object-cover w-full h-44 xs:h-64 sm:h-72 md:h-96 lg:h-112"
                    src={ArticleHeader}
                    alt=""
                />
            </div>
            <div className="flex justify-center">
                <div className="w-1/2 p-4 hidden md:block">
                    <img
                        className="object-contain h-full hidden md:block"
                        src={Gyms}
                        alt=""
                    />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h3 class="text-4xl text-white text-center m-6">健身房</h3>
                    <div className="flex justify-center text-2xl text-white text-center">
                        <div
                            className="w-1/4 bg-gray-700 hover:bg-gray-800 py-2"
                            onClick={changeNorthGym}
                        >
                            北
                        </div>
                        <div
                            className="w-1/4 bg-gray-700 hover:bg-gray-800 py-2"
                            onClick={changeMidthGym}
                        >
                            中
                        </div>
                        <div
                            className="w-1/4 bg-gray-700 hover:bg-gray-800 py-2"
                            onClick={changeSouthGym}
                        >
                            南
                        </div>
                        <div
                            className="w-1/4 bg-gray-700 hover:bg-gray-800 py-2"
                            onClick={changeEasthGym}
                        >
                            東
                        </div>
                    </div>
                    <div>{gym}</div>
                </div>
            </div>
        </>
    );
}

export default Gym;
