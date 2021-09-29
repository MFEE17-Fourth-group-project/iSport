import React, { useState, useEffect } from 'react';
import Aside from '../../../global/Aside';
import { useAuth } from '../../../context/auth';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from '../../../../node_modules/axios';
import { API_URL } from '../../../utils/config';
import NotAuth from '../components/NotAuth';
import { useParams } from 'react-router-dom';

function ArticleEdit({ onHide, show, post, status }) {
    const { member, setMember } = useAuth();
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const newPost = {
        article_name: '',
        title: '',
        content: '',
        category: '',
        photos: '',
    };
    const [fields, updatedFields] = useState(post ? post : newPost);
    // 處理每個欄位的變動
    const handleFieldChange = (e) => {
        // 更新輸入欄位的變動
        // 用新輸入的屬性值和原物件作合併
        updatedFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
        // setFields(updatedFields)
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
    };
    useEffect(() => {
        const getArticleData = async () => {
            try {
                let res = await axios.get(`${API_URL}/articles/Read/${id}`);
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
                        <div className="text-white bg-gray-900 w-full h-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                            <from onSubmit={handleSubmit}>
                                <label htmlFor="article_name">作者：</label>
                                <span className="text-base text-red-500 mx-4">
                                    必填
                                </span>
                                <br />
                                <input
                                    type="text"
                                    className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                                    name="article_name"
                                    id="article_name"
                                    placeholder="最多50字"
                                    required
                                    //只要判斷一下 ThisPost 有沒有值，有的話就把值放進去
                                    value={fields && fields.article_name}
                                    //添加 onChange 來改變值
                                    onChange={(e) => {
                                        handleFieldChange(e, 'article_name');
                                    }}
                                ></input>
                                <br />
                                <label htmlFor="category">分類：</label>
                                <br />
                                <select
                                    name="category"
                                    id="category"
                                    value={fields && fields.category}
                                    onChange={(e) => {
                                        handleFieldChange(e, 'category');
                                    }}
                                    className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                                >
                                    <option value="0">請選擇</option>
                                    <option value="1">有氧運動</option>
                                    <option value="2">重量訓練</option>
                                    <option value="3">間歇訓練</option>
                                    <option value="5">核心強化</option>
                                    <option value="4">增肌飲食</option>
                                </select>
                                <br />
                                <label htmlFor="title">標題：</label>
                                <span className="text-base text-red-500 mx-4">
                                    必填
                                </span>
                                <br />
                                <input
                                    type="text"
                                    className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                                    name="title"
                                    id="title"
                                    placeholder="最多100字"
                                    value={fields && fields.title}
                                    onChange={(e) => {
                                        handleFieldChange(e, 'title');
                                    }}
                                />
                                <br />
                                <label htmlFor="photos">上傳圖片:</label>
                                <br />
                                <input
                                    className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                                    type="file"
                                    name="photos"
                                    id="photos"
                                    value={fields && fields.photos}
                                    onChange={(e) => {
                                        handleFieldChange(e, 'photos');
                                    }}
                                />
                                <br />
                                <label htmlFor="content">內容：</label>
                                <span className="text-base text-red-500 mx-4">
                                    必填
                                </span>
                                <br />
                                <div id="toolbar-container"></div>
                                <div id="editor"></div>
                                {/* <textarea
                            name="content"
                            id="content"
                            style={{ display: 'none' }}
                            value={content}
                            onChange={(e) => {
                                setcontent(e.target.value);
                            }}
                        /> */}
                                {/* <Editor
                                    toolbarClassName="toolbar"
                                    wrapperClassName="wrapper border-2 border-white rounded bg-gray-800"
                                    editorClassName="editor px-5 h-40"
                                    onEditorStateChange={(editorState) => {
                                        console.log(
                                            editorState
                                                .getCurrentContent()
                                                .getPlainText()
                                        );

                                        setcontent(
                                            editorState
                                                .getCurrentContent()
                                                .getPlainText()
                                        );
                                    }}
                                /> */}
                                <div className="flex flex-row justify-end">
                                    <button
                                        className="btn-yellow flex flex-row justify-end items-center my-5"
                                        type="submit"
                                        id="button"
                                        onClick={() =>
                                            console.log('送出', fields)
                                        }
                                    >
                                        <p className="font-bold text-xl mx-2">
                                            修改
                                        </p>
                                    </button>
                                </div>
                            </from>
                        </div>
                    </article>
                </main>
            ) : (
                <NotAuth />
            )}
        </>
    );
}

export default ArticleEdit;