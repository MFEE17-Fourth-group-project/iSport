import videoHeader from './../../images/有氧/cardio-1.jpg';
import VideoCard from './components/VideoCard';
import VideoCard2 from './components/VideoCard2';
import VideoNav from './components/VideoNav';
import { FaSearch } from 'react-icons/fa';

const Video = () => {
    return (
        <div className="">
            <img className="h-112 object-cover w-full" src={videoHeader} alt="" />
            <VideoNav />
            <main className="max-w-screen-xl flex flex-col mx-auto">
                <div className="flex my-6 justify-between">
                    <div>
                        <button className="btn-gray-sm mr-4">最新上傳</button>
                        <button className="btn-yellow-sm">最多觀看</button>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            className="placeholder-white text-white bg-gray-700 border border-solid border-gray-700
                                    uppercase text-base px-4 py-1.5 rounded-full outline-none ease-linear
                                    transition-all duration-150 w-80 focus:w-96 focus:placeholder-gray-400"
                            placeholder="搜尋"
                        />
                        <button className="absolute right-0 top-0 flex text-xl m-1 p-1.5 transform -translate-y-px">
                            <FaSearch className="hover:text-white text-gray-200" />
                        </button>
                    </div>
                </div>

                <div className="flex w-full justify-between mb-6">
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard />
                    <VideoCard2 />
                </div>
                <div className="flex w-full justify-between mb-6">
                    <VideoCard2 />
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard />
                </div>
                <div className="flex w-full justify-between mb-6">
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard />
                    <VideoCard2 />
                </div>
                <div className="flex w-full justify-between mb-6">
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
