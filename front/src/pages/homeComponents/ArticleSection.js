import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import Article from '../article/components/Article';
import { Link } from 'react-router-dom';

const ArticleSection = () => {
    return (
        <div className="relative h-208 w-full">
            <BsFillCaretLeftFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 transform -translate-y-1/2 cursor-pointer z-10" />

            <BsFillCaretRightFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 right-0 transform -translate-y-1/2 cursor-pointer" />
            <div className="text-center py-6 my-7">
                <span className="text-white text-4xl border-b-2 border-yellow-400 py-6 my-7">
                    精選文章
                </span>
            </div>
            <p className="text-white text-2xl text-center w-full">
                這裡有豐富強大的健身資料庫，提供您健身資訊、營養菜單...
            </p>
            <div className="object-cover filter brightness-100 h-112">
                <div className="mx-auto my-20 h-full overflow-y-auto w-3/4">
                    <Link className="flex-1" to="/articles">
                        <Article />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleSection;
