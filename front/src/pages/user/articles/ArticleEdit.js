import React, { useState, useEffect } from 'react';
import Aside from '../../../global/Aside';
import { useAuth } from '../../../context/auth';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from '../../../../node_modules/axios';
import { API_URL } from '../../../utils/config';
import NotAuth from '../components/NotAuth';
import { useParams } from 'react-router-dom';

function ArticleEdit(props) {
    const { member, setMember } = useAuth();
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
                                    placeholder={props.article_name}
                                    required
                                ></input>
                                <br />
                                <label htmlFor="category">分類：</label>
                                <br />
                                <select
                                    name="category"
                                    id="category"
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
                                />
                                <br />
                                <label htmlFor="photos">上傳圖片:</label>
                                <br />
                                <input
                                    className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                                    type="file"
                                    name="photos"
                                    id="photos"
                                />
                                <br />
                                <label htmlFor="content">內容：</label>
                                <span className="text-base text-red-500 mx-4">
                                    必填
                                </span>
                                <br />
                                <div id="toolbar-container"></div>
                                <div id="editor"></div>
                                <Editor
                                    toolbarClassName="toolbar"
                                    wrapperClassName="wrapper border-2 border-white rounded bg-gray-800"
                                    editorClassName="editor px-5 h-40"
                                    onEditorStateChange={(editorState) => {
                                        console.log(
                                            editorState
                                                .getCurrentContent()
                                                .getPlainText()
                                        );

                                        // setcontent(
                                        //     editorState
                                        //         .getCurrentContent()
                                        //         .getPlainText()
                                        // );
                                    }}
                                />
                                <div className="flex flex-row justify-end">
                                    <button
                                        className="btn-yellow flex flex-row justify-end items-center my-5"
                                        type="submit"
                                        id="button"
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
