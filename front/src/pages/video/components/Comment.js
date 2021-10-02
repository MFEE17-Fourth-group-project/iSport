import { useState } from 'react';
import { BiDotsHorizontal } from 'react-icons/bi';
import axios from 'axios';
import { API_URL } from './../../utils/config';
import useToggle from '../../../utils/useToggle';
import Person2 from './../../../images/person-2.jpg';

const Comment = ({ comments, videoId, onDelete, onEdit, currentEdit }) => {
    const [openEdit, setOpenEdit] = useToggle(false);
    const [editInput, setEditInput] = useState(null);
    const [editValue, setEditValue] = useState('');

    // let time = new Date();
    // console.log(time);

    const handleEdit = (e) => {
        if (parseInt(e.target.dataset.index) === currentEdit) {
            setOpenEdit();
        } else {
            onEdit(parseInt(e.target.dataset.index));
            setOpenEdit(true);
        }
    };

    const handleEditComment = () => {
        setOpenEdit(false);
        setEditInput(currentEdit);
        setEditValue(comments[currentEdit].content);

    };

    const submitEditComment = () => {
        let commentId = comments[currentEdit].id;
        // (async function () {
        //     let res = await axios.put(`${API_URL}/videos/${videoId}/comments/${commentId}`, {
        //         // newComment: editValue.replace(/<[^>]+>/g, '')
        //     }
        //         , { withCredentials: true });
        //     onEdit(res.data);
        // })();
    };

    const handleCancelEdit = () => {
        setEditInput(null);
        setEditValue('');
    };

    const handleDelete = () => {
        setOpenEdit(false);
        onDelete(currentEdit);
    };

    return (
        <>
            { (comments !== null) && comments.map((comment, idx) => {
                return (<div className="flex mb-6">
                    <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={Person2}
                    />
                    <div className="flex flex-col w-full mr-6 max-h-28">
                        <div className="flex">
                            <div className="flex">
                                <h4 className="text-white font-bold text-sm mb-3 mr-2">{comment.username}</h4>
                                <span className="text-gray-400 text-sm">{comment.date}</span>
                            </div>

                            <div className="flex ml-auto relative">
                                {openEdit && (currentEdit === idx) &&
                                    <div className="bg-gray-700 w-28 h-16 rounded-md shadow-lg absolute right-2 top-4 py-1">
                                        <ul className="flex flex-col justify-evenly items-center h-full">
                                            <li className="text-white flex w-full h-full items-center justify-center hover:bg-gray-900 cursor-pointer relative">
                                                <div
                                                    className="absolute w-full h-full"
                                                    onClick={() => handleEditComment()}
                                                >
                                                </div>
                                                <p>修改留言</p>
                                            </li>
                                            <li
                                                className="text-white flex w-full h-full items-center justify-center hover:bg-gray-900 cursor-pointer"
                                                onClick={() => handleDelete()}
                                            ><p>刪除留言</p></li>
                                        </ul>
                                    </div>}
                                <div className="flex h-4 relative">
                                    <div
                                        className="flex w-full h-full cursor-pointer absolute"
                                        data-index={idx}
                                        onClick={e => handleEdit(e)}
                                    >
                                    </div>
                                    <BiDotsHorizontal className="text-white text-lg" />
                                </div>

                            </div>
                        </div>
                        {(editInput === idx) ?
                            <>
                                <textarea
                                    className="commentInput pb-1.5 placeholder-white text-base text-white border-b border-gray-400 bg-gray-800
                                        w-full focus:outline-none focus:placeholder-gray-400 focus:border-white mb-2 h-12"
                                    placeholder="新增留言"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                ></textarea>
                                <div className="flex justify-end">
                                    <button
                                        className="btn-gray-sm mr-2"
                                        type="button"
                                        onClick={() => handleCancelEdit()}
                                    >取消</button>
                                    <button
                                        className="btn-yellow-sm"
                                        type="submit"
                                    >修改</button>
                                </div>
                            </>
                            : <p className="text-white text-sm">
                                {comment.content}
                            </p>}
                    </div>
                </div>);
            })}
        </>
    );
};

export default Comment;
