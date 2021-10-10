import cardImg2 from './../../../images/核心/core-1.jpg';
import { FaClock } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import moment from 'moment';
const VideoCard = ({ video }) => {
    return (
        <Link to="/video/:videoId" className="max-w-max m-auto flex">
            <div
                className="max-w-xs rounded-md overflow-hidden shadow-2xl bg-gray-900
                py-4 px-5 flex flex-col w-96 m-2"
            >
                <img className="max-h-44 object-cover" src={cardImg2} alt="" />
                <div className="">
                    <h3 className="text-base text-yellow-400 my-4  h-12">
                        {video.title}
                    </h3>
                    <p className="text-white text-sm text-opacity-70 mb-6 line-clamp-3  h-14 overflow-hidden">
                        {video.description}
                    </p>
                </div>
                <div className="flex justify-between">
                    <h6 className="flex items-center">
                        <FaClock className="text-yellow-400 mr-1.5" />
                        <span className="text-xs text-white text-opacity-85">
                            {moment(video.upload_date).format(
                                'YYYY-MM-DD HH:mm'
                            )}
                        </span>
                    </h6>
                    <h6 className="flex items-center">
                        <FaEye className="text-yellow-400 mr-1.5" />
                        <span className="text-xs text-white text-opacity-85">
                            {video.views}
                        </span>
                    </h6>
                    <h6 className="flex items-center">
                        <FaThumbsUp className="text-yellow-400 mr-1.5" />
                        <span className="text-xs text-white text-opacity-85">
                            {video.likes}
                        </span>
                    </h6>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
