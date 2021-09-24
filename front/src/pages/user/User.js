import React from 'react';
import UserAside from './components/UserAside';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/config';
import { useAuth } from '../../context/auth';
import NotAuth from './components/NotAuth';
import SignIn from './sign/SignIn';

function Users() {
    const { member } = useAuth();
    const [account, setAccount] = useState(``);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(``);
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [aboutme, setAboutme] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/users/UpdateAccount`,
                {
                    name,
                    account,
                    password,
                    email,
                    phone,
                    address,
                    birthday,
                    aboutme,
                    gender,
                },
                { withCredentials: true }
            );
            alert('註冊成功');
            console.log(response);
        } catch (e) {
            //透過e.response拿到axios的response
            console.error(e.response);
            //顯示錯誤訊息到前端，目前先使用alert顯示後面可以修改成套窗或者紅字顯示
            alert(e.response.data.message);
        }
    };
    // useEffect(() => {
    //     const getMember = async () => {
    //         try {
    //             let res = await axios.get(`${API_URL}/users/`, {
    //                 withCredentials: true,
    //             });
    //             console.log(res);
    //         } catch (e) {
    //             console.error(e.response);
    //         }
    //     };
    //     getMember();
    // }, []);
    return (
        <>
            {member ? (
                <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                    <UserAside />
                    <artical className="flex-grow flex-col">
                        <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85  rounded-t-xl user-page-title">
                            會員資料
                            <span className="text-base text-red-500	">
                                (必填)
                            </span>
                        </div>
                        <div className="text-white bg-gray-900 w-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                            <form onSubmit={handleSubmit}>
                                <br />
                                <div className="items-center  py-2">
                                    <label for="name">姓名：</label>
                                    <input
                                        type="text"
                                        className="input-style "
                                        aria-label="Full name"
                                        name="name"
                                        value={member.name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                                <br />
                                <div className="lg:flex lg:flex-wrap mr-3 mb-6 lg:justify-between text-white">
                                    <div className="lg:items-center lg:py-2 lg:w-2/5 text-white mt-5 mb-5 relative">
                                        <label for="account">帳號：</label>
                                        <input
                                            type="text"
                                            value={member.account}
                                            className="input-style lg:items-center  border-b "
                                            placeholder=""
                                            name="account"
                                            disabled
                                        />
                                        <p className="flex text-red-700 text-sm absolute  right-0 bottom-3">
                                            不可修改
                                        </p>
                                    </div>

                                    <div className="lg:items-center lg:py-2 lg:w-2/5 text-white mt-5 mb-5">
                                        <label for="password">密碼：</label>
                                        <input
                                            type="password"
                                            className="input-style lg:items-center  border-b"
                                            name="password"
                                            placeholder="更換密碼時請輸入新密碼"
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mt-5 mb-5">
                                    <label for="email">信箱：</label>
                                    <input
                                        type="email"
                                        className="input-style "
                                        name="email"
                                        value={member.email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className=" mt-5 mb-5">
                                    <label for="phone">行動電話：</label>
                                    <input
                                        type="phone"
                                        className="input-style"
                                        value={member.phone}
                                        name="phone"
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mt-5 mb-5 xs:text-base text-sm">
                                    <label for="address">住家地址：</label>
                                    <input
                                        type="text"
                                        className="input-style overflow-x-auto"
                                        name="address"
                                        value={member.address}
                                        onChange={(e) => {
                                            setAddress(e.target.value);
                                        }}
                                    />
                                </div>
                                {/* </from> */}
                                {/* </div> */}
                                <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title">
                                    其他資料
                                </div>

                                {/* <from> */}
                                <div className="text-white bg-gray-900 w-full object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10">
                                    <div className="flex flex-wrap mr-3 mb-6 justify-between">
                                        <div className="items-center border-b py-2 md:w-2/5">
                                            <label for="menberAccount">
                                                生日：
                                            </label>
                                            <input
                                                type="date"
                                                className="ml-10 bg-gray-700 border-none  text-white mr-3 py-1 px-2 leading-tight focus:outline-none "
                                                name="menberAccount"
                                                onChange={(e) => {
                                                    setBirthday(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div class="xl:inline-block xl:w-64 mt-5">
                                            <label for="gender">性別：</label>
                                            <select
                                                value={member.gender}
                                                name="gender"
                                                className="bg-transparent border-2 border-gray-700 w-40"
                                                onChange={(e) => {
                                                    setGender(e.target.value);
                                                }}
                                            >
                                                <option
                                                    className="text-black"
                                                    value="null"
                                                >
                                                    保留
                                                </option>
                                                <option
                                                    className="text-black"
                                                    value="male"
                                                >
                                                    男性
                                                </option>
                                                <option
                                                    className="text-black"
                                                    value="female"
                                                >
                                                    女性
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div classNmae="mt-10"></div>
                                    <label for="aboutme">關於我：</label>
                                    <textarea
                                        value={member.aboutme}
                                        id="aboutme"
                                        name="name"
                                        class="w-full px-3 py-2 text-white border rounded-lg focus:outline-none bg-transparent"
                                        rows="4"
                                        onChange={(e) => {
                                            setAboutme(e.target.value);
                                        }}
                                    ></textarea>
                                    <div className="justify-center flex">
                                        <button
                                            type="submit"
                                            className="btn-yellow"
                                        >
                                            更改個人資料
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </artical>
                </main>
            ) : (
                <NotAuth />
            )}
        </>
    );
}

export default Users;
