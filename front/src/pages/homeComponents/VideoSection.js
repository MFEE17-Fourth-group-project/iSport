import HomePage8 from './../../images/homepage/homepage-8.jpg';
import VideoCard from './../video/components/VideoCard';
import VideoCard2 from './../video/components/VideoCard2';

const VideoSection = () => {
    return (
        <div className="w-full h-full flex">
            <div className="w-2/3">
                <div className="mt-10 ml-24">
                    <h2 className="text-white text-4xl">精選影片</h2>
                    <p className="text-white text-2xl border-l-4 border-yellow-400 pl-7 py-6 ml-10 my-7">
                        各式各樣的健身相關影片，讓您無論在戶外或是家裡都可以隨時
                        <br />
                        隨地觀看，不需擔心固定時間與定點的課程。
                    </p>
                </div>
                <div className="flex justify-between">
                    <VideoCard />
                    <VideoCard2 />
                    <VideoCard />
                </div>
                <div className=""></div>
            </div>
            <div className="w-1/3 ml-8 mt-7 relative">
                <img
                    className="w-full rounded-3xl object-cover"
                    src={HomePage8}
                />
                {/* <BsCursorFill /> */}
            </div>
        </div>
    );
};

export default VideoSection;
