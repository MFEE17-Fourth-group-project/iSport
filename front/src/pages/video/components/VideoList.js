import VideoCard from './VideoCard';
import { FaSearch } from 'react-icons/fa';

const VideoList = ({ videos }) => {
    return (
        <>
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

            {/* VideoList */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 
                    lg:grid-cols-4 gap-4 xs:gap-2.5 sm:gap-4 pb-5">
                {videos.map(video => (
                    <VideoCard video={video} key={video.id} />
                ))}
            </div>
        </>
    );
};

export default VideoList;
