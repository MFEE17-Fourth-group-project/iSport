import cardImg2 from './../../../images/核心/core-1.jpg';
import { FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const VideoCard = () => {
    return (
        <Link to="/video/:videoId">
            <div className="w-75 rounded-md overflow-hidden shadow-xl bg-gray-900 py-4 px-5 cursor-pointer">

                <img className="w-full h-44 object-fit" src={cardImg2} alt="" />
                <div className="">
                    <h3 className="text-base text-yellow-400 my-6">15 分鐘高强度全身肌肉 無需器材又能在家做的運動</h3>
                    <p className="text-white text-sm text-opacity-70 mb-6">
                        分享給大家 - 【15分鐘的全身徒手訓練】
                        即使被禁在家，依然不阻礙我們想訓練的心！
                        一起完成這 23 個動作吧～
                    </p>
                </div>
                <div className="flex justify-between">
                    <h6 className="flex items-center">
                        <FaClock className="text-yellow-400 mr-1.5" />
                        <span className="text-xs text-white text-opacity-85">1530</span>
                    </h6>
                    <h6 className="flex items-center">
                        <FaEye className="text-yellow-400 mr-1.5" />
                        <span className="text-xs text-white text-opacity-85">1530</span>
                    </h6>
                    <h6 className="flex items-center">
                        <FaThumbsUp className="text-yellow-400 mr-1.5" />
                        <span className="text-xs text-white text-opacity-85">542</span>
                    </h6>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
