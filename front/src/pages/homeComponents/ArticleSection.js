import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import Article from '../article/components/Article';
import { Link } from 'react-router-dom';

const ArticleSection = () => {
    return (
        <div className="relative h-208 w-full">
            <BsFillCaretLeftFill
                className="text-yellow-400 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 absolute
                inset-y-1/2 transform -translate-y-1/2 cursor-pointer hidden 2xs:block"
            />

            <BsFillCaretRightFill
                className="text-yellow-400 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 absolute
                inset-y-1/2 right-0 transform -translate-y-1/2 cursor-pointer hidden 2xs:block"
            />
            <div className="text-center py-6 mt-3.5 sm:my-7">
                <span className="text-white text-2xl lg:text-3xl xl:text-4xl border-b-2 sm:border-b-4 border-yellow-400 pb-2.5 sm:pb-3.5">
                    精選文章
                </span>
            </div>
            <p className="text-white text-xl sm:text-2xl text-center w-full px-4 hidden md:block">
                這裡有豐富強大的健身資料庫，提供您健身資訊、營養菜單...
            </p>
            <div className="object-cover filter brightness-100 h-112">
                <div className="mx-auto my-8 sm:my-20 h-full overflow-y-auto w-3/4">
                    <Link className="flex-1" to="/articles">
                        <Article />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleSection;
