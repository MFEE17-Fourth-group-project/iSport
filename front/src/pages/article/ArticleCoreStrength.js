import React, { useState, useEffect } from 'react';
import ArticleHeader from '../../images/核心/1.jpeg';
import ArticleNav from './components/ArticleNav';
import Article from './components/Article';
import { Link, withRouter } from 'react-router-dom';
import { API_URL } from '../../utils/config';
import axios from 'axios';
function ArticleCoreStrength(props) {
    const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(
                    `${API_URL}/articles/Read/CoreStrength`
                );
                let data = res.data;
                setData(data);
                // setIsPending(false);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
                // setIsPending(false);
            }
        };
        getArticleData();
    }, []);
    console.log(data);
    return (
        <>
            <div>
                <div className="relative">
                    <img
                        className="object-cover w-full h-44 xs:h-64 sm:h-72 md:h-96 lg:h-112 z-0  filter brightness-50"
                        src={ArticleHeader}
                        alt=""
                    />
                    <div className="absolute bottom-0 md:bottom-20 z-20 md:mx-10">
                        <h3 className="text-2xl md:text-5xl text-white py-4">
                            核心強化Core strength
                        </h3>
                        <h4 className="text-1xl md:text-2xl leading-loose text-white  md:pr-40">
                            所有運動以及日常生活上的動作都需要靠核心訓練來為我們打基礎。像是：站立、坐直、彎腰取重物等，強化核心的方式有棒式、直腿捲曲、單腳橋式等等
                        </h4>
                    </div>
                </div>
                <div className="sticky top-0 z-40">
                    <ArticleNav />
                </div>
                <main className="max-w-screen-2xl mx-auto p-6">
                    <div className="w-4/5 m-auto">
                        {data &&
                            data.map((article) => (
                                <Article article={article} key={article.id} />
                            ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default withRouter(ArticleCoreStrength);
