import HomePage8 from './../../images/homepage/homepage-8.jpg';
import VideoCard from './../video/components/VideoCard';
import VideoCard2 from './../video/components/VideoCard2';

const VideoSection = () => {
    return (
        <div className="w-full h-124 sm:h-168 sm:grid grid-cols-3 grid-rows-3 overflow-hidden">
            <div className="col-span-full xl:col-span-2 row-span-1">
                <div className="flex justify-center sm:block mt-7 md:mt-10 xl:ml-24 mx-10">
                    <h2 className="w-max text-white pb-2.5 sm:pb-0 mb-5 sm:mb-0 sm:text-left
                        text-2xl lg:text-3xl xl:text-4xl border-b-2 sm:border-b-0 border-yellow-400">精選影片</h2>
                    <p className="text-white text-lg md:text-xl lg:text-2xl border-l-4 border-yellow-400
                        pl-5 py-4 lg:pl-7 lg:py-6 ml-10 my-7 hidden sm:block">
                        各式各樣的健身相關影片，讓您無論在戶外或是家裡都可以隨時隨地觀看，不需擔心固定時間與定點的課程。
                    </p>
                </div>
            </div>
            <div className="ml-8 mt-7 relative hidden xl:block row-span-2 col-span-1 self-start">
                <img
                    className="h-152 w-full rounded-3xl object-cover shadow-lg"
                    src={HomePage8}
                />
                {/* <BsCursorFill /> */}
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute top-72 right-20"
                >
                    胸肌
                </button>
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute top-80 left-10"
                >
                    背肌
                </button>
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute bottom-36 right-32"
                >
                    腹肌
                </button>
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute bottom-32 left-4"
                >
                    臀肌
                </button>
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute bottom-10 left-72"
                >
                    腿肌
                </button>
            </div>
            <div
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-x-2.5 sm:gap-x-3 gap-y-28
                col-span-3 xl:col-span-2 row-span-2 content-start mx-2.5 sm:mx-3"
            >
                <VideoCard />
                <VideoCard2 />
                <VideoCard />
                <VideoCard2 />
            </div>
        </div>
    );
};

export default VideoSection;
