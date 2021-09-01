import Fitness1 from './../../../images/重訓/fitness-1.jpg';
import Person1 from './../../../images/person-1.jpg';
import { FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const SuggestVideoCol = () => {
    return (
        <div className="flex mt-6 h-24 pr-2">
            <div className="w-48 mr-4">
                <img className="w-full h-full object-cover rounded-lg" src={Fitness1} alt="" />
            </div>

            <div className="flex flex-col justify-between">

                <h4 className="text-yellow-400 text-base">
                    15 分鐘高強度全身肌肉 無需器材又能在家做的運動
                        </h4>

                <div className="flex items-center">
                    <img
                        className="w-6 h-6 rounded-full mr-1.5"
                        src={Person1}
                    />
                    <span className="text-white text-sm">沙拉</span>
                </div>

                <div className="flex justify-between">
                    <h6 className="flex items-center">
                        <FaClock className="text-yellow-400 mr-1.5" />
                        <span className="text-xs text-white text-opacity-85">3 天前</span>
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

        </div>
    );
};

export default SuggestVideoCol;
