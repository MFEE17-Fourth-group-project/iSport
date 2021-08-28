import React from 'react';
import ArticleHeader from '../../images/11.jpeg';
import ArticleNav from './components/ArticleNav';
import Article from './components/Article';

const ArticleCategory = () => {
    return (
        <>
            <div className="">
                <img
                    className="h-112 object-cover w-full"
                    src={ArticleHeader}
                />
                <div>
                    <h3 className="text-4xl text-white">
                        有氧運動Aerobic exercise
                    </h3>
                    <h4 className="text-2xl text-base leading-loose text-white">
                        心跳率在60～80%，運動起來會喘，但不至於喘到說不出話，可以維持一段時間的運動
                        常見的有跑步、騎自行車、騎飛輪、游泳、韻律健身操等等
                    </h4>
                </div>
                <ArticleNav />
                <main className="max-w-screen-2xl mx-auto p-6">
                    <div className="m-8">
                        <Article />
                    </div>
                    <div className="m-8">
                        <Article />
                    </div>
                    <div className="m-8">
                        <Article />
                    </div>
                </main>
            </div>
        </>
    );
};

export default ArticleCategory;
