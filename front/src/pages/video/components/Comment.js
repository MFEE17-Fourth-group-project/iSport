import { useState } from 'react';
import { BiDotsHorizontal } from 'react-icons/bi';
import useToggle from '../../../utils/useToggle';
import Person2 from './../../../images/person-2.jpg';

const Comment = ({ comments, onDelete }) => {
    const [openEdit, setOpenEdit] = useToggle(false);
    const [openThis, setOpenThis] = useState(null);

    // let time = new Date();
    // console.log(time);

    const handleEdit = (e) => {
        if (parseInt(e.target.dataset.number) === openThis) {
            setOpenEdit();
        } else {
            setOpenThis(parseInt(e.target.dataset.number));
            setOpenEdit(true);
        }
    };

    return (
        <>
            { (comments !== null) && comments.map((comment, idx) => {

                return (<div className="flex mb-6">
                    <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={Person2}
                    />
                    <div className="flex flex-col w-full mr-6 h-20">
                        <div className="flex">
                            <div className="flex">
                                <h4 className="text-white font-bold text-sm mb-3 mr-2">{comment.username}</h4>
                                <span className="text-gray-400 text-sm">{comment.date}</span>
                            </div>

                            <div className="flex ml-auto relative">
                                {openEdit && (openThis === idx) &&
                                    <div className="bg-gray-700 w-28 h-16 rounded-md shadow-lg absolute right-2 top-4 py-1">
                                        <ul className="flex flex-col justify-evenly items-center h-full">
                                            <li
                                                className="text-white flex w-full h-full items-center justify-center hover:bg-gray-900 cursor-pointer"
                                            ><p>修改留言</p></li>
                                            <li
                                                className="text-white flex w-full h-full items-center justify-center hover:bg-gray-900 cursor-pointer"
                                                onClick={() => onDelete()}
                                            ><p>刪除留言</p></li>
                                        </ul>
                                    </div>}
                                <div className="flex h-4 relative">
                                    <div
                                        className="flex w-full h-full cursor-pointer absolute"
                                        data-number={idx}
                                        onClick={e => handleEdit(e)}
                                    >
                                    </div>
                                    <BiDotsHorizontal
                                        className="text-white text-lg"
                                    />
                                </div>

                            </div>
                        </div>
                        <p className="text-white text-sm">
                            {comment.content}
                        </p>
                    </div>
                </div>);
            })}
        </>
    );
};

export default Comment;
