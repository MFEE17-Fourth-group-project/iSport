import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiLocation } from 'react-icons/ti';
import Map from './../../images/map/map.png';
import GymWindow from '../gym/GymWindow';
import NorthGym from '../gym/NorthGym/NorthGym';
import MidthGym from '../gym/MidthGym/MidthGym';
import SouthGym from '../gym/SouthGym/SouthGym';
import EasthGym from '../gym/EasthGym/EasthGym';

function GymSection() {
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

    const [gymWindow, setGymWindow] = useState(false);
    const handleGymWindow = () => {
        setGymWindow(true);
    };

    const handleCancel = () => {
        setGymWindow(false);
    };

    return (
        <div className="md:flex md:justify-center w-full mt-7 mb-10 sm:mx-auto sm:mt-14 lg:mt-16 xl:mt-20">
            {gymWindow && <GymWindow onCancel={handleCancel} />}
            <div className="relative p-32 object-contain mr-32 hidden md:block">
                <img className="absolute top-8 left-16" src={Map} alt="" />
                <TiLocation
                    className="z-0 text-yellow-300 hover:text-yellow-400 w-24 h-24 absolute top-14 left-56 transform -translate-y-1/2 cursor-pointer animate-bounce"
                    onClick={changeNorthGym}
                />
                <TiLocation
                    className="z-0 text-yellow-300 hover:text-yellow-400 w-24 h-24 absolute top-72 left-56 transform -translate-y-1/2 cursor-pointer animate-bounce"
                    onClick={changeEasthGym}
                />
                <TiLocation
                    className="z-0 text-yellow-300 hover:text-yellow-400 w-24 h-24 absolute top-96 left-24 transform -translate-y-1/2 cursor-pointer animate-bounce"
                    onClick={changeSouthGym}
                />
                <TiLocation
                    className="z-0 text-yellow-300 hover:text-yellow-400 w-24 h-24 absolute top-48 left-32 transform -translate-y-1/2 cursor-pointer animate-bounce"
                    onClick={changeMidthGym}
                />
            </div>
            <div className="">
                <h3
                    class="w-max text-white text-2xl lg:text-3xl xl:text-4xl border-b-2 sm:border-b-4 border-yellow-400
                    pb-2.5 sm:pb-3.5 flex mx-auto mb-4 sm:mb-6 lg:mb-8 xl:mb-10"
                >
                    健身房
                </h3>
                <div className="flex justify-center text-2xl text-white text-center md:hidden">
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
    );
}

export default GymSection;
