import { IoMdChatboxes } from 'react-icons/io';
import { IoPeople } from 'react-icons/io5';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import Messages from './ChatRoomComponents/Messages';

let socket;

const ChatRoom = () => {
    const history = useHistory();
    const location = useLocation();
    const [openChat, setOpenChat] = useState(false);
    const [closeForm, setCloseForm] = useState(false);
    const [nickname, setNickname] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [typingUsers, setTypingUsers] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { nickname, room } = queryString.parse(location.search);

        if (nickname !== undefined && room !== undefined) {
            setNickname(nickname);
            setRoom(room);

            socket = io('localhost:8000');

            socket.emit('join', { nickname, room }, err => {
                if (err) {
                    return alert(err);
                }
                setCloseForm(true);
            });

            return () => {
                socket.emit();
            };
        }

    }, [location.search]);

    useEffect(() => {
        if (socket) {
            socket.on('userTyping', typingUsers => {
                console.log(typingUsers);
                typingUsers > 0 ? setTypingUsers(`${typingUsers}人正在輸入訊息...`) : setTypingUsers(null);
            });
            socket.on('message', message => {
                setMessages(messages => [...messages, message]);
            });
            socket.on('roomData', ({ users }) => {
                setUsers(users);
            });
        }

    }, [socket]);

    const handleEnterChatRoom = (e) => {
        e.preventDefault();
        const nickname = e.target.nickname.value;
        const room = e.target.room.value;
        history.push(`?nickname=${nickname}&room=${room}`);
    };

    const handleChatInput = (e) => {
        setMessage(e.target.value);
        if (socket && message !== '') {
            socket.emit('isTyping');
        }
        if (message === '') {
            socket.emit('cancelTyping');
            typingUsers === 1 ? setTypingUsers(null) : setTypingUsers(`${typingUsers}人正在輸入訊息...`);
        }
    };

    const sendMessage = () => {
        if (socket && message !== '') {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    const leaveChatRoom = () => {
        history.push('/');
        socket.disconnect();
        setCloseForm(false);
        setMessages([]);
        setMessage('');
    };

    console.log(message, messages);

    return (
        <>
            {openChat && <div className="w-96 h-124 bg-gray-700 fixed bottom-0 right-3 rounded-md shadow-lg overflow-hidden border border-gray-100 border-opacity-10 filter drop-shadow-lg z-8">
                <div
                    className="bg-gray-900 w-full flex py-3 items-center justify-center cursor-pointer fixed"
                    onClick={() => setOpenChat(false)}
                >
                    <IoMdChatboxes className="text-white w-9 h-9 mr-2" />
                    <h3 className="text-white text-2xl">iSport! 即時聊天</h3>
                </div>
                {!closeForm && <form
                    className="px-7 py-8 flex flex-col w-full h-full pt-24"
                    onSubmit={(e) => handleEnterChatRoom(e)}
                >
                    <label
                        htmlFor="nickname"
                        className="text-white text-xl mb-2"
                    >暱稱：</label>
                    <input
                        id="nickname"
                        type="text"
                        className="w-full h-10 px-2 focus:outline-none bg-gray-700 border-b-4 focus:border-yellow-400 text-white text-lg mb-6"
                        placeholder="請輸入暱稱"
                        required
                    />
                    <label
                        htmlFor="room"
                        className="text-white text-xl mb-2"
                    >選擇聊天室：</label>
                    <select
                        id="room"
                        className="w-full h-10 px-2 focus:outline-none bg-gray-700 border-b-4 focus:border-yellow-400 text-white text-lg mb-36"
                        required
                    >
                        <option value="" selected disabled hidden>請選擇</option>
                        <option value="飲食">飲食</option>
                        <option value="tabata">tabata</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full h-12 px-2 focus:outline-none bg-yellow-400 hover:bg-yellow-500 text-black text-xl rounded-md shadow-lg"
                    >進入聊天室</button>
                </form>}
                {closeForm &&
                    <>
                        <div className="flex bg-gray-600 items-end pl-7 py-1.5 border-b border-gray-100 border-opacity-10 pt-16">
                            <IoPeople className="text-white w-9 h-9 mr-3" />
                            <h4 className="text-white text-lg">
                                {room} 聊天室
                                <span> ({`${users.length} 人`})</span>
                            </h4>
                            <button
                                className="bg-gray-700 hover:bg-gray-800 rounded py-0.5 px-2.5 flex text-white mr-5 ml-auto mb-0.5"
                                onClick={() => leaveChatRoom()}
                            >退出</button>
                        </div>
                        <div
                            className="flex flex-col w-full"
                        >
                            <Messages messages={messages} nickname={nickname} typingUsers={typingUsers} />
                            <div className="flex w-full bg-gray-800 py-4 border-t border-gray-100 border-opacity-30">
                                <input
                                    type="text"
                                    className="flex w-full h-10 px-2 focus:outline-none bg-gray-800 border-b-4 focus:border-yellow-400 text-white text-lg pb-1.5 mx-7"
                                    placeholder="請輸入訊息"
                                    title="請輸入訊息"
                                    required
                                    value={message}
                                    onChange={e => handleChatInput(e)}
                                    onKeyPress={e => e.key === 'Enter' ? sendMessage(message) : null}
                                />
                            </div>

                        </div>
                    </>}
            </div>}
            <div
                className="fixed flex items-center bottom-3 right-3 bg-yellow-400 hover:bg-yellow-500 py-1.5 px-2.5 rounded-md shadow-lg cursor-pointer"
                onClick={() => setOpenChat(true)}
            >
                <IoMdChatboxes className="w-8 h-8 mr-2" />
                <h3 className="text-xl">聊天室</h3>
            </div>
        </>
    );
};

export default ChatRoom;
