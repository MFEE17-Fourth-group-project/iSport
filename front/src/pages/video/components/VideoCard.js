import cardImg1 from './../../../images/有氧/cardio-2.jpg';
import { FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    return (
        <Link to={'/video/' + video.id} className="max-w-max m-auto">
            <div className="max-w-xs min-w-full rounded-md overflow-hidden shadow-2xl bg-gray-900
                py-4 px-5 flex flex-col">
                <img className="max-h-44 object-cover" src={cardImg1} alt="" />
                <div className="">
                    <h3 className="text-base text-yellow-400 my-4">{video.title}</h3>
                    <p className="text-white text-sm text-opacity-70 leading-relaxed mb-6 overflow-ellipsis
                        line-clamp overflow-hidden h-16">
                        {video.description}
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
