import VideoCard from './VideoCard';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const VideoList = ({ videos, cat }) => {
    const [videoData, setVideoData] = useState(videos);
    const [term, setTerm] = useState('');

    const handleUpdateButton = () => {
        let newVideos = videoData.sort((a, b) =>
            b.upload_date.replace(/-/gi, '') - a.upload_date.replace(/-/gi, ''));
        setVideoData([...newVideos]);
    };

    const handleViewsButton = () => {
        let newVideos = videoData.sort((a, b) => b.views - a.views);
        setVideoData([...newVideos]);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        let newVideos = videos.filter(video =>
            video.title.indexOf(term) > -1 || video.description.indexOf(term) > -1);
        setVideoData([...newVideos]);
    };

    const handleEmpty = (e) => {
        if (e.target.value === '') setVideoData(videos);
    };

    return (
        <>
            {/* Buttons & Search */}
            <div className="flex my-6 justify-between flex-col xs:flex-row">
                <div className="flex mb-2.5 xs:mb-0">
                    <button
                        className="btn-gray-sm mr-4"
                        onClick={handleUpdateButton}
                    >最新上傳</button>
                    <button
                        className="btn-yellow-sm mr-4"
                        onClick={handleViewsButton}
                    >最多觀看</button>
                </div>
                <form
                    className="relative flex"
                    onSubmit={(e) => handleSearch(e)}
                >
                    <input
                        type="text"
                        className="placeholder-white text-white bg-gray-700 border border-solid border-gray-700
                                    text-base px-4 py-1.5 rounded-full outline-none ease-linear
                                    transition-all duration-150 w-full xs:w-56 xs:focus:w-60 sm:w-80 sm:focus:w-96 focus:placeholder-gray-400
                                    "
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        onKeyUp={(e) => handleEmpty(e)}
                        placeholder="搜尋"
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 flex text-xl m-1 p-1.5 transform -translate-y-px">
                        <FaSearch className="hover:text-white text-gray-200" />
                    </button>
                </form>
            </div>

            {/* VideoList */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 
                    lg:grid-cols-4 gap-4 xs:gap-2.5 sm:gap-4 pb-5">
                {videoData && (parseInt(cat) === 0) ? videoData.map(video => (
                    <VideoCard video={video} key={video.id} />
                )) : videoData.filter(video => video.category === parseInt(cat)).map(video => (
                    <VideoCard video={video} key={video.id} />
                ))}
            </div>

            {/* Pagination */}
            <nav className="flex mx-auto pb-5">
                <ul className="flex pl-0 rounded list-none flex-wrap">
                    <li>
                        <button
                            className="first:ml-0 text-lg font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-white bg-gray-700">
                            <BiChevronLeft />
                        </button>
                    </li>
                    <li>
                        <button
                            className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-white bg-gray-900">
                            1
                        </button>
                    </li>
                    <li>
                        <button
                            className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-white bg-gray-700">
                            2
                        </button>
                    </li>
                    <li>
                        <button
                            className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-white bg-gray-700">
                            3
                        </button>
                    </li>
                    <li>
                        <button
                            className="first:ml-0 text-lg font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-white bg-gray-700">
                            <BiChevronRight />
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default VideoList;
