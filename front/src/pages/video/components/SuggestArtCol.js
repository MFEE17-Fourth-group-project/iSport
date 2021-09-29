import useGet from '../../../utils/useGet';
import { Link } from 'react-router-dom';
import Person1 from './../../../images/person-1.jpg';
import { FaEye } from "react-icons/fa";

const SuggestVideoCol = () => {
    const { data: suggestArticles, error, isPending } = useGet(`/videos/suggestArticles`);

    return (
        <>
            { suggestArticles && suggestArticles.map((article, idx) => (
                <Link to={'/article/' + article.id} className="flex mt-6 h-28">
                    <div className="mr-4">
                        <h2 className="text-4xl text-extrabold text-white">{idx + 1}</h2>
                    </div>

                    <div className="flex flex-col justify-between">

                        <h4 className="text-white text-lg">
                            {article.title}
                        </h4>

                        <div className="flex items-center">
                            <span className="text-white text-base mr-2">
                                {article.article_name}
                            </span>
                            <span
                                className="text-gray-500">
                                {article.upload_date.slice(0, 10).replace(/-/, '年').replace(/-/, '月').concat('日')}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <h6 className="flex items-center">
                                <FaEye className="text-yellow-400 mr-1.5" />
                                <span className="text-xs text-white text-opacity-85">{article.views}</span>
                            </h6>
                        </div>

                    </div>
                </Link>
            ))}
        </>);
};

export default SuggestVideoCol;
