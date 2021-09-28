import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/auth';
import { API_URL } from '../../utils/config';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaClock } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiWrench, BiTrash, BiSearchAlt } from 'react-icons/bi';
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
                    <div className="flex items-center">
                        <Link to={'/article/' + article.id}>
                            <BiSearchAlt className="text-yellow-300 hover:text-yellow-400 cursor-pointer text-2xl mx-2" />
                        </Link>
                        <Link to={'/user/ArticlePatch/' + article.id}>
                            <BiWrench className="text-yellow-300 hover:text-yellow-400 cursor-pointer text-2xl mx-2" />
                        </Link>
                        <Link to={'/article/Delete/' + article.id}>
                            <BiTrash className="text-yellow-300 hover:text-yellow-400 cursor-pointer text-2xl mx-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ArticleMyart;
