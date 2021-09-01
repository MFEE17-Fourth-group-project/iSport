import cardImg2 from './../../../images/核心/core-1.jpg';
import { FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const VideoCard = () => {
    return (
        <Link to="/video/:videoId" className="max-w-max m-auto">
            <div className="max-w-xs rounded-md overflow-hidden shadow-2xl bg-gray-900
                py-4 px-5 flex flex-col">
                <img className="max-h-44 object-cover" src={cardImg2} alt="" />
                <div className="">
                    <h3 className="text-base text-yellow-400 my-4">15 分鐘高强度全身肌肉 無需器材又能在家做的運動</h3>
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
