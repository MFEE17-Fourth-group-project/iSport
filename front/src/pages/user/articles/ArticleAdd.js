import React, { useState, useEffect } from 'react';
import Aside from '../../../global/Aside';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from '../../../../node_modules/axios';

function ArticleAdd() {
    const [article_name, setarticle_name] = useState();
    const [added_by, setadded_by] = useState();
    const [content, setcontent] = useState();
    const [category, setcategory] = useState();
    const [upload_date, setupload_date] = useState();
    const [photos, setfile] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const formData = new FormData(e.target)
            // console.log(formData.get('email'))
            let formData = new FormData();
            formData.append('article_name', article_name);
            formData.append('added_by', added_by);
            formData.append('upload_date', upload_date);
            formData.append('category', category);
            formData.append('photos', photos);
            let response = await axios.post(
                'http://localhost:3030/ArticleAdd',
                formData
            );
            console.log(response);
        } catch (e) {
            console.error(e.response);
        }
    };
    return (
        <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
            <Aside />
            <article className="flex-grow flex-col">
                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                    新增文章
                </div>
                <div className="text-white bg-gray-900 w-full h-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                    <from
                    // onSubmit={handleSubmit}
                    // onChange={handleFormChange}
                    // onInvalid={handleFormInvalid}
                    >
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
                            // state={fields.article_name}
                            // setState={handleFieldChange}
                            // error={fieldErrors.article_name}
                            required
                            value={article_name}
                            onChange={(e) => {
                                setarticle_name(e.target.value);
                            }}
                        ></input>
                        <br />
                        <label>分類：</label>
                        <br />
                        <select
                            name="category"
                            id="category"
                            value={category}
                            onChange={(e) => {
                                setcategory(e.target.value);
                            }}
                            className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                        >
                            <option value="1">有氧運動</option>
                            <option value="2">重量訓練</option>
                            <option value="3">間歇訓練</option>
                            <option value="4">核心強化</option>
                            <option value="5">增肌飲食</option>
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
                            value={added_by}
                            onChange={(e) => {
                                setadded_by(e.target.value);
                            }}
                        />
                        <br />
                        <label htmlFor="photo">上傳圖片:</label>
                        <br />
                        <input
                            className="w-full bg-gray-900 border-b-2 my-4 focus:border-yellow-400 outline-none"
                            type="file"
                            name="file"
                            id="file"
                            onChange={(e) => {
                                setfile(e.target.files[0]);
                            }}
                        />
                        <br />
                        <label>內容：</label>
                        <span className="text-base text-red-500 mx-4">
                            必填
                        </span>
                        <br />
                        <div id="toolbar-container"></div>
                        <div id="editor"></div>
                        <textarea
                            name="content"
                            id="content"
                            style={{ display: 'none' }}
                            value={content}
                            onChange={(e) => {
                                setcontent(e.target.value);
                            }}
                        />
                        <textarea
                        // value={content}
                        // onChange={(e) => {
                        // setcontent(e.target.value)
                        // }}
                        />
                        <Editor
                            toolbarClassName="toolbar"
                            wrapperClassName="wrapper border-2 border-white rounded bg-gray-800"
                            editorClassName="editor px-5 h-40"
                        />
                        <div className="flex flex-row justify-end">
                            <button
                                className="btn-yellow flex flex-row justify-end items-center"
                                type="submit"
                                id="button"
                                onSubmit={handleSubmit}
                            >
                                <p className="font-bold text-xl mx-2">新增</p>
                            </button>
                        </div>
                    </from>
                </div>
            </article>
        </main>
    );
}

export default ArticleAdd;
