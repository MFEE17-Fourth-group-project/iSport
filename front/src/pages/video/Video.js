import videoHeader from './../../images/有氧/cardio-1.jpg';
import VideoCard from './components/VideoCard';
import VideoCard2 from './components/VideoCard2';
import VideoNav from './components/VideoNav';
import { FaSearch } from 'react-icons/fa';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { useState } from 'react';

const Video = () => {
    (async function () {
        let res = await axios.get(`${API_URL}/videos`);
        console.log(res.data);
    })();
    const [data, setData] = useState();

    return (
        <div className="">
            <div className="h-44 xs:h-64 sm:h-72 md:h-96 lg:h-112 ">
                <img className="object-cover h-full min-w-full" src={videoHeader} alt="" />
            </div>
            <VideoNav />
            <main className="max-w-screen-xl flex flex-col mx-auto px-2.5 sm:px-5">
                <div className="flex my-6 justify-between flex-col xs:flex-row">
                    <div className="flex mb-2.5 xs:mb-0">
                        <button className="btn-gray-sm mr-4">最新上傳</button>
                        <button className="btn-yellow-sm mr-4">最多觀看</button>
                    </div>
                    <div className="relative flex">
                        <input
                            type="text"
                            className="placeholder-white text-white bg-gray-700 border border-solid border-gray-700
                                    uppercase text-base px-4 py-1.5 rounded-full outline-none ease-linear
                                    transition-all duration-150 w-full xs:w-56 xs:focus:w-60 sm:w-80 sm:focus:w-96 focus:placeholder-gray-400
                                    "
                            placeholder="搜尋"
                        />
                        <button className="absolute right-0 top-0 flex text-xl m-1 p-1.5 transform -translate-y-px">
                            <FaSearch className="hover:text-white text-gray-200" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 
                    lg:grid-cols-4 gap-4 xs:gap-2.5 sm:gap-4 pb-5">
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard2 />
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard2 />
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard />
                </div>
            </main>
        </div>
    );
};

export default Video;
