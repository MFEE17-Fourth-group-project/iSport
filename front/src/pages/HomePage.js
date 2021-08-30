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
import HomePage14 from './../images/homepage/homepage-14.jpg';
import VideoCard from './video/components/VideoCard';
import VideoCard2 from './video/components/VideoCard2';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsCursorFill } from 'react-icons/bs';
import MapImg from '../images/tabata/1.jpeg';
import GymWindow from './gym/GymWindow';
import { TiLocation } from 'react-icons/ti';
import Map from '../images/map/map.png';

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
                                眾多精選商品，
                                <br />
                                讓你在健康的道路上更加分。
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 h-175 mr-10 flex flex-col justify-between">
                        <div className="h-1/2 mb-8 rounded-3xl relative cursor-pointer">
                            <img
                                src={HomePage12}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                            <div className="opacity-0 hover:bg-black hover:opacity-50 rounded-3xl absolute w-full h-full top-0 mb-8">
                                <h3 className="hover:opacity-50 text-white">
                                    運動服飾
                                </h3>
                            </div>
                        </div>

                        <div className="h-1/2 rounded-3xl relative cursor-pointer">
                            <img
                                src={HomePage11}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                            <div className="opacity-0 hover:bg-black hover:opacity-50 rounded-3xl absolute w-full h-full top-0">
                                <h3 className="hover:opacity-50 text-white">
                                    營養補給
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="mr-11 w-1/3 h-175 flex flex-col justify-between">
                        <div className="h-1/2 mb-8 rounded-3xl relative cursor-pointer">
                            <img
                                src={HomePage10}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                            <div className="opacity-0 hover:bg-black hover:opacity-50 rounded-3xl absolute w-full h-full top-0 mb-8">
                                <h3 className="hover:opacity-50 text-white">
                                    健身器材
                                </h3>
                            </div>
                        </div>

                        <div className="h-1/2 rounded-3xl relative cursor-pointer">
                            <img
                                src={HomePage9}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                            <div className="opacity-0 hover:bg-black hover:opacity-50 rounded-3xl absolute w-full h-full top-0">
                                <h3 className="hover:opacity-50 text-white">
                                    運動鞋類
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Section */}
            <div className="h-208 flex mt-7">
                <div className="relative h-175 w-full  w-2/4">
                    <BsFillCaretLeftFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 transform -translate-y-1/2 cursor-pointer z-10" />
                    <img
                        src={HomePage14}
                        className="h-full w-full object-cover filter brightness-50"
                        alt=""
                    />
                    <BsFillCaretRightFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 right-2/4 transform -translate-y-1/2 cursor-pointer z-10" />
                    <div className="absolute top-0 h-full overflow-y-auto w-screen">
                        <h2 className="text-white text-2xl px-20">精選影片</h2>
                        <p className="font-normal text-white tracking-wide leading-snug mb-4 px-20">
                            章節一：我該增肌還是減脂？健身基礎知識判斷
                            <br />
                            1-1：帶你了解 inbody 各種真實資訊 教你看Inbody數據
                            <br />
                            1-2：設定自己的目標（增肌、減脂、同時增肌減脂）
                            <br />
                            PEETA增肌計畫EP01 ｜增肌重訓課表＋TDEE觀念
                            <br />
                            PEETA教室：何時增肌｜減脂｜TDEE | 如何達到理想身材？
                            <br />
                            PEETA增肌計畫EP02 | 重訓進步的關鍵！！漸進性負重增加
                            <br />
                            1-3：用 APP 飲食控制：
                            <br />
                            下載這個APP，增肌減脂成功一半！-Myfitnesspal操作介紹
                            <br />
                            <br />
                            章節二：減重飲食的各種方法介紹
                            <br />
                            2-1：飲食減肥重種類：低碳、低脂、碳循環、生酮的操作方式
                            <br />
                            哪種飲食最能有效減脂？｜低醣、生酮、低脂、間歇式斷食
                            <br />
                            2-2：斷食執行方式：168、186、204 ...等斷食法
                            <br />
                            適合輕斷食的三種時間｜斷食全攻略-EP2｜營養師這樣說
                            <br />
                            2-3：碳循環飲食：高低碳日的搭配，達到增肌減脂目的
                            <br />
                            碳循環飲食 -<br />
                            增肌減脂必備｜最棒的健身飲食？｜10週增肌計畫EP-08
                            <br />
                            <br />
                            章節三：肩部肌群訓練動作
                            <br />
                            3-1：運動防疫小教室-第八堂/肩膀推舉
                            <br />
                            3-2：三運健身器材教學-肩推機#10
                            <br />
                            <br />
                            章節四：胸部肌群訓練動作
                            <br />
                            4-1：三運健身器材教學-雙功能蝴蝶機#09
                            <br />
                            4-2：三運健身器材教學-胸推機#08
                            <br />
                            4-3：運動防疫小教室/第二堂-伏地挺身
                            <br />
                            <br />
                            章節五：背部肌群訓練動作
                            <br />
                            5-1：運動防疫小教室-第六堂/背部訓練
                            <br />
                            5-2：三運健身器材教學-滑輪下拉機#07
                            <br />
                            5-3：三運健身器材教學-多功能滑輪下拉機#06
                            <br />
                            5-4：三運健身器材教學-坐姿划船機#05
                            <br />
                            <br />
                            章節六：腿部肌群訓練動作
                            <br />
                            6-1：運動防疫小教室/第五堂-分腿蹲
                            <br />
                            6-2：運動防疫小教室/第一堂-深蹲
                            <br />
                            6-3：三運健身器材教學-腿部外展內收機#04
                            <br />
                            6-4：三運健身器材教學-腿部彎曲機#03
                            <br />
                            6-5：三運健身器材教學-腿部推蹬機 #01
                            <br />
                            6-6：三運健身器材教學-大腿伸展機#02
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
            {/* Gym Section */}
            <section className="h-208 flex bg-gray-900">
                <div className="flex justify-center m-auto">
                    <div className="relative p-72 ">
                        <img
                            className="absolute top-8 left-16 w-2/4"
                            src={Map}
                            alt=""
                        />
                        <Link to="">
                            <TiLocation className="z-0 text-gray-500 hover:text-gray-800 w-24 h-24 absolute top-24 left-56 transform -translate-y-1/2 cursor-pointer" />
                        </Link>
                        <Link to="">
                            <TiLocation className="z-0 text-gray-500 hover:text-gray-800 w-24 h-24 absolute top-72 left-52 transform -translate-y-1/2 cursor-pointer" />
                        </Link>

                        <Link to="">
                            <TiLocation className="z-0 text-gray-500 hover:text-gray-800 w-24 h-24 absolute top-96 left-32 transform -translate-y-1/2 cursor-pointer" />
                        </Link>

                        <Link to="">
                            <TiLocation className="z-0 text-gray-500 hover:text-gray-800 w-24 h-24 absolute top-52 left-32 transform -translate-y-1/2 cursor-pointer" />
                        </Link>
                    </div>
                    <div className="content-right">
                        <h3 class="text-4xl text-white text-center m-6">
                            健身房
                        </h3>
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
                        <Link to="" onClick={handleGymWindow}>
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
                        <Link to="" onClick={handleGymWindow}>
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
                        <Link to="" onClick={handleGymWindow}>
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
                        <Link to="" onClick={handleGymWindow}>
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
