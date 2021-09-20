import { Link } from 'react-router-dom';

const ArticleNav = () => {
    return (
        <nav className="bg-gray-900 flex justify-center">
            {/* <Link to="/articles"> */}
            <div
                className="border-b-2 border-yellow-400 w-36 text-yellow-400 text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer"
            >
                所有文章
            </div>
            {/* </Link> */}
            {/* <Link to="/ArticleAerobicExercise"> */}
            <div
                className="border-b-2 border-transparent w-36 text-white text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer 
                hover:border-yellow-400 hover:text-yellow-400"
            >
                有氧運動
            </div>
            {/* </Link> */}
            {/* <Link to="/ArticleWeightTraining"> */}
            <div
                className="border-b-2 border-transparent w-36 text-white text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer 
                hover:border-yellow-400 hover:text-yellow-400"
            >
                重量訓練
            </div>
            {/* </Link> */}
            {/* <Link to="/ArticleCoreStrength"> */}
            <div
                className="border-b-2 border-transparent w-36 text-white text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer 
                hover:border-yellow-400 hover:text-yellow-400"
            >
                核心強化
            </div>
            {/* </Link> */}
            {/* <Link to="/ArticleLeanBulking"> */}
            <div
                className="border-b-2 border-transparent w-36 text-white text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer 
                hover:border-yellow-400 hover:text-yellow-400"
            >
                增肌飲食
            </div>
            {/* </Link> */}
            {/* <Link to="/ArticleTABATATraining"> */}
            <div
                className="border-b-2 border-transparent w-36 text-white text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer 
                hover:border-yellow-400 hover:text-yellow-400"
            >
                間歇訓練
            </div>
            {/* </Link> */}
        </nav>
    );
};

export default ArticleNav;
