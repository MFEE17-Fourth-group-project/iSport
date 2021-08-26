import videoHeader from './../../images/有氧/cardio-1.jpg';
import VideoCard from './components/VideoCard';
import VideoCard2 from './components/VideoCard2';
import VideoNav from './components/VideoNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Video = () => {
    return (
        <div className="">
            <img className="h-112 object-cover w-full" src={videoHeader} alt="" />
            <VideoNav />
            <main className="bg-gray-800 min-h-screen">
                <div className="max-w-screen-xl flex flex-col mx-auto">
                    <div className="flex my-6 justify-between">
                        <div>
                            <button className="btn-gray mr-4">最新上傳</button>
                            <button className="btn-yellow">最多觀看</button>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                className="placeholder-white text-white bg-gray-700 border border-solid border-gray-700
                                    uppercase text-base px-4 py-2 rounded-full outline-none ease-linear
                                    transition-all duration-150 w-80"
                                placeholder="搜尋"
                            />
                            <button className="absolute right-0 -top-px flex text-xl m-1.5 p-1.5">
                                <FontAwesomeIcon className="text-white" icon={faSearch} />
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
                </div>
            </main>
        </div>
    );
};

export default Video;
