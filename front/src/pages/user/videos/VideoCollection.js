import Aside from './../../../global/Aside';
import SuggestVideoCol from './../../video/components/SuggestVideoCol';

const VideoCollection = () => {
    return (
        <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start">
            <Aside />
            <artical className="w-full">
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                    收藏影片
                </div>
                <div className="text-white bg-gray-900 w-full pl-20 pb-6 flex flex-col rounded-b-xl">
                    <div className="mb-4">
                        <SuggestVideoCol />
                    </div>
                    <div className="mb-4">
                        <SuggestVideoCol />
                    </div>
                    <div className="mb-4">
                        <SuggestVideoCol />
                    </div>
                    <div className="mb-4">
                        <SuggestVideoCol />
                    </div>
                    <div className="mb-4">
                        <SuggestVideoCol />
                    </div>
                    <div className="mb-4">
                        <SuggestVideoCol />
                    </div>
                </div>
            </artical>
        </main>
    );
};

export default VideoCollection;
