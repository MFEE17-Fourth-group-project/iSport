import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../../global/Aside';
import ArticleMyartItem from './ArticleMyartItem';
import { useAuth } from '../../../context/auth';
import NotAuth from '../components/NotAuth';
import { API_URL } from '../../utils/config';
import axios from 'axios';

function ArticleMyart() {
    const { member, setMember } = useAuth();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(
                    `${API_URL}/articles/Read/MyArticle`,
                    { withCredentials: true }
                );
                let data = res.data;
                // console.log(data);
                setData(data);
            } catch (e) {
                console.log(e);
                setError(e.message);
            }
        };
        getArticleData();
    }, []);
    // console.log(data);
    //刪除
    const handleDelete = (id) => {
        setData(data.filter((Data) => data.id !== id));
        alert('刪除完成');
    };
    return (
        <>
            {member ? (
                <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                    <Aside />
                    <artical className="flex-grow flex-col">
                        <div className="bg-gray-700 pl-5 p-3 text-white text-opacity-85 text-3xl rounded-t-xl font-bold  flex justify-between">
                            我的文章
                            <Link to="/user/ArticleAdd">
                                <button
                                    // className="btn-yellow"
                                    type="submit"
                                    id="button"
                                >
                                    <p className="font-bold text-xl mx-2">
                                        新增
                                    </p>
                                </button>
                            </Link>
                        </div>
                        <div className="text-white bg-gray-900 w-full h-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                            <div className="mt-6">
                                {data &&
                                    data.map((article) => (
                                        <ArticleMyartItem
                                            article={article}
                                            key={article.id}
                                            handleDelete={handleDelete}
                                        />
                                    ))}
                            </div>
                        </div>
                    </artical>
                </main>
            ) : (
                <NotAuth />
            )}
        </>
    );
}
export default ArticleMyart;
