import videoHeader from './../../images/有氧/cardio-1.jpg';
import cardImg from './../../images/有氧/cardio-2.jpg';

const Video = () => {
    return (
        <div className="">
            <img className="h-112 object-cover w-full" src={videoHeader} alt="Header Image" />
            <nav className="bg-gray-900 flex justify-center">
                <div className="border-b-2 border-yellow-400 w-36 text-white text-center text-base py-5">
                    所有影片
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-5">
                    有氧運動
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-5">
                    重量訓練
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-5">
                    核心強化
                </div>
                <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-5">
                    健康料理
                </div>
            </nav>
            <main className="bg-gray-800 h-screen">
                <div className="w-75 rounded-m overflow-hidden shadow-lg bg-gray-900 py-4 px-5 m-10">
                    <img className="w-full h-44 object-fit" src={cardImg} alt="card image" />
                    <div className="">
                        <h3 className="text-base text-yellow-400 my-6">15 分鐘高强度全身肌肉 無需器材又能在家做的運動</h3>
                        <p className="text-white text-sm text-opacity-70 mb-6">
                            分享給大家 - 【15分鐘的全身徒手訓練】
                            即使被禁在家，依然不阻礙我們想訓練的心！
                            一起完成這 23 個動作吧～
                        </p>
                    </div>
                    <div className="">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Video;
