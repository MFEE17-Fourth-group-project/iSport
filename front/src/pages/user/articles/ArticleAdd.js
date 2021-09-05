import React from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../../global/Aside';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function ArticleAdd() {
    return (
        <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
            <Aside />
            <article className="flex-grow flex-col">
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                    新增文章
                </div>
                <div className="text-white bg-gray-900 w-full h-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                    <from>
                        <label className="">作者：</label>
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
                        ></input>
                        <br />
                        <label>分類：</label>
                        <br />
                        <select
                            name="category"
                            id="category"
                            className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                        >
                            <option value="1">有氧運動</option>
                            <option value="2">重量訓練</option>
                            <option value="3">間歇訓練</option>
                            <option value="4">增肌飲食</option>
                            <option value="5">核心強化</option>
                        </select>
                        <br />
                        <label>標題：</label>
                        <span className="text-base text-red-500 mx-4">
                            必填
                        </span>
                        <br />
                        <input
                            type="text"
                            className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                            name="added_by"
                            id="added_by"
                            placeholder="最多100字"
                        />
                        <br />
                        <label for="">上傳圖片:</label>
                        <br />
                        <input
                            className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                            type="file"
                            name="file"
                            id="file"
                        />
                        <br />
                        <label>內容：</label>
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
                        />
                        {/* <textarea
                            name="content"
                            id="content"
                            className="w-full bg-gray-900 border-b-2  p-4 my-4 focus:border-yellow-400 outline-none"
                        ></textarea> */}
                        <div className="flex flex-row justify-end">
                            <Link to="">
                                <button
                                    className="btn-yellow flex flex-row justify-end items-center"
                                    type="submit"
                                    id="button"
                                >
                                    <p className="font-bold text-xl mx-2">
                                        新增
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </from>
                </div>
            </article>
        </main>
    );
}

export default ArticleAdd;
