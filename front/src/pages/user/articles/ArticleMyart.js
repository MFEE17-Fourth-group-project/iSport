import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../../global/Aside';
import SuggestArtCol from '../../video/components/SuggestArtCol';
import { useAuth } from '../../../context/auth';
import NotAuth from '../components/NotAuth';
import { API_URL } from '../../utils/config';
import axios from 'axios';

function ArticleMyart() {
    const { member, setMember } = useAuth();
    const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(
                    `${API_URL}/articles/Read/AerobicExercise`
                );
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
            {member ? (
                <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                    <Aside />
                    <artical className="flex-grow flex-col">
                        <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                            我的文章
                        </div>
                        <div className="text-white bg-gray-900 w-full h-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                            <div className="mt-6">
                                {data &&
                                    data.map((article) => (
                                        <SuggestArtCol
                                            article={article}
                                            key={article.id}
                                        />
                                    ))}
                            </div>
                            <div className="flex flex-row justify-end">
                                <button
                                    className="btn-yellow flex flex-row justify-end items-center my-5"
                                    type="submit"
                                    id="button"
                                    // onClick={handleSubmit}
                                >
                                    <p className="font-bold text-xl mx-2">
                                        修改
                                    </p>
                                </button>
                                <button
                                    className="btn-yellow flex flex-row justify-end items-center my-5"
                                    type="submit"
                                    id="button"
                                    // onClick={handleSubmit}
                                >
                                    <p className="font-bold text-xl mx-2">
                                        刪除
                                    </p>
                                </button>
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
