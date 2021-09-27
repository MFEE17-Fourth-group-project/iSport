import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/auth';
import { API_URL } from '../../utils/config';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaClock } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import moment from 'moment';
function ArticleMyart({ article }) {
    const { member, setMember } = useAuth();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(`${API_URL}/articles/Read/MyArticle`);
                let data = res.data;
                console.log(data);
                setData(data);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getArticleData();
    }, []);
    console.log(data);
    return (
        <>
            <div className="mt-6">
                <div className="flex mt-6 h-26  justify-between">
                    <div>
                        <h4 className="text-white text-lg">{article.title}</h4>
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
                    </div>
                    <div>
                        <Link to={'/article/' + article.id}>
                            <button
                                className="btn-yellow my-4 mx-2"
                                type="submit"
                                id="button"
                                // onClick={handleSubmit}
                            >
                                <p className="font-bold text-xl mx-2">顯示</p>
                            </button>
                        </Link>
                        <Link to={'/user/ArticlePatch/' + article.id}>
                            <button
                                className="btn-yellow my-4 mx-2"
                                type="submit"
                                id="button"
                                // onClick={handleSubmit}
                            >
                                <p className="font-bold text-xl mx-2">修改</p>
                            </button>
                        </Link>
                        <Link to={'/article/Delete/' + article.id}>
                            <button
                                className="btn-yellow my-4 mx-2"
                                type="submit"
                                id="button"
                                // onClick={handleSubmit}
                            >
                                <p className="font-bold text-xl mx-2">刪除</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ArticleMyart;
