import React, { useState, useEffect } from 'react';
import ArticleHeader from '../../images/飲食/pexels-photo-1307658.jpeg';
import ArticleNav from './components/ArticleNav';
import Article from './components/Article';
import { Link, withRouter } from 'react-router-dom';
import { API_URL } from '../../utils/config';
import axios from 'axios';
function ArticleLeanBulking(props) {
    const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(
                    `${API_URL}/articles/Read/LeanBulking`
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
                            增肌飲食Lean Bulking
                        </h3>
                        <h4 className="text-1xl md:text-2xl leading-loose text-white  md:pr-40">
                            開始訓練後你會發現，最難的不是運動而是吃對食物，鍛鍊前後攝取什麼能提高運動表現、平常該補充哪些營養有助於肌肉合成，這些都是讓增肌減脂更有效的重點。
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

export default withRouter(ArticleLeanBulking);
