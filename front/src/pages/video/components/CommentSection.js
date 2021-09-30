import { useState } from 'react';
import { FaComments } from "react-icons/fa";
import Comment from './Comment';
import Person2 from './../../../images/person-2.jpg';

const CommentSection = () => {
    const [showSubmit, setShowSubmit] = useState(false);

    return (
        <div className="lg:col-span-2 lg:row-span-1 col-span-full mb-5 xs:mx-0">
            <div className="flex items-center mb-7">
                <FaComments className="text-yellow-400 mr-2.5 text-lg hidden xs:block" />
                <span className="text-sm font-medium xs:font-normal xs:text-base text-white mr-4"> 48 則留言</span>
            </div>
            <div className="flex mb-7">
                <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={Person2}
                />
                <div className="flex flex-col w-full">
                    <input
                        className="pb-1.5 placeholder-white text-base text-white border-b border-gray-400 bg-gray-800
                                self-start w-full focus:outline-none focus:placeholder-gray-400 focus:border-white mb-2"
                        placeholder="新增留言"
                        onFocus={() => setShowSubmit(true)}
                        onBlur={() => setShowSubmit(false)}
                    />
                    {showSubmit && <div className="flex justify-end">
                        <button className="btn-gray-sm mr-3">取消</button>
                        <button className="btn-yellow-sm">留言</button>
                    </div>}
                </div>
            </div>

            <Comment />
        </div>
    );
};

export default CommentSection;
