import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage1 from './../images/homepage/homepage-1.jpg';
import HomePage2 from './../images/homepage/homepage-2.jpg';
import HomePage3 from './../images/homepage/homepage-3.jpg';
import HomePage4 from './../images/homepage/homepage-4.jpg';
import HomePage8 from './../images/homepage/homepage-8.jpg';
import HomePage9 from './../images/homepage/homepage-9.jpg';
import HomePage10 from './../images/homepage/homepage-10.jpg';
import HomePage11 from './../images/homepage/homepage-11.jpg';
import HomePage12 from './../images/homepage/homepage-12.jpg';
import HomePage13 from './../images/homepage/homepage-13.jpg';
import VideoCard from './video/components/VideoCard';
import VideoCard2 from './video/components/VideoCard2';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsCursorFill } from 'react-icons/bs';
import MapImg from '../images/tabata/1.jpeg';
import MapTop from '../images/map/map-top.png';
import MapRight from '../images/map/map-right.png';
import MapBottom from '../images/map/map-bottom.png';
import MapLeft from '../images/map/map-left.png';
import GymWindow from './gym/GymWindow';

const HomePage = () => {
    // const [bannerImage, setBannerImage] = useState([
    //     HomePage1,
    //     HomePage2,
    //     HomePage3,
    //     HomePage4,
    // ]);


    // useEffect(() => { }, []);
    const [gymWindow, setGymWindow] = useState(false);
    const handleGymWindow = () => {
        setGymWindow(true);
    };

    const handleCancel = () => {
        setGymWindow(false);
    };

    return (
        <div className="max-w-screen-2xl mx-auto">

            {gymWindow && <GymWindow onCancel={handleCancel} />}

            {/* Banner Image */}
            <div className="relative h-175 w-full">
                <BsFillCaretLeftFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 transform -translate-y-1/2 cursor-pointer" />
                <img
                    src={HomePage1}
                    className="h-full w-full object-cover"
                    alt=""
                />
                <BsFillCaretRightFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 right-0 transform -translate-y-1/2 cursor-pointer" />
                <div className="absolute bottom-40 left-40">
                    <h1 className="font-normal text-5xl text-white tracking-wide leading-snug mb-4">
                        提供健身資訊分享平台與眾多
                        <br />
                        專業健身影片、文章分享、商城。
                    </h1>
                    <button className="btn-yellow">立即加入</button>
                </div>
            </div>

            {/* Video Section */}
            <div className="h-208 flex mt-7">
                <div className="w-2/3">
                    <div className="mt-6 ml-24">
                        <h2 className="text-white text-4xl">精選影片</h2>
                        <p className="text-white text-2xl border-l-4 border-yellow-400 pl-7 py-6 ml-10 my-7">
                            各式各樣的健身相關影片，讓您無論在戶外或是家裡都可以隨時
                            <br />
                            隨地觀看，不需擔心固定時間與定點的課程。
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <VideoCard />
                        <VideoCard2 />
                        <VideoCard />
                    </div>
                    <div className=""></div>
                </div>
                <div className="w-1/3 ml-8 relative">
                    <img
                        className="w-full rounded-3xl object-cover"
                        src={HomePage8}
                        alt=""
                    />
                    {/* <BsCursorFill /> */}
                </div>
            </div>

            {/* Product Section */}
            <div className="h-208 flex mt-7 bg-gray-900">
                <div className="flex pt-16 w-full">
                    <div className="w-1/3 h-175 mr-10 relative">
                        <img
                            src={HomePage13}
                            className="w-full h-full rounded-3xl object-cover"
                        />
                        <div className="absolute h-80 w-full bg-black bg-opacity-50 bottom-16 pt-8 pl-6">
                            <h2 className="text-white text-4xl">多樣商品</h2>
                            <p className="text-white text-2xl border-l-4 border-yellow-400 pl-7 py-6 ml-10 my-7">
                                眾多精選商品，<br />
                                讓你在健康的道路上更加分。
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 h-175 mr-10 flex flex-col justify-between relative">
                        <div className="h-1/2 mb-8">
                            <img
                                src={HomePage12}
                                className="w-full h-full rounded-3xl object-cover hover:bg-black hover:bg-opacity-50"
                            />
                        </div>
                        {/* <div className="absolute w-full h-1/2 bg-black bg-opacity-50 rounded-3xl mb-8">

                        </div> */}
                        <div className="h-1/2">
                            <img
                                src={HomePage11}
                                className="w-full h-full rounded-3xl object-cover hover:bg-black hover:bg-opacity-50"
                            />
                        </div>
                        {/* <div className="absolute w-full h-1/2 bottom-0 bg-black bg-opacity-50 rounded-3xl">

                        </div> */}
                    </div>
                    <div className="mr-11 w-1/3 h-175 flex flex-col justify-between relative">
                        <div className="h-1/2 mb-8">
                            <img
                                src={HomePage10}
                                className="w-full h-full rounded-3xl object-cover hover:bg-black hover:bg-opacity-50"
                            />
                        </div>
                        {/* <div className="absolute w-full h-1/2 bg-black bg-opacity-50 rounded-3xl mb-8">

                        </div> */}
                        <div className="h-1/2">
                            <img
                                src={HomePage9}
                                className="w-full h-full rounded-3xl object-cover hover:bg-black hover:bg-opacity-50"
                            />
                        </div>
                        {/* <div className="absolute w-full h-1/2 bottom-0 bg-black bg-opacity-50 rounded-3xl">

                        </div> */}
                    </div>
                </div>

            </div>

            {/* Article Section */}
            <div className="h-208 flex mt-7"></div>
            {/* Gym Section */}
            <section className="h-208 flex mt-7 bg-gray-900">
                <div className="content-left flex justify-center m-auto">
                    <div className="relative p-60 z-50">
                        <img
                            className="absolute top-10 left-40 w-1/4"
                            src={MapTop}
                            onClick={handleGymWindow}
                        />
                        <img
                            className="absolute top-40 left-40
                                 w-1/4"
                            src={MapRight}
                            onClick={handleGymWindow}
                        />
                        <img
                            className="absolute top-64 left-14 w-1/4"
                            src={MapBottom}
                            onClick={handleGymWindow}
                        />
                        <img
                            className="absolute top-32 left-20 w-1/4"
                            src={MapLeft}
                            onClick={handleGymWindow}
                        />
                    </div>
                    <div className="content-right">
                        <h3 class="text-4xl text-white text-center m-6">
                            健身房
                        </h3>
                        <Link to="">
                            <div className="card flex items-center m-2">
                                <img
                                    className="map-img h-24 px-2"
                                    src={MapImg}
                                    alt=""
                                />
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
            </section>
        </div>
    );
};

export default HomePage;