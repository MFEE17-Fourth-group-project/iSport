import React from 'react';
import { Link } from 'react-router-dom';
import ArticleHeader from '../../images/11.jpeg';
import MapImg from '../../images/11.jpeg';
import Gyms from '../../images/map/gym.png';

function Gym() {
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
                    <Link to="">
                        <div className="flex items-center my-2">
                            <img className="h-24" src={MapImg} alt="" />
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
                        <div className="flex items-center my-2">
                            <img className="h-24" src={MapImg} alt="" />
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
                        <div className="flex items-center my-2">
                            <img className="h-24" src={MapImg} alt="" />
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
        </>
    );
}

export default Gym;
