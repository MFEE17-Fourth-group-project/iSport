import AerobicExercise from './../../../images/有氧/1.jpeg';
const ArticleCardRight = () => {
  return (
    <>
      <div
        className="
                      h-60
                      flex
                      justify-center
                      bg-gray-900
                      py-8
                      px-4
          "
      >
        <div className="p-8">
          <h3 className="text-4xl text-white">重量訓練Weight training</h3>
          <p className="text-base leading-loose tracking-wide text-white">
            以增加肌肉強度及體積為目標的力量訓練。使用不同部位骨骼肌組織之收縮（向心收縮或離心收縮）產生之力量，抗衡重力（通常指啞鈴、槓鈴及其他器械之重量或阻力），使肌肉得到鍛鍊。
          </p>
        </div>
        <img className="rounded-md" src={AerobicExercise} />
      </div>
    </>
  );
};

export default ArticleCardRight;
