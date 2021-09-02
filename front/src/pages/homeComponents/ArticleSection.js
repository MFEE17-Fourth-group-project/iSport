import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import Article from '../article/components/Article';
const ArticleSection = () => {
    return (
        <div className="relative h-208 w-full">
            <BsFillCaretLeftFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 transform -translate-y-1/2 cursor-pointer z-10" />

            <BsFillCaretRightFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 right-0 transform -translate-y-1/2 cursor-pointer" />
            <div className="">
                <h2 className="text-white text-4xl border-b-2 border-yellow-400 pl-7 py-6 ml-10 my-7 text-center">
                    精選文章
                </h2>
                <p className="text-white text-2xl text-center">
                    想要擁有好身材，均勻地鍛鍊全身肌群是絕不可或缺的，
                    因為肌肉可是「超級塑身衣」喔！
                </p>
            </div>
            <div className="object-cover filter brightness-100 h-112">
                <div className="mx-auto my-20 h-full overflow-y-auto w-3/4">
                    <Article />
                </div>
            </div>
        </div>
    );
};

export default ArticleSection;
