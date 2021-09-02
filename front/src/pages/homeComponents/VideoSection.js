import HomePage8 from './../../images/homepage/homepage-8.jpg';
import VideoCard from './../video/components/VideoCard';
import VideoCard2 from './../video/components/VideoCard2';

const VideoSection = () => {
    return (
        <div className="w-full h-175 grid grid-cols-3 grid-rows-3">
            <div className="col-span-full xl:col-span-2 row-span-1">
                <div className="mt-10 xl:ml-24 mx-24">
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl">精選影片</h2>
                    <p className="text-white text-lg md:text-xl lg:text-2xl border-l-4 border-yellow-400
                        pl-5 py-4 lg:pl-7 lg:py-6 ml-10 my-7">
                        各式各樣的健身相關影片，讓您無論在戶外或是家裡都可以隨時隨地觀看，不需擔心固定時間與定點的課程。
                    </p>
                </div>
            </div>
            <div className="ml-8 mt-7 relative hidden xl:block row-span-2 col-span-1 self-start">
                <img
                    className="w-full rounded-3xl object-cover"
                    src={HomePage8}
                />
                {/* <BsCursorFill /> */}
            </div>
            <div className="grid grid-cols-3 gap-3 xl:col-span-2 row-span-2 content-start">
                <VideoCard />
                <VideoCard2 />
                <VideoCard />
            </div>
        </div>
    );
};

export default VideoSection;
