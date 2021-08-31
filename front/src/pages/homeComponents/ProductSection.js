import HomePage9 from './../../images/homepage/homepage-9.jpg';
import HomePage10 from './../../images/homepage/homepage-10.jpg';
import HomePage11 from './../../images/homepage/homepage-11.jpg';
import HomePage12 from './../../images/homepage/homepage-12.jpg';
import HomePage13 from './../../images/homepage/homepage-13.jpg';

const ProductSection = () => {
    return (
        <div className="flex pt-16 w-full">
            <div className="w-1/3 h-175 mr-10 relative">
                <img
                    src={HomePage13}
                    className="w-full h-full rounded-3xl object-cover"
                />
                <div className="absolute h-80 w-full bg-black bg-opacity-50 bottom-16 pt-8 pl-6 pr-6">
                    <h2 className="text-white text-4xl">多樣商品</h2>
                    <p className="text-white text-2xl border-l-4 border-yellow-400 pl-7 py-6 ml-10 mt-7 mb-3">
                        眾多精選商品，
                        <br />
                        讓你在健康的道路上更加分。
                    </p>
                    <button className="btn-yellow-sm flex ml-auto">立即選購</button>
                </div>
            </div>
            <div className="w-1/3 h-175 mr-10 flex flex-col justify-between">
                <div className="h-1/2 mb-8 rounded-3xl relative cursor-pointer">
                    <img
                        src={HomePage12}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="opacity-0 hover:bg-black hover:opacity-50 rounded-3xl absolute w-full
                                h-full top-0 mb-8">
                        <h3 className="text-white absolute top-1/2 left-1/2
                                    transform -translate-y-1/2 -translate-x-1/2 text-3xl font-medium">
                            運動服飾
                        </h3>
                    </div>
                </div>

                <div className="h-1/2 rounded-3xl relative cursor-pointer">
                    <img
                        src={HomePage11}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="opacity-0 hover:bg-black hover:opacity-50 rounded-3xl absolute w-full h-full top-0">
                        <h3 className="text-white absolute top-1/2 left-1/2
                                    transform -translate-y-1/2 -translate-x-1/2 text-3xl font-medium">
                            營養補給
                        </h3>
                    </div>
                </div>
            </div>
            <div className="mr-11 w-1/3 h-175 flex flex-col justify-between">
                <div className="h-1/2 mb-8 rounded-3xl relative cursor-pointer">
                    <img
                        src={HomePage10}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="opacity-0 hover:bg-black hover:opacity-50 rounded-3xl absolute w-full h-full top-0 mb-8">
                        <h3 className="text-white absolute top-1/2 left-1/2
                                    transform -translate-y-1/2 -translate-x-1/2 text-3xl font-medium">
                            健身器材
                        </h3>
                    </div>
                </div>

                <div className="h-1/2 rounded-3xl relative cursor-pointer">
                    <img
                        src={HomePage9}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="opacity-0 hover:bg-black hover:opacity-50 rounded-3xl absolute w-full h-full top-0">
                        <h3 className="text-white absolute top-1/2 left-1/2
                                    transform -translate-y-1/2 -translate-x-1/2 text-3xl font-medium">
                            運動鞋類
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
