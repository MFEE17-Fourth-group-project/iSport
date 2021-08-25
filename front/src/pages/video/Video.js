import videoHeader from './../../images/有氧/cardio-1.jpg';
import VideoCard from './components/VideoCard';
import VideoCard2 from './components/VideoCard2';

const Video = () => {
    return (
        <div className="">
            <img className="h-112 object-cover w-full" src={videoHeader} alt="" />
            <nav className="bg-gray-900 flex justify-center">
                <div className="border-b-2 border-yellow-400 w-36 text-white text-center text-base py-5">
                    所有影片
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-5">
                    有氧運動
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-5">
                    重量訓練
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-5">
                    核心強化
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-5">
                    健康料理
                </div>
            </nav>
            <main className="bg-gray-800 h-screen">
                <div className="max-w-screen-xl flex flex-col mx-auto">
                    <div className="flex my-6 justify-between">
                        <div>
                            <button className="btn-gray mr-4">最新上傳</button>
                            <button className="btn-yellow">最多觀看</button>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="placeholder-white text-white bg-gray-700 border border-solid border-gray-700
                                    uppercase text-base px-4 py-2 rounded-full outline-none ease-linear
                                    transition-all duration-150"
                                placeholder="搜尋"
                            />
                        </div>
                    </div>
                    <div className="flex">

                        <VideoCard />
                        <VideoCard2 />
                        <VideoCard />
                        <VideoCard2 />

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Video;
