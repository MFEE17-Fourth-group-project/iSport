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


const HomePage = () => {
    // const [bannerImage, setBannerImage] = useState([
    //     HomePage1,
    //     HomePage2,
    //     HomePage3,
    //     HomePage4
    // ]);
    // useEffect(() => {

    // }, []);

    return (
        <div className="max-w-screen-2xl mx-auto">
            {/* Banner Image */}
            <div className="relative h-175 w-full">
                <BsFillCaretLeftFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 transform -translate-y-1/2 cursor-pointer" />
                <img
                    src={HomePage1}
                    className="h-full w-full object-cover"
                />
                <BsFillCaretRightFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 right-0 transform -translate-y-1/2 cursor-pointer" />
                <div className="absolute bottom-40 left-40">
                    <h1 className="font-normal text-5xl text-white tracking-wide leading-snug mb-4">
                        提供健身資訊分享平台與眾多<br />
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
                            各式各樣的健身相關影片，讓您無論在戶外或是家裡都可以隨時<br />
                            隨地觀看，不需擔心固定時間與定點的課程。
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <VideoCard />
                        <VideoCard2 />
                        <VideoCard />
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="w-1/3 ml-8 relative">
                    <img
                        className="w-full rounded-3xl object-cover"
                        src={HomePage8}
                    />
                    {/* <BsCursorFill /> */}
                </div>
            </div>

            {/* Product Section */}
            <div className="h-208 flex mt-7 bg-gray-900">

            </div>
            {/* Article Section */}
            <div className="h-208 flex mt-7">

            </div>
            {/* Gym Section */}
            <div className="h-208 flex mt-7 bg-gray-900">

            </div>
        </div>
    );
};

export default HomePage;
