import useGet from '../../../utils/useGet';
import { Link } from 'react-router-dom';
import Person1 from './../../../images/person-1.jpg';
import { FaEye } from 'react-icons/fa';

const SuggestVideoCol = () => {
    const {
        data: suggestArticles,
        error,
        isPending,
    } = useGet(`/videos/suggestArticles`);

    return (
        <>
            {suggestArticles &&
                suggestArticles.map((article, idx) => (
                    <Link
                        to={'/article/' + article.id}
                        className="flex mt-6 h-20"
                    >
                        <div className="mr-4">
                            <h2 className="text-4xl text-extrabold text-white">
                                {idx + 1}
                            </h2>
                        </div>
                        <div className="flex flex-col justify-between">
                            <h4 className="text-white text-lg">
                                {article.title}
                            </h4>
                        </div>
                    </Link>
                ))}
        </>
    );
};

export default SuggestVideoCol;
