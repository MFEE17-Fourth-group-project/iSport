import React from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaTimesCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/auth';
import { Redirect, Link } from 'react-router-dom';

function SignIn(props) {
    // 控制取得帳號密碼值
    const { member, setMember } = useAuth();
    const { token, setToken } = useAuth();
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const windowClose = () => {
        props.onCancel();
    };

    // 控制handleSumbit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let result = await axios.post(
                `${API_URL}/auth/Signin`,
                {
                    account,
                    password,
                },
                //如果要同意跨原信任 需要將withCredentials改為true
                { withCredentials: true }
            );
            console.log(result);
            setMember(result.data);
            console.log(member);
            windowClose();
            // setToken(result.data.token);
        } catch (e) {
            //透過e.response拿到axios的response
            console.error(e);
            //顯示錯誤訊息到前端，目前先使用alert顯示後面可以修改成套窗或者紅字顯示
            // alert(e.response.data.message);
        }
    };
    //控制成功登入視窗
    const [SignSucress, setSignSucress] = useState(false);
    const handleSignSucress = () => {
        setSignSucress(true);
    };
    const handleCancelSignSucress = () => {
        setSignSucress(false);
    };
    // 控制密碼顯示隱藏
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    if (member !== null) {
        return <Redirect to="/user" />;
    }
    return (
        <form className="w-screen h-screen fixed z-0" onSubmit={handleSubmit}>
            <div
                id="module"
                className="w-full max-w-sm rounded justify-center flex-auto items-center transform -translate-y-1/2
                -translate-x-1/2 z-20 absolute top-1/2 left-1/2"
            >
                <div className="bg-gray-900 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold relative">
                    登入
                    <FaTimesCircle
                        className="userIcons absolute flex right-0 cursor-pointer"
                        onClick={props.onCancel}
                    />
                </div>
                <div className="bg-gray-700 shadow-md rounded-b-xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-white text-base font-bold mb-2"
                            htmlFor="account"
                        >
                            帳號：
                        </label>
                        <input
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                            id="account"
                            type="text"
                            placeholder="請輸入帳號"
                            value={account}
                            onChange={(e) => {
                                setAccount(e.target.value);
                            }}
                            required
                        />
                        <hr className="border-2 border-yellow-400" />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-white text-base font-bold mb-2 "
                            htmlFor="password"
                        >
                            密碼：
                        </label>
                        <input
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none relative"
                            placeholder="請輸入密碼"
                            id="password"
                            name="password"
                            type={passwordShown ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        />
                        <i
                            onClick={togglePasswordVisiblity}
                            className="eyesposition"
                        >
                            <FaEye className="userIcons hover:text-green-400" />
                        </i>
                        <hr className="border-2 border-yellow-400" />
                        <Link to="/SearchPassword">
                            <button
                                className="font-bold text-sm text-red-500 hover:text-red-800 justify-end flex mt-1 mb-1"
                                onClick={props.onCancel}
                            >
                                忘記密碼?
                            </button>
                        </Link>
                        <div className="flex items-center justify-center">
                            <Link to="/SignUp">
                                <button
                                    className="btn-green mr-10"
                                    type="button"
                                    onClick={props.onCancel}
                                >
                                    註冊
                                </button>
                            </Link>

                            <button
                                type="submit"
                                className="btn-yellow"
                                onClick={handleSignSucress}
                            >
                                登入
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-black bg-opacity-50 w-screen h-screen fixed z-10"
                onClick={props.onCancel}
            ></div>
        </form>
    );
}
export default SignIn;
