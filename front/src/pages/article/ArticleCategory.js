import React, { useState, useEffect } from 'react';
import ArticleHeader from '../../images/tabata/1.jpeg';
import ArticleNav from './components/ArticleNav';
import Article from './components/Article';
import { Link } from 'react-router-dom';
// 模擬從伺服器來的資料
// import { data } from '../data/';

function ArticleCategory(props) {
    // const [article, setArticles] = useState([]);
    // // didMount
    // useEffect(() => {
    //     setArticles(data);
    // }, []);
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
                        <h3 className="text-2xl md:text-5xl text-white">
                            有氧運動Aerobic exercise
                        </h3>
                        <h4 className="text-1xl md:text-2xl leading-loose text-white">
                            心跳率在60～80%，運動起來會喘，但不至於喘到說不出話，可以維持一段時間的運動
                            常見的有跑步、騎自行車、騎飛輪、游泳、韻律健身操等等
                        </h4>
                    </div>
                </div>
                <div className="sticky top-0 z-40">
                    <ArticleNav />
                </div>
                <main className="max-w-screen-2xl mx-auto p-6">
                    {/* <ul>
                        {articles.map((v, i) => {
                            return (
                                <li>
                                    <Link to={'/article-detail/' + v.id}>
                                        {v.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul> */}
                    <div className="m-8">
                        <Link to="/ArticleId">
                            <Article />
                        </Link>
                    </div>
                    <div className="m-8">
                        <Link to="/ArticleId">
                            <Article />
                        </Link>
                    </div>
                    <div className="m-8">
                        <Link to="/ArticleId">
                            <Article />
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}

export default ArticleCategory;
