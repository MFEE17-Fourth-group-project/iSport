import React, { useState, useEffect, useRef } from 'react';
import { HiChevronDoubleDown, HiChevronDoubleUp } from 'react-icons/hi';
import { API_URL } from '../../../utils/config';
import { useAuth } from '../../../context/auth';
import { Link } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import CheckItem from './components/CheckItem';
import NotAuth from '../components/NotAuth';
import Aside from '../../../global/Aside';
import axios from 'axios';

function Checkout(props) {
    const { member, setMember } = useAuth();
    const { cartAdd } = props;
    const [totalAmount, setTotalAmount] = useState(0);
    // Recipient FormData
    const [recipient, setRecipient] = useState('Sarah');
    const [phone, setPhone] = useState('0955123456');
    const [email, setEmail] = useState('sa@isport.com');
    const [address, setAddress] = useState('桃園市平鎮區中央路123號');
    const [delivery, setDelivery] = useState(2);

    // FIXME: ANIMATE TRANSITION and DURATION ** 沒作用 **
    const showCheckItemRef = useRef(null);
    const showItem = () => {
        const showCheckItem = showCheckItemRef.current;
        console.log('showCheckItem', showCheckItem);
        showCheckItem.classList.toggle('max-h-1000');
    };

    // 取得 user 資料並 render 到畫面
    const getUserData = async () => {
        // const userAccount = member.account;
        // console.log("userAccount", userAccount);
        let result = await axios.post(`${API_URL}/cart/userData`);
        // console.log('result.data', result.data[0]);
        // {account: 'admin1', name: '黃阿花', email: 'admin1@test.com', phone: '0912345678', address: '台北市中山區羅斯福路一段一號'}
        // length: 1

        setRecipient(result.data[0].name);
        setPhone(result.data[0].phone);
        setEmail(result.data[0].email);
        setAddress(result.data[0].address);
    };

    // 資料變動 --> 儲存到 localStorage
    const handleSubmit = (e) => {
        // e.preventDefault();

        localStorage.setItem(
            'recipientData',
            JSON.stringify({
                recipient: recipient,
                phone: phone,
                email: email,
                address: address,
                delivery: delivery,
            })
        );
    };

    useEffect(() => {
        getUserData();
        cartAdd();
    }, []);

    return (
        <>
            {member ? (
            <main className="sm:max-w-screen-xl w-full mx-auto px-2.5 py-5 flex justify-start border-red-300">
                <Aside />
                <article className="flex-grow flex-col ">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white sm:px-12 px-4 py-6 bg-gray-900 mb-2.5">
                        <div>
                            <ProgressBar />
                        </div>
                        {/*    FIXME: 下拉動畫    */}
                        <div
                            ref={showCheckItemRef}
                            className="max-h-44 overflow-hidden transition-all duration-500"
                        >
                            <CheckItem setTotalAmount={setTotalAmount} />
                        </div>
                        <div className="pt-2.5 mt-2.5 mb-6 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="text-lg font-bold">Total : $ </p>
                            <span className="text-lg font-bold">
                                {totalAmount}
                            </span>
                        </div>
                        <div
                            className="flex justify-center animate-bounce py-1 cursor-pointer"
                            onClick={showItem}
                        >
                            <HiChevronDoubleDown className="text-2xl text-yellow-400" />
                        </div>
                        {/*    / FIXME: 下拉動畫    */}
                    </div>
                    <div className="text-white bg-gray-900 w-full object-cover object-center text-opacity-85 text-lg sm:px-12 px-4 py-6 rounded-b-xl">
                        {/* <CheckRecipient /> */}
                        <from
                        // FIXME: onSubmit={handleSubmit}
                        >
                            <div className="items-center pt-2 mb-6">
                                <label for="recipient">收件人</label>
                                <input
                                    type="text"
                                    className="input-style"
                                    id="recipient"
                                    name="recipient"
                                    value={recipient}
                                    placeholder="Jennifer"
                                    onChange={(e) => {
                                        setRecipient(e.target.value);
                                    }}
                                ></input>
                            </div>
                            <div className="items-center pt-2 mb-6">
                                <label for="phone">行動電話</label>
                                <input
                                    type="phone"
                                    className="input-style"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    placeholder="0955123456"
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                ></input>
                            </div>
                            <div className="items-center pt-2 mb-6">
                                <label for="email">信箱</label>
                                <input
                                    type="email"
                                    className="input-style"
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder="jen@isport.com"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                ></input>
                            </div>
                            <div className="items-center pt-2 mb-6">
                                <label for="address">住家地址</label>
                                <input
                                    type="text"
                                    className="input-style"
                                    id="address"
                                    name="address"
                                    value={address}
                                    placeholder="桃園市平鎮區中央路123號"
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                ></input>
                            </div>
                            <div className="items-center pt-2 mb-6">
                                <label for="delivery">寄送方式</label>
                                <select
                                    type="text"
                                    className="input-style"
                                    id="delivery"
                                    name="delivery"
                                    value={delivery}
                                    onChange={(e) => {
                                        setDelivery(e.target.value);
                                    }}
                                >
                                    <option value="1">郵寄</option>
                                    <option value="2">宅急便</option>
                                    <option value="3">超商貨到付款</option>
                                </select>
                            </div>
                        </from>
                        <div className="flex flex-row justify-center">
                            <button
                                type="submit"
                                onClick={() => {
                                    handleSubmit();
                                }}
                            >
                                <Link
                                    to="/checkout2"
                                    className="btn-yellow flex flex-row justify-end items-center"
                                >
                                    <p className="font-bold sm:text-xl text-lg">
                                        下一步
                                    </p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </article>
            </main>
            ) : (
                <NotAuth />
            )}
        </>
    );
}

export default Checkout;
