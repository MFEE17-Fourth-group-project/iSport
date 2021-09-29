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
    const newPost = {
        article_name: '',
        title: '',
        content: '',
        category: '',
        photos: '',
    };
    const [thisPost, setThisPost] = useState(post ? post : newPost);
    const changePost = (e) => {
        setThisPost({
            ...thisPost,
            [e.target.name]: e.target.value,
        });
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const formData = new FormData();
    //         formData.append('article_name', article_name);
    //         formData.append('title', title);
    //         // formData.append('upload_date', upload_date);
    //         formData.append('category', category);
    //         formData.append('content', content);
    //         formData.append('photos', photos);
    //         let response = await axios.post(
    //             `${API_URL}/articles/Update/${id}`,
    //             formData
    //         );
    //         alert('修改文章成功');
    //         console.log(response);
    //     } catch (e) {
    //         console.error(e.response);
    //     }
    // };
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
                            <from>
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
                                    value={thisPost && thisPost.article_name}
                                    onChange={(e) => {
                                        changePost(e, 'article_name');
                                    }}
                                ></input>
                                <br />
                                <label htmlFor="category">分類：</label>
                                <br />
                                <select
                                    name="category"
                                    id="category"
                                    value={thisPost && thisPost.category}
                                    onChange={(e) => {
                                        changePost(e, 'category');
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
                                    value={thisPost && thisPost.title}
                                    onChange={(e) => {
                                        changePost(e, 'title');
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
                                    value={thisPost && thisPost.photos}
                                    onChange={(e) => {
                                        changePost(e, 'photos');
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
                                            console.log('送出', thisPost)
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
