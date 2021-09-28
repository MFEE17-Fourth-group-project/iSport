import useGet from '../../../utils/useGet';
import Person1 from './../../../images/person-1.jpg';
import { FaEye } from "react-icons/fa";

const SuggestVideoCol = () => {
    const { data: suggestArticles, error, isPending } = useGet(`/videos/suggestArticles`);

    return (
        <div className="flex mt-6 h-28">

            <div className="mr-4">
                <h2 className="text-4xl text-extrabold text-white">01</h2>
            </div>

            <div className="flex flex-col justify-between">

                <h4 className="text-white text-lg">
                    15 分鐘高強度全身肌肉 無需器材又能在家做的運動
                </h4>

                <div className="flex items-center">
                    <img
                        className="w-6 h-6 rounded-full mr-1.5"
                        src={Person1}
                    />
                    <span className="text-white text-sm">沙拉<span className="text-gray-500"> · 10月26日, 2020年</span></span>
                </div>

                <div className="flex justify-between">
                    <h6 className="flex items-center">
                        <FaEye className="text-yellow-400 mr-1.5" />
                        <span className="text-xs text-white text-opacity-85">1530</span>
                    </h6>
                </div>

            </div>

        </div>
    );
};

export default SuggestVideoCol;
