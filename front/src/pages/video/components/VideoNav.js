const VideoNav = () => {
    return (
        <nav className="bg-gray-900 flex justify-center">
            <div className="border-b-2 border-yellow-400 w-36 text-yellow-400 text-center text-base py-5 cursor-pointer">
                所有影片
                </div>
            <div className="border-b-2 border-transparent w-36 text-yellow-400 text-center text-base py-5 cursor-pointer hover:border-yellow-400">
                有氧運動
                </div>
            <div className="border-b-2 border-transparent w-36 text-yellow-400 text-center text-base py-5 cursor-pointer hover:border-yellow-400">
                重量訓練
                </div>
            <div className="border-b-2 border-transparent w-36 text-yellow-400 text-center text-base py-5 cursor-pointer hover:border-yellow-400">
                核心強化
                </div>
            <div className="border-b-2 border-transparent w-36 text-yellow-400 text-center text-base py-5 cursor-pointer hover:border-yellow-400">
                增肌飲食
                </div>
            <div className="border-b-2 border-transparent w-36 text-yellow-400 text-center text-base py-5 cursor-pointer hover:border-yellow-400">
                間歇訓練
                </div>
        </nav>
    );
};

export default VideoNav;
