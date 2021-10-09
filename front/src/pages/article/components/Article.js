// import React, { useState } from 'react';
// // import Person2 from '../../../../../back/public/articles/uploads/';
// import { FaClock } from 'react-icons/fa';
// import { BsFillPersonFill } from 'react-icons/bs';
// import { FaEye } from 'react-icons/fa';
// import {
//     RiShareForwardLine,
//     RiShareForwardFill,
//     RiThumbUpLine,
//     RiThumbUpFill,
//     RiHeartFill,
//     RiHeartLine,
// } from 'react-icons/ri';
// import moment from 'moment';
// import { useAuth } from '../../../context/auth';
// import { API_URL } from '../../utils/config';
// import axios from 'axios';
// const ArticleInSide = ({ article }) => {
//     const { member, setMember } = useAuth();
//     const [liked, setLiked] = useState(false);
//     const [ILiked, setILiked] = useState(false);
//     const [signInModal, setSignInModal] = useState(false);
//     const [copiedAlert, setCopiedAlert] = useState(false);
//     const [collect, setCollect] = useState(false);
//     const [allComment, setAllComment] = useState([]);
//     const [currentEdit, setCurrentEdit] = useState(null);
//     const [deleteModal, setDeleteModal] = useState(false);
//     const handleDislike = () => {
//         setLiked(false);
//         if (member) {
//             (async function () {
//                 await axios.patch(
//                     `${API_URL}/videos/${videoId}`,
//                     { like: 'dislike' },
//                     { withCredentials: true }
//                 );
//             })();
//         }
//     };
//     const handleLike = () => {
//         member ? setLiked(true) : setSignInModal(true);
//         if (member) {
//             (async function () {
//                 await axios.patch(
//                     `${API_URL}/videos/${videoId}`,
//                     { like: 'like' },
//                     { withCredentials: true }
//                 );
//             })();
//         }
//     };

//     const handleRemoveCollection = () => {
//         setCollect(false);
//         if (member) {
//             (async function () {
//                 await axios.patch(
//                     `${API_URL}/videos/${videoId}`,
//                     { collect: 'removeCollection' },
//                     { withCredentials: true }
//                 );
//             })();
//         }
//     };

//     const handleAddCollection = () => {
//         member ? setCollect(true) : setSignInModal(true);
//         if (member) {
//             (async function () {
//                 await axios.patch(
//                     `${API_URL}/videos/${videoId}`,
//                     { collect: 'addCollection' },
//                     { withCredentials: true }
//                 );
//             })();
//         }
//     };
//     return (
//         <>
//             <div className="border-4 border-light-blue-500 border-opacity-100 p-5 my-5">
//                 <img
//                     className="m-auto"
//                     src={`http://localhost:3030/articles/uploads/${article.photos}`}
//                     alt=""
//                 />
//                 <h3 class="text-xl lg:text-2xl xl:text-4xl m-2 text-yellow-400">
//                     {article.title}
//                 </h3>
//                 <div className="m-2 md:flex md:justify-between">
//                     <div className="flex items-center">
//                         <BsFillPersonFill className="text-yellow-400 mr-1 cursor-pointer" />
//                         <h4 className="text-sm text-white mr-4">
//                             {article.user_name}
//                         </h4>
//                         <FaClock className="text-yellow-400 mr-1" />
//                         <h4 className="text-xs text-white mr-4">
//                             {moment(article.upload_date).format(
//                                 'YYYY-MM-DD HH:mm'
//                             )}
//                         </h4>
//                         <FaEye className="text-yellow-400 mr-1" />
//                         <h4 className="text-sm text-white mr-4">
//                             {article.views}
//                         </h4>
//                     </div>
//                     <div className="flex items-center">
//                         {liked ? (
//                             <div
//                                 className="flex mr-4 items-center cursor-pointer"
//                                 onClick={() => handleDislike()}
//                             >
//                                 <RiThumbUpFill className="text-yellow-400 mr-1 sm:text-lg xs:text-3xl" />
//                                 <span className="text-sm sm:text-xs text-white w-max">
//                                     {ILiked ? video.likes : video.likes + 1}
//                                 </span>
//                                 {/* <span className="text-sm sm:text-xs text-white w-max">{video.likes}</span> */}
//                             </div>
//                         ) : (
//                             <div
//                                 className="flex mr-4 items-center cursor-pointer"
//                                 onClick={() => handleLike()}
//                             >
//                                 <RiThumbUpLine className="text-yellow-400 mr-1 sm:text-lg xs:text-3xl" />
//                                 <span className="text-sm sm:text-xs text-white w-max">
//                                     {ILiked ? video.likes - 1 : video.likes}
//                                 </span>
//                                 {/* <span className="text-sm sm:text-xs text-white w-max">{video.likes}</span> */}
//                             </div>
//                         )}
//                         {copiedAlert ? (
//                             <div className="flex mr-4 items-center cursor-pointer">
//                                 <RiShareForwardFill className="text-yellow-400 mr-1 sm:text-lg xs:text-3xl" />
//                                 <span className="text-sm sm:text-xs text-white w-max">
//                                     已複製連結
//                                 </span>
//                             </div>
//                         ) : (
//                             <div
//                                 className="flex mr-4 items-center cursor-pointer"
//                                 onClick={() => {
//                                     setCopiedAlert(true);
//                                     navigator.clipboard.writeText(
//                                         APP_URL + location.pathname
//                                     );
//                                 }}
//                             >
//                                 <RiShareForwardLine className="text-yellow-400 mr-1 sm:text-lg xs:text-3xl" />
//                                 <span className="text-sm sm:text-xs text-white w-max">
//                                     點擊分享
//                                 </span>
//                             </div>
//                         )}
//                         {collect ? (
//                             <div
//                                 className="flex mr-4 items-center cursor-pointer"
//                                 onClick={() => handleRemoveCollection()}
//                             >
//                                 <RiHeartFill className="text-red-400 mr-1 sm:text-base xs:text-2xl" />
//                                 <span className="text-sm sm:text-xs text-white w-max">
//                                     已收藏
//                                 </span>
//                             </div>
//                         ) : (
//                             <div
//                                 className="flex mr-4 items-center cursor-pointer"
//                                 onClick={() => handleAddCollection()}
//                             >
//                                 <RiHeartLine className="text-red-400 mr-1 sm:text-base xs:text-2xl" />
//                                 <span className="text-sm sm:text-xs text-white w-max">
//                                     收藏
//                                 </span>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <div className="m-2">
//                     <p
//                         className="text-base leading-loose tracking-wide text-white"
//                         dangerouslySetInnerHTML={{
//                             __html: article.content,
//                         }}
//                     ></p>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ArticleInSide;
