import { Link } from 'react-router-dom';

import MapImg from '../images/tabata/1.jpeg';
import MapTop from '../images/map/map-top.png';
import MapRight from '../images/map/map-right.png';
import MapBottom from '../images/map/map-bottom.png';
import MapLeft from '../images/map/map-left.png';
const HomePage = () => {
    return (
        <div>
            <div className="">
                <img
                    className="h-112 object-cover w-full"
                    src={MapImg}
                    alt=""
                />

                <main className="bg-gray-800"></main>
            </div>
            <main>
                <section></section>
                <section></section>
                <section></section>
                <section>
                    <div className="content-left flex justify-center">
                        <div className="relative p-60">
                            <Link to="">
                                <img
                                    className="absolute top-10 left-40 w-1/4"
                                    src={MapTop}
                                    alt=""
                                />
                            </Link>
                            <Link to="">
                                <img
                                    className="absolute top-40 left-40
                                 w-1/4"
                                    src={MapRight}
                                    alt=""
                                />
                            </Link>

                            <Link to="">
                                <img
                                    className="absolute top-64 left-14 w-1/4"
                                    src={MapBottom}
                                    alt=""
                                />
                            </Link>

                            <Link to="">
                                <img
                                    className="absolute top-32 left-20 w-1/4"
                                    src={MapLeft}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="content-right">
                            <h3 class="text-4xl text-white text-center m-6">
                                健身房
                            </h3>
                            <Link to="">
                                <div className="card flex items-center m-2">
                                    <img
                                        className="map-img h-24 px-2"
                                        src={MapImg}
                                        alt=""
                                    />
                                    <div class="text-white">
                                        <h5 class="text-2xl">中正運動中心</h5>
                                        <p class="">
                                            電話: 2581-1060 <br />
                                            地址:
                                            臺北市中山區中山北路二段44巷2號
                                            <br />
                                            網址:https://cssc.cyc.org.tw
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
