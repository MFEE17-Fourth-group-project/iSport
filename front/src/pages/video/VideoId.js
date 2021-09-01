import { Link } from 'react-router-dom';
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
    return (
        <div className="max-w-screen-2xl mx-auto p-6 flex flex-col lg:flex-row flex-wrap">
            <div className="w-full lg:w-8/12 lg:pr-10 flex-shrink-0">
                <video src="" alt="Video Preview" width="100%"
                    controls controlsList="nodownload" muted></video>
                <h1 className="text-white text-xl mt-4">《適合在健身房或家裡健身播放的英文輕電音》- 健身時刻</h1>

                <div className="my-3 pb-2 border-b-2 border-yellow-400 flex justify-between">
                    <div className="flex items-center">
                        <h4 className="text-sm text-white mr-4">觀看次數：116,157次</h4>
                        <FaClock className="text-yellow-400 mr-1" />
                        <span className="text-xs text-white">2021/06/22</span>
                    </div>
                    <div className="flex items-center">
                        <FaThumbsUp className="text-yellow-400 mr-1 cursor-pointer" />
                        <span className="text-xs text-white mr-4">2844</span>
                        <FaShare className="text-yellow-400 mr-1 cursor-pointer" />
                        <span className="text-xs text-white mr-4">分享</span>
                        <Link to="/user/videoCollection" className="flex mr-4">
                            <FaRegHeart className="text-red-400 mr-1" />
                            <span className="text-xs text-white">收藏</span>
                        </Link>
                        <Link to="/user/watchLater" className="flex">
                            <FaList className="text-yellow-400 mr-1" />
                            <span className="text-xs text-white">稍後觀看</span>
                        </Link>
                    </div>
                </div>

                <h3 className="text-white text-lg mt-2.5 mb-2 font-bold">影片簡介</h3>
                <p className="text-white text-base ml-8">
                    在家就是要健身!你動起來了沒??<br />
                    在家待久了大家最怕的是肯定會變胖<br />
                    待在家其實多了很多自己的時間，不如來讓自己的肥肉熱起來吧!<br />
                    找不到動力嗎?這歌單會保證讓你全身熱血沸騰!<br />
                    分享一下我朋友的經驗<br />
                    他從93kg練到現在是68kg，花了12個月的時間<br />
                    我覺得他真的超強!<br />
                    他可以，我們肯定也可以! (我自己也在努力當中XD)<br />
                    希望這輕電音歌單帶給你滿滿的動力喔 加油!<br />
                </p>
                <div className="my-3 pb-2 border-b-2 border-yellow-400 flex justify-center">
                    <div className="group cursor-pointer relative flex flex-col items-center">
                        <span className="text-xs text-white pb-4 transform transition duration-200
                        group-hover:text-gray-200 group-hover:-translate-y-0.5">顯示更多</span>
                        <FaCaretDown className="text-yellow-400 absolute bottom-0 transform 
                            transition duration-200 group-hover:translate-y-0.5" />
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-4/12 flex flex-col">
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

            <div className="order-last lg:order-none w-full lg:w-8/12 mr-10 mt-5 lg:mt-0">
                <div className="flex items-center mb-7">
                    <FaComments className="text-yellow-400 mr-1 text-lg" />
                    <span className="text-base text-white mr-4">48 則留言</span>
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
