import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiLocation } from 'react-icons/ti';
import MapImg from './../../images/tabata/1.jpeg';
import Map from './../../images/map/map.png';
import GymWindow from '../gym/GymWindow';

const GymSection = () => {
    const [gymWindow, setGymWindow] = useState(false);
    const handleGymWindow = () => {
        setGymWindow(true);
    };

    const handleCancel = () => {
        setGymWindow(false);
    };

    return (
        <div className="md:flex md:justify-center w-full mt-12 sm:my-auto">
            {gymWindow && <GymWindow onCancel={handleCancel} />}
            <div className="relative p-36 object-contain mr-32 hidden md:block">
                <img className="absolute top-8 left-16" src={Map} alt="" />
                <Link to="">
                    <TiLocation className="z-0 text-yellow-300 hover:text-yellow-400 w-24 h-24 absolute top-14 left-56 transform -translate-y-1/2 cursor-pointer animate-bounce" />
                </Link>
                <Link to="">
                    <TiLocation className="z-0 text-yellow-300 hover:text-yellow-400 w-24 h-24 absolute top-72 left-56 transform -translate-y-1/2 cursor-pointer animate-bounce" />
                </Link>

                <Link to="">
                    <TiLocation className="z-0 text-yellow-300 hover:text-yellow-400 w-24 h-24 absolute top-96 left-24 transform -translate-y-1/2 cursor-pointer animate-bounce" />
                </Link>

                <Link to="">
                    <TiLocation className="z-0 text-yellow-300 hover:text-yellow-400 w-24 h-24 absolute top-48 left-32 transform -translate-y-1/2 cursor-pointer animate-bounce" />
                </Link>
            </div>
            <div className="">
                <h3 class="w-max text-white text-2xl lg:text-3xl xl:text-4xl border-b-2 sm:border-b-4 border-yellow-400
                    pb-2.5 sm:pb-3.5 flex mx-auto mb-4 sm:mb-6 lg:mb-8 xl:mb-10">健身房</h3>
                <div className="flex justify-center text-2xl text-white text-center my-4">
                    <div className="w-1/4 bg-gray-700 hover:bg-gray-800 py-2">
                        北
                    </div>
                    <div className="w-1/4 bg-gray-700 hover:bg-gray-800 py-2">
                        中
                    </div>
                    <div className="w-1/4 bg-gray-700 hover:bg-gray-800 py-2">
                        南
                    </div>
                    <div className="w-1/4 bg-gray-700 hover:bg-gray-800 py-2">
                        東
                    </div>
                </div>
                <Link to="" onClick={handleGymWindow}>
                    <div className="card flex items-center m-2">
                        <img className="h-24 px-2" src={MapImg} alt="" />
                        <div class="text-white">
                            <h5 class="text-2xl">中正運動中心</h5>
                            <p class="">
                                電話: 2581-1060 <br />
                                地址: 臺北市中山區中山北路二段44巷2號
                                <br />
                                網址:https://cssc.cyc.org.tw
                                <br />
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="" onClick={handleGymWindow}>
                    <div className="card flex items-center m-2">
                        <img className="h-24 px-2" src={MapImg} alt="" />
                        <div class="text-white">
                            <h5 class="text-2xl">中正運動中心</h5>
                            <p class="">
                                電話: 2581-1060 <br />
                                地址: 臺北市中山區中山北路二段44巷2號
                                <br />
                                網址:https://cssc.cyc.org.tw
                                <br />
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="" onClick={handleGymWindow}>
                    <div className="card flex items-center m-2">
                        <img className="h-24 px-2" src={MapImg} alt="" />
                        <div class="text-white">
                            <h5 class="text-2xl">中正運動中心</h5>
                            <p class="">
                                電話: 2581-1060 <br />
                                地址: 臺北市中山區中山北路二段44巷2號
                                <br />
                                網址:https://cssc.cyc.org.tw
                                <br />
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="">
                    <div className="card flex items-center m-2">
                        <img className="h-24 px-2" src={MapImg} alt="" />
                        <div class="text-white">
                            <h5 class="text-2xl">中正運動中心</h5>
                            <p class="">
                                電話: 2581-1060 <br />
                                地址: 臺北市中山區中山北路二段44巷2號
                                <br />
                                網址:https://cssc.cyc.org.tw
                                <br />
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default GymSection;
