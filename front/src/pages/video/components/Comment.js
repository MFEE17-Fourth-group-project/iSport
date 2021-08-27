import Person2 from './../../../images/person-2.jpg';

const Comment = () => {
    return (
        <div className="flex mb-6">
            <img
                className="w-12 h-12 rounded-full mr-4"
                src={Person2}
            />
            <div>
                <div className="flex">
                    <h4 className="text-white font-bold text-sm mb-3 mr-2">美美</h4>
                    <span className="text-gray-400 text-sm">1 天前</span>
                </div>
                <p className="text-white text-sm">
                    真的非常喜歡你的歌單<br />
                    讓人心情有種說不出的感覺🥰<br />
                    會很享受生活上的每一刻😂<br />
                </p>
            </div>
        </div>
    );
};

export default Comment;
