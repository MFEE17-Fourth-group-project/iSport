import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage1 from './../images/homepage/homepage-1.jpg';
import HomePage2 from './../images/homepage/homepage-2.jpg';
import HomePage3 from './../images/homepage/homepage-3.jpg';
import HomePage4 from './../images/homepage/homepage-4.jpg';
import HomePage8 from './../images/homepage/homepage-8.jpg';
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

const HomePage = () => {
    const [bannerImage, setBannerImage] = useState([
        HomePage1,
        HomePage2,
        HomePage3,
        HomePage4,
    ]);
    useEffect(() => {}, []);

    return (
        <div className="max-w-screen-2xl mx-auto">
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
                    <div className="mt-7 ml-24">
                        <h2 className="text-white text-3xl">精選影片</h2>
                        <p className="text-white text-lg border-l-4 border-yellow-400 pl-7 py-6 ml-10 my-7">
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
            <div className="h-208 flex mt-7 bg-gray-900"></div>
            {/* Article Section */}
            <div className="h-208 flex mt-7"></div>
            {/* Gym Section */}
            <section className="h-208 flex mt-7 bg-gray-900">
                <div className="content-left flex justify-center m-auto">
                    <div className="relative p-60">
                        <Link to="">
                            <img
                                className="absolute top-10 left-40 w-1/4"
                                src={MapTop}
                                alt=""
                            />
                        </Link>
                        <Link to="">
                            <img
                                className="absolute top-40 left-40
                                 w-1/4"
                                src={MapRight}
                                alt=""
                            />
                        </Link>

                        <Link to="">
                            <img
                                className="absolute top-64 left-14 w-1/4"
                                src={MapBottom}
                                alt=""
                            />
                        </Link>

                        <Link to="">
                            <img
                                className="absolute top-32 left-20 w-1/4"
                                src={MapLeft}
                                alt=""
                            />
                        </Link>
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
