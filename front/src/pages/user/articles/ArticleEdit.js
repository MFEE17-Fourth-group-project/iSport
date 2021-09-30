import React, { useState, useEffect } from 'react';
import Aside from '../../../global/Aside';
import { useAuth } from '../../../context/auth';
import ArticleEditItem from './ArticleEditItem';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from '../../../../node_modules/axios';
import { API_URL } from '../../../utils/config';
import NotAuth from '../components/NotAuth';
import { useParams } from 'react-router-dom';

function ArticleEdit(props) {
    const { member, setMember } = useAuth();
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.put(`${API_URL}/articles/Update/${id}`);
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
            {member ? (
                <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                    <Aside />
                    <article className="flex-grow flex-col">
                        <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                            修改文章
                        </div>
                        {data &&
                            data.map((article) => (
                                <ArticleEditItem
                                    article={article}
                                    key={article.id}
                                />
                            ))}
                    </article>
                </main>
            ) : (
                <NotAuth />
            )}
        </>
    );
}

export default ArticleEdit;
