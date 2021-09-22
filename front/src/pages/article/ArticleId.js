import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import ArticleHeader from '../../images/tabata/1.jpeg';
import ArticleNav from './components/ArticleNav';
import SuggestVideoCol from '../video/components/SuggestVideoCol';
import SuggestArtCol from '../video/components/SuggestArtCol';
import Comment from '../video/components/Comment';
import Person2 from './../../images/tabata/1.jpeg';
import {
    FaComments,
    FaClock,
    FaThumbsUp,
    FaShare,
    FaRegHeart,
    FaEye,
} from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { API_URL } from '../../utils/config';
import axios from 'axios';
// 模擬從伺服器來的資料
// import { data } from '../data/';

function ArticleId(props) {
    const { Id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(`${API_URL}/articles/Read/${Id}`);
                let data = res.data;
                setData(data);
                setError(null);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getArticleData();
    });

    return (
        <>
            <div className="">
                <img
                    className="object-cover w-full h-44 xs:h-64 sm:h-72 md:h-96 lg:h-112"
                    src={ArticleHeader}
                    alt=""
                />
                <div className="sticky top-0 z-40">
                    <ArticleNav />
                </div>
                <main className="w-full md:w-8/12 mx-auto p-6 flex">
                    <div className="mx-8">
                        <div className="mb-8 md:w-full">
                            <div className="border-4 border-light-blue-500 border-opacity-100 p-5">
                                <img className="mr-4" src={Person2} alt="" />
                                <h3 class="text-xl lg:text-2xl xl:text-4xl m-2 text-yellow-400">
                                    防疫必備！自組轟菌懶人包，五種居家訓練器材推薦組合
                                    {/* {article.added_by} */}
                                </h3>
                                <div className="m-2 md:flex md:justify-between">
                                    <div className="flex items-center">
                                        <BsFillPersonFill className="text-yellow-400 mr-1 cursor-pointer" />
                                        <h4 className="text-sm text-white mr-4">
                                            泰勒
                                            {/* {article.article_name} */}
                                        </h4>
                                        <FaClock className="text-yellow-400 mr-1" />
                                        <h4 className="text-xs text-white mr-4">
                                            2021/06/22
                                            {/* {article.upload_date} */}
                                        </h4>
                                        <FaEye className="text-yellow-400 mr-1" />
                                        <h4 className="text-sm text-white mr-4">
                                            16,157
                                            {/* {article.views} */}
                                        </h4>
                                    </div>
                                    <div className="flex items-center">
                                        <FaThumbsUp className="text-yellow-400 mr-1 cursor-pointer" />
                                        <span className="text-xs text-white mr-4">
                                            2844
                                            {/* {article.views} */}
                                        </span>
                                        <FaShare className="text-yellow-400 mr-1 cursor-pointer" />
                                        <span className="text-xs text-white mr-4">
                                            分享
                                        </span>
                                        <FaRegHeart className="text-red-400 mr-1 cursor-pointer" />
                                        <span className="text-xs text-white mr-4">
                                            收藏
                                        </span>
                                    </div>
                                </div>
                                <div className="m-2">
                                    {/* {article.content} */}
                                    <p className="text-base leading-loose tracking-wide text-white">
                                        前陣子在 IG 限時動態
                                        跟粉絲們分享了近期籌備的新健身工作室一共添購了哪些健身器材，由於正值防疫期間，陸續有粉絲來請我推薦他們一些居家訓練器材（HomeGym
                                        /轟菌）的採購選擇，於是我索性把所有資訊整理成一篇文，以下會針對不同的族群，根據訓練資歷、經濟能力、訓練習慣等因素，去推薦5
                                        種不同的居家訓練器材組合
                                    </p>
                                </div>
                            </div>
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
}

export default withRouter(ArticleId);
