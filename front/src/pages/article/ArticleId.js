import React from 'react';
import ArticleHeader from '../../images/tabata/1.jpeg';
import ArticleNav from './components/ArticleNav';
import SuggestVideoCol from '../video/components/SuggestVideoCol';
import SuggestArtCol from '../video/components/SuggestArtCol';
import Comment from '../video/components/Comment';
import Person2 from './../../images/tabata/1.jpeg';
import { FaComments } from 'react-icons/fa';
import Article from './components/Article';
const ArticleId = () => {
    return (
        <>
            <div className="">
                <img
                    className="h-112 object-cover w-full"
                    src={ArticleHeader}
                    alt=""
                />
                <ArticleNav />
                <main className="w-full md:w-8/12 mx-auto p-6 flex">
                    <div className="mx-8">
                        <div className="mb-8 md:w-full">
                            <Article />
                        </div>
                        <div>
                            <div className="flex items-center mb-7">
                                <FaComments className="text-yellow-400 mr-1 text-lg" />
                                <span className="text-base text-white mr-4">
                                    48 則留言
                                </span>
                                <button className="btn-yellow mr-3">
                                    最新留言
                                </button>
                                <button className="btn-gray">熱門留言</button>
                            </div>
                            <div className="flex mb-7">
                                <img
                                    className="w-12 h-12 rounded-full mr-4"
                                    src={Person2}
                                    alt=""
                                />
                                <div className="flex flex-col w-full">
                                    <input
                                        className="pb-1 placeholder-white text-base text-white border-b border-gray-400 bg-gray-800
                        self-start w-full focus:outline-none focus:placeholder-gray-400 focus:border-white mb-2"
                                        placeholder="新增留言"
                                    />
                                    <div className="flex justify-end">
                                        <button className="btn-gray mr-3">
                                            取消
                                        </button>
                                        <button className="btn-yellow">
                                            留言
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </div>

                    <div className="mr-8 w-4/12 xl:flex xl:flex-col hidden">
                        <div className="mt-6">
                            <h3 className="text-xl text-white pb-2 border-b-2 border-yellow-400 lg:border-b-0 lg:pb-0">
                                推薦文章
                            </h3>
                            <SuggestArtCol />
                            <SuggestArtCol />
                            <SuggestArtCol />
                            <SuggestArtCol />
                            <SuggestArtCol />
                        </div>
                        <div>
                            <h3 className="text-xl text-white pb-2 border-b-2 border-yellow-400 mt-8">
                                推薦影片
                            </h3>
                            <SuggestVideoCol />
                            <SuggestVideoCol />
                            <SuggestVideoCol />
                            <SuggestVideoCol />
                            <SuggestVideoCol />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default ArticleId;
