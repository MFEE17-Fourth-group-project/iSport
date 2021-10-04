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
    const { cartAdd } = props;
    const [orderInfo, setOrderInfo] = useState([]);

    // 向 server 拿資料
    const getDataFromServer = async () => {
        let result = await axios.post(`${API_URL}/order`);
        console.log('result.data.orders', result.data.orders[0]);
        setOrderInfo(result.data.orders[0]);
    };

    const clearLocalStorage = () => {
        localStorage.removeItem('cart');
    };

    useEffect(() => {
        getDataFromServer();
        clearLocalStorage();
        cartAdd();
    }, []);

    return (
        <>
            {member ? (
                <main className="sm:max-w-screen-xl w-full mx-auto px-2.5 py-5 flex justify-start border-red-300">
                    <Aside />
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
                                    訂單編號 : {orderInfo.order_no}
                                </h5>
                            </div>
                            <div className="flex sm:flex-row flex-col mb-8">
                                <div className="flex-1">
                                    <table>
                                        <tr className="">
                                            <td className="w-20 pb-4">
                                                收件人 :{' '}
                                            </td>
                                            <td className="pb-4">
                                                {orderInfo.recipient}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-4">
                                                聯絡電話 :{' '}
                                            </td>
                                            <td className="pb-4">
                                                {orderInfo.phone}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-4">
                                                電子信箱 :{' '}
                                            </td>
                                            <td className="pb-4">
                                                {orderInfo.email}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-4">
                                                收件地址 :{' '}
                                            </td>
                                            <td className="pb-4">
                                                {orderInfo.address}
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
                                            <td className="pb-4">
                                                {orderInfo.order_date &&
                                                    orderInfo.order_date.slice(
                                                        0,
                                                        10
                                                    )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-4">
                                                付款方式 :{' '}
                                            </td>
                                            <td className="pb-4">
                                                {orderInfo.paytype}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-4">
                                                運送方式 :{' '}
                                            </td>
                                            <td className="pb-4">
                                                {orderInfo.delivery}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-4">
                                                訂單狀態 :{' '}
                                            </td>
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
                            {/* <CheckItem /> */}
                            <div className="pt-2.5 mt-8 mb-6 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                                <p className="text-lg font-bold">Total : </p>
                                <span className="text-lg font-bold">
                                    $ {orderInfo.total_amount}
                                </span>
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

export default Finished;
