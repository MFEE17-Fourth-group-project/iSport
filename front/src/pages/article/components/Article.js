import React, { useState } from 'react';
// import Person2 from '../../../../../back/public/articles/uploads/';
import { FaClock } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import moment from 'moment';
import { Link } from 'react-router-dom';
const ArticleInSide = (props) => {
    const { article } = props;
    return (
        <>
            <div className="border-4 border-light-blue-500 border-opacity-100 p-5 my-5">
                <img
                    className="m-auto"
                    src={`http://localhost:3030/articles/uploads/${article.photos}`}
                    alt=""
                />
                <h3 class="text-xl lg:text-2xl xl:text-4xl m-2 text-yellow-400">
                    {article.title}
                </h3>
                <div className="m-2 md:flex md:justify-between">
                    <div className="flex items-center">
                        <BsFillPersonFill className="text-yellow-400 mr-1 cursor-pointer" />
                        <h4 className="text-sm text-white mr-4">
                            {article.article_name}
                        </h4>
                        <FaClock className="text-yellow-400 mr-1" />
                        <h4 className="text-xs text-white mr-4">
                            {moment(article.upload_date).format(
                                'YYYY-MM-DD HH:mm'
                            )}
                        </h4>
                        <FaEye className="text-yellow-400 mr-1" />
                        <h4 className="text-sm text-white mr-4">
                            {article.views}
                        </h4>
                    </div>
                    <div className="flex items-center">
                        <FaThumbsUp className="text-yellow-400 mr-1 cursor-pointer" />
                        <span className="text-xs text-white mr-4">
                            {article.views}
                        </span>
                        <FaShare className="text-yellow-400 mr-1 cursor-pointer" />
                        <span className="text-xs text-white mr-4">分享</span>
                        <FaRegHeart className="text-red-400 mr-1 cursor-pointer" />
                        <span className="text-xs text-white mr-4">收藏</span>
                    </div>
                </div>
                <div className="m-2">
                    <p
                        className="text-base leading-loose tracking-wide text-white"
                        dangerouslySetInnerHTML={{
                            __html: article.content,
                        }}
                    ></p>
                </div>
            </div>
        </>
    );
};

export default ArticleInSide;
