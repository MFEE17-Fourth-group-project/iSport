import videoHeader from './../../images/有氧/cardio-1.jpg';
import VideoNav from './components/VideoNav';
import VideoList from './components/VideoList';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Video = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getVideoData() {
            let res = await axios.get(`${API_URL}/videos`);
            res = res.data;
            setData(res);
        }
        getVideoData();
    }, []);

    return (
        <div className="">
            <div className="h-44 xs:h-64 sm:h-72 md:h-96 lg:h-112 ">
                <img className="object-cover h-full min-w-full" src={videoHeader} alt="" />
            </div>
            <VideoNav />
            <main className="max-w-screen-xl flex flex-col mx-auto px-2.5 sm:px-5">
                {data && <VideoList videos={data} />}
            </main>
        </div>
    );
};

export default Video;
