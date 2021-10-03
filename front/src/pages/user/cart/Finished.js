import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/auth';
import { API_URL } from '../../../utils/config';
import ProgressBar from './components/ProgressBar';
import CheckItem from './components/CheckItem';
import NotAuth from '../components/NotAuth';
import Aside from '../../../global/Aside';
import axios from 'axios';

function Finished(props) {
    const { member, setMember } = useAuth();
    const [totalAmount, setTotalAmount] = useState(0);
    const [orderInfo, setOrderInfo] = useState({});

    // 向 server 拿資料
    const getDataFromServer = async (myCartItem) => {
        let result = await axios.post(`${API_URL}/order`);
        console.log('result.data.myCart', result.data.myCart);

        // 前端計算總金額，傳回父母元件
        result.data.myCart.forEach((item) => {
            const amount = item.price * item.qty;
            totalAmount += amount;
        });
        // alert(totalAmount);
    };

    useEffect(() => {
        getDataFromServer();
    }, []);

    return (
        <>
            {/* {member ? ( */}
            <main className="sm:max-w-screen-xl w-full mx-auto px-2.5 py-5 flex justify-start border-red-300">
                {/* <Aside /> */}
                <article className="flex-grow flex-col">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 user-page-title rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white sm:px-12 px-4 py-6 bg-gray-900 rounded-b-xl">
                        <div>
                            <ProgressBar />
                        </div>
                        <div className="flex justify-center sm:mb-8 my-4">
                            <h3 className="sm:text-2xl text-xl font-bold text-yellow-400 py-2">
                                訂單已成立，謝謝您的購買!
                            </h3>
                        </div>
                        <div className="border-b-2 border-yellow-400 mb-8">
                            <h5 className="pb-2.5 sm:text-xl text-lg text-center">
                                訂單編號 : 2107ORD1425
                            </h5>
                        </div>
                        <div className="flex sm:flex-row flex-col mb-8">
                            <div className="flex-1">
                                <table>
                                    <tr className="">
                                        <td className="w-20 pb-4">收件人 : </td>
                                        <td className="pb-4">Aaliyah</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">聯絡電話 : </td>
                                        <td className="pb-4">0988777888</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">電子信箱 : </td>
                                        <td className="pb-4">
                                            aali@isport.com
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">收件地址 : </td>
                                        <td className="pb-4">
                                            台北市中山區羅斯福路9段201巷5弄20號3樓
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="flex-1 sm:ml-5">
                                <table>
                                    <tr>
                                        <td className="w-20 pb-4">
                                            下單日期 :
                                        </td>
                                        <td className="pb-4">2021/8/19</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">付款方式 : </td>
                                        <td className="pb-4">信用卡</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">運送方式 : </td>
                                        <td className="pb-4">宅急便</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-4">訂單狀態 : </td>
                                        <td className="pb-4">備貨中</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className="border-b-2 border-yellow-400 mb-8">
                            <h5 className="pb-2.5 text-xl text-center">
                                訂購明細
                            </h5>
                        </div>
                        <CheckItem setTotalAmount={setTotalAmount} />
                        <div className="pt-2.5 mt-8 mb-6 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="text-lg font-bold">Total :</p>
                            <span className="text-lg font-bold">
                                {totalAmount}
                            </span>
                        </div>
                    </div>
                </article>
            </main>
            {/* ) : (
                <NotAuth />
            )} */}
        </>
    );
}

export default Finished;
