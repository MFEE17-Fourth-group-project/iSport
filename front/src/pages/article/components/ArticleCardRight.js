import AerobicExercise from './../../../images/有氧/1.jpeg';
const ArticleCardRight = () => {
    return (
        <>
            <div
                className="
                flex flex-col xl:flex-row
                      bg-gray-900
                      py-8
                      px-4
                      w-4/5
          "
            >
                <div className="p-8">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl text-white">
                        重量訓練Weight training
                    </h3>
                    <p className="text-base leading-loose tracking-wide text-white">
                        以增加肌肉強度及體積為目標的力量訓練。使用不同部位骨骼肌組織之收縮（向心收縮或離心收縮）產生之力量，抗衡重力（通常指啞鈴、槓鈴及其他器械之重量或阻力），使肌肉得到鍛鍊。
                    </p>
                </div>
                <img
                    className="w-60 h-40 rounded-md m-auto"
                    src={AerobicExercise}
                    alt=""
                />
            </div>
        </>
    );
};

export default ArticleCardRight;
