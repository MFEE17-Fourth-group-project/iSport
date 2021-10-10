import { useState, useEffect } from 'react';
import HomePage8 from './../../images/homepage/homepage-8.jpg';
import VideoCard from './../video/components/VideoCard';
import VideoCard2 from './../video/components/VideoCard2';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
const VideoSection = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState(null);
    const [Aer, setAer] = useState(null);
    const [Wei, setWei] = useState(null);
    const [Cor, setCor] = useState(null);
    const [Lea, setLea] = useState(null);
    const [TAB, setTAB] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(`${API_URL}/articles/videoAer`);
                let data = res.data;
                setData(data);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getArticleData();
    }, []);
    console.log(data);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(`${API_URL}/articles/videoWei`);
                let Aer = res.data;
                setAer(Aer);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getArticleData();
    }, []);
    console.log(Aer);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(`${API_URL}/articles/videoTab`);
                let Wei = res.data;
                setWei(Wei);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getArticleData();
    }, []);
    console.log(Wei);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(`${API_URL}/articles/videoCor`);
                let Cor = res.data;
                setCor(Cor);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getArticleData();
    }, []);
    console.log(Cor);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(`${API_URL}/articles/videoLea`);
                let Lea = res.data;
                setLea(Lea);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getArticleData();
    }, []);
    console.log(Lea);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(`${API_URL}/articles/videoLea`);
                let TAB = res.data;
                setTAB(TAB);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getArticleData();
    }, []);
    console.log(TAB);
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-out-back',
            delay: 0,
        });
        AOS.refresh();
    }, []);
    let [gym, setGym] = useState(Aer);
    const Pectoralis = () => {
        setGym(Wei);
    };
    const BackMuscles = () => {
        setGym(Cor);
    };
    const AbdominalMuscles = () => {
        setGym(Lea);
    };
    const GlutealMuscles = () => {
        setGym(Wei);
    };
    const LegMuscles = () => {
        setGym(Aer);
    };
    return (
        <div className="w-full h-124 sm:h-168 sm:grid grid-cols-3 grid-rows-3 overflow-hidden">
            <div className="col-span-full xl:col-span-2 row-span-1">
                <div className="flex justify-center sm:block mt-7 md:mt-10 xl:ml-24 mx-10">
                    <h2
                        className="w-max text-white pb-2.5 sm:pb-0 mb-5 sm:mb-0 sm:text-left
                        text-2xl lg:text-3xl xl:text-4xl border-b-2 sm:border-b-0 border-yellow-400"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        精選影片
                    </h2>
                    <p
                        className="text-white text-lg md:text-xl lg:text-2xl border-l-4 border-yellow-400
                        pl-5 py-4 lg:pl-7 lg:py-6 ml-10 my-7 hidden sm:block"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="800"
                    >
                        各式各樣的健身相關影片，讓您無論在戶外或是家裡都可以隨時隨地觀看，不需擔心固定時間與定點的課程。
                    </p>
                </div>
            </div>
            <div
                className="ml-8 mt-7 relative hidden xl:block row-span-2 col-span-1 self-start"
                data-aos="fade-left"
                data-aos-duration="1500"
            >
                <img
                    className="h-152 w-full rounded-3xl object-cover shadow-lg"
                    src={HomePage8}
                />
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute top-72 right-20"
                    onClick={Pectoralis}
                >
                    胸肌
                </button>
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute top-80 left-10"
                    onClick={BackMuscles}
                >
                    背肌
                </button>
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute bottom-36 right-32"
                    onClick={AbdominalMuscles}
                >
                    腹肌
                </button>
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute bottom-32 left-4"
                    onClick={GlutealMuscles}
                >
                    臀肌
                </button>
                <button
                    className="text-gray-800 bg-yellow-400 border border-solid border-yellow-400 uppercase
                                    rounded-full outline-none ease-linear transition-all duration-150 block
                                    hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-500
                                    text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 sm:ml-auto sm:mx-0 mx-auto
                                    absolute bottom-10 left-72"
                    onClick={LegMuscles}
                >
                    腿肌
                </button>
            </div>

            <div
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3
                col-span-3 xl:col-span-2 row-span-2 content-start mx-2.5 sm:mx-3 outer-container"
            >
                <div className="flex innerbot-container container">
                    {gym &&
                        gym.map((video) => (
                            <VideoCard2 video={video} key={video.id} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
