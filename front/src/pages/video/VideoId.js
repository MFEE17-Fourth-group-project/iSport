import { Link, useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import SuggestVideoCol from './components/SuggestVideoCol';
import SuggestArtCol from './components/SuggestArtCol';
import Comment from './components/Comment';
import Person2 from './../../images/person-2.jpg';
import {
    FaClock,
    FaThumbsUp,
    FaShare,
    FaRegHeart,
    FaList,
    FaCaretDown,
    FaComments
} from "react-icons/fa";


const VideoId = () => {
    const { videoId } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getVideoData() {
            let res = await axios.get(`${API_URL}/videos/${videoId}`);
            setData(res.data[0]);
        }
        getVideoData();
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto xs:p-6 grid grid-cols-3 gap-x-10 lg:grid-rows-2 gap-y-6 items-start">
            {/* Video Main Section */}
            {data && (<div className="lg:col-span-2 lg:row-span-1 col-span-full">
                <video src="" alt="Video Preview" width="100%"
                    controls controlsList="nodownload" muted></video>
                <h1 className="text-white text-xl mt-4 mx-5 xs:mx-0">{data.title}</h1>

                <div className="my-3 pb-2 border-b-2 border-yellow-400 flex
                    sm:justify-between justify-center mx-5 xs:mx-0">
                    <div className="sm:flex items-center hidden">
                        <h4 className="text-sm text-white mr-4 w-max">觀看次數：{data.views}次</h4>
                        <FaClock className="text-yellow-400 mr-1" />
                        <span className="text-xs text-white w-max">{data.upload_date.slice(0, 10).replace(/-/gi, ' / ')}</span>
                    </div>
                    <div className="flex w-full justify-between sm:justify-end">
                        <div className="flex mr-4 items-center">
                            <FaThumbsUp className="text-yellow-400 mr-1 cursor-pointer sm:text-base xs:text-2xl" />
                            <span className="text-sm sm:text-xs text-white w-max">{data.likes}</span>
                        </div>
                        <div className="flex mr-4 items-center">
                            <FaShare className="text-yellow-400 mr-1 cursor-pointer sm:text-base xs:text-2xl" />
                            <span className="text-sm sm:text-xs text-white w-max">分享</span>
                        </div>
                        <Link to="/user/videoCollection" className="flex mr-4 items-center">
                            <FaRegHeart className="text-red-400 mr-1 sm:text-base xs:text-2xl" />
                            <span className="text-sm sm:text-xs text-white w-max">收藏</span>
                        </Link>
                        <Link to="/user/watchLater" className="flex items-center">
                            <FaList className="text-yellow-400 mr-1 sm:text-base xs:text-2xl" />
                            <span className="text-sm sm:text-xs text-white w-max">稍後觀看</span>
                        </Link>
                    </div>
                </div>

                <h3 className="text-white text-lg mt-2.5 mb-2 font-bold mx-5 xs:mx-0">影片簡介</h3>
                <p className="text-white text-base ml-8 mx-5 xs:mr-14 sm:mr-20 md:mr-28">
                    {data.description}
                </p>
                <div className="mt-3 xs:my-3 pb-2 border-b-2 border-yellow-400 flex
                    justify-center mx-5 xs:mx-0">
                    <div className="group cursor-pointer relative flex flex-col items-center">
                        <span className="text-xs text-white pb-4 transform transition duration-200
                        group-hover:text-gray-200 group-hover:-translate-y-0.5">顯示更多</span>
                        <FaCaretDown className="text-yellow-400 absolute bottom-0 transform 
                            transition duration-200 group-hover:translate-y-0.5" />
                    </div>
                </div>
            </div>)}

            {/* Suggestion Section */}
            <div className="lg:col-span-1 lg:row-span-2 col-span-full mx-5 xs:mx-0">
                <div className="mt-0 border-b-2 pb-5 border-yellow-400 lg:border-b-0 lg:pb-0">
                    <h3 className="text-xl text-white lg:pb-2 lg:border-b-2 lg:border-yellow-400 ">推薦影片</h3>
                    <SuggestVideoCol />
                    <SuggestVideoCol />
                    <SuggestVideoCol />
                    <SuggestVideoCol />
                    <SuggestVideoCol />
                    <SuggestVideoCol />
                </div>
                <div className="mt-6 hidden lg:block">
                    <h3 className="text-xl text-white pb-2 border-b-2 border-yellow-400">推薦文章</h3>
                    <SuggestArtCol />
                    <SuggestArtCol />
                    <SuggestArtCol />
                    <SuggestArtCol />
                    <SuggestArtCol />
                </div>
            </div>

            {/* Comment Section */}
            <div className="lg:col-span-2 lg:row-span-1 col-span-full mx-5 xs:mx-0">
                <div className="flex items-center mb-7">
                    <FaComments className="text-yellow-400 mr-1 text-lg hidden xs:block" />
                    <span className="text-sm font-medium xs:font-normal xs:text-base text-white mr-4">48 則留言</span>
                    <button className="btn-yellow-sm mr-3">最新留言</button>
                    <button className="btn-gray-sm">熱門留言</button>
                </div>
                <div className="flex mb-7">
                    <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={Person2}
                    />
                    <div className="flex flex-col w-full">
                        <input
                            className="pb-1 placeholder-white text-base text-white border-b border-gray-400 bg-gray-800
                                self-start w-full focus:outline-none focus:placeholder-gray-400 focus:border-white mb-2"
                            placeholder="新增留言"
                        />
                        <div className="flex justify-end">
                            <button className="btn-gray-sm mr-3">取消</button>
                            <button className="btn-yellow-sm">留言</button>
                        </div>
                    </div>
                </div>

                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>

        </div>
    );
};

export default VideoId;
