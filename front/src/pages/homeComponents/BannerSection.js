import HomePage1 from './../../images/homepage/homepage-1.jpg';
import HomePage2 from './../../images/homepage/homepage-2.jpg';
import HomePage3 from './../../images/homepage/homepage-3.jpg';
import HomePage4 from './../../images/homepage/homepage-4.jpg';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';

const BannerSection = () => {
    return (
        <div className="relative h-full w-full">
            <BsFillCaretLeftFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 transform -translate-y-1/2 cursor-pointer" />
            <img
                src={HomePage1}
                className="h-full w-full object-cover"
                alt=""
            />
            <BsFillCaretRightFill className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 right-0 transform -translate-y-1/2 cursor-pointer" />
            <div className="absolute bottom-40 left-40">
                <h1 className="font-normal text-5xl text-white tracking-wide leading-snug mb-4">
                    提供健身資訊分享平台與眾多
                    <br />
                    專業健身影片、文章分享、商城。
                </h1>
                <button className="btn-yellow">立即加入</button>
            </div>
        </div>
    );
};

export default BannerSection;
