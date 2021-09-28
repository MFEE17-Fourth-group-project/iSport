import react, { useState, useEffect } from 'react';
import HomePage8 from './../../images/homepage/homepage-8.jpg';
import VideoCard from './../video/components/VideoCard';
import VideoCard2 from './../video/components/VideoCard2';
import { Link } from 'react-router-dom';
import { API_URL } from '../../utils/config';
import axios from 'axios';
const VideoSection = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState(null);
    const [Pec, setPec] = useState(null);
    const [Bac, setBac] = useState(null);
    const [Abd, seLegd] = useState(null);
    const [Glu, setGlu] = useState(null);
    const [Leg, setLeg] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getVideoData = async () => {
            try {
                let res = await axios.get(`${API_URL}/videos/category`);
                let data = res.data;
                setData(data);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getVideoData();
    }, []);
    console.log(data);
    useEffect(() => {
        const getVideoData = async () => {
            try {
                let res = await axios.get(`${API_URL}/videos/category`);
                let Pec = res.data;
                setPec(Pec);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getVideoData();
    }, []);
    console.log(Pec);
    useEffect(() => {
        const getVideoData = async () => {
            try {
                let res = await axios.get(`${API_URL}/videos/category`);
                let Bac = res.data;
                setBac(Bac);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getVideoData();
    }, []);
    console.log(Bac);
    useEffect(() => {
        const getVideoData = async () => {
            try {
                let res = await axios.get(`${API_URL}/videos/category`);
                let Abd = res.data;
                seLegd(Abd);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getVideoData();
    }, []);
    console.log(Abd);
    useEffect(() => {
        const getVideoData = async () => {
            try {
                let res = await axios.get(`${API_URL}/videos/category`);
                let Glu = res.data;
                setGlu(Glu);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getVideoData();
    }, []);
    console.log(Glu);
    useEffect(() => {
        const getVideoData = async () => {
            try {
                let res = await axios.get(`${API_URL}/videos/category`);
                let Leg = res.data;
                setLeg(Leg);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getVideoData();
    }, []);
    console.log(Leg);

    let [gym, setGym] = useState(<VideoCard2 />);
    const Pectoralis = () => {
        {
            Pec &&
                Pec.map((Video) => <VideoCard2 Video={Video} key={Video.id} />);
        }
    };
    const BackMuscles = () => {
        {
            Bac &&
                Bac.map((Video) => <VideoCard2 Video={Video} key={Video.id} />);
        }
    };
    const AbdominalMuscles = () => {
        {
            Abd &&
                Abd.map((Video) => <VideoCard2 Video={Video} key={Video.id} />);
        }
    };
    const GlutealMuscles = () => {
        {
            Glu &&
                Glu.map((Video) => <VideoCard2 Video={Video} key={Video.id} />);
        }
    };
    const LegMuscles = () => {
        {
            Leg &&
                Leg.map((Video) => <VideoCard2 Video={Video} key={Video.id} />);
        }
    };
    return (
        <div className="w-full h-124 sm:h-168 sm:grid grid-cols-3 grid-rows-3 overflow-hidden">
            <div className="col-span-full xl:col-span-2 row-span-1">
                <div className="flex justify-center sm:block mt-7 md:mt-10 xl:ml-24 mx-10">
                    <h2
                        className="w-max text-white pb-2.5 sm:pb-0 mb-5 sm:mb-0 sm:text-left
                        text-2xl lg:text-3xl xl:text-4xl border-b-2 sm:border-b-0 border-yellow-400"
                    >
                        精選影片
                    </h2>
                    <p
                        className="text-white text-lg md:text-xl lg:text-2xl border-l-4 border-yellow-400
                        pl-5 py-4 lg:pl-7 lg:py-6 ml-10 my-7 hidden sm:block"
                    >
                        各式各樣的健身相關影片，讓您無論在戶外或是家裡都可以隨時隨地觀看，不需擔心固定時間與定點的課程。
                    </p>
                </div>
            </div>
            <div className="ml-8 mt-7 relative hidden xl:block row-span-2 col-span-1 self-start">
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
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-x-2.5 sm:gap-x-3 gap-y-28
                col-span-3 xl:col-span-2 row-span-2 content-start mx-2.5 sm:mx-3"
            >
                <div>{gym}</div>
            </div>
        </div>
    );
};

export default VideoSection;
