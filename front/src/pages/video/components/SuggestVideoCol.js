import useGet from '../../../utils/useGet';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import Fitness1 from './../../../images/重訓/fitness-1.jpg';
import Person1 from './../../../images/person-1.jpg';
import { FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const SuggestVideoCol = () => {
    const { data: suggestVideos, error, isPending } = useGet(`/videos/suggestVideos`);

    return (
        <>
            { suggestVideos && suggestVideos.map(video => {
                let file = "iSport_Videos/" + video.filePath.slice(15, 28);
                return (
                    <Link to={'/video/' + video.id} className="flex mt-6 h-24 pr-2 max-w-full">
                        <Video
                            cloudName="dnmayrvjj"
                            secure="true"
                            publicId={file}
                            className="w-44 flex-grow-0 flex-shrink-0 h-full object-cover rounded-lg mr-4"
                            sourceType={['jpg']}>
                        </Video>
                        {/* <img className="max-w-48 h-full object-cover rounded-lg mr-4" src={Fitness1} alt="" /> */}

                        <div className="flex flex-col justify-between w-72">

                            <h4 className="text-yellow-400 text-base flex-shrink-0 w-full">
                                {video.title}
                            </h4>

                            <div className="flex justify-between">
                                <h6 className="flex items-center">
                                    <FaClock className="text-yellow-400 mr-1.5" />
                                    <span className="text-xs text-white text-opacity-85">{video.upload_date.slice(0, 10).replace(/-/gi, ' / ')}</span>
                                </h6>
                                <h6 className="flex items-center">
                                    <FaEye className="text-yellow-400 mr-1.5" />
                                    <span className="text-xs text-white text-opacity-85">{video.views}</span>
                                </h6>
                                <h6 className="flex items-center">
                                    <FaThumbsUp className="text-yellow-400 mr-1.5" />
                                    <span className="text-xs text-white text-opacity-85">542</span>
                                </h6>
                            </div>

                        </div>
                    </Link>
                );
            })}
        </>);
};

export default SuggestVideoCol;
