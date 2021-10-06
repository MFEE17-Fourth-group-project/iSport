import React, { useState, useEffect } from 'react';
import { API_URL } from '../../../utils/config';
import { FaSearch } from 'react-icons/fa';
import Aside from '../../../global/Aside';
import OrderRecord from './components/OrderRecord';
import axios from 'axios';
import { useAuth } from '../../../context/auth';
import NotAuth from '../components/NotAuth';

// TODO: 依照使用者 id 拋轉他的歷史訂單

function TradingRecord(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const { member, setMember } = useAuth();
    const { cartAdd } = props;

    const getOrderRecord = async () => {
        try {
            let res = await axios.post(
                `${API_URL}/order`,
                {},
                {
                    withCredentials: true,
                }
            );
            let data = res.data.orders;
            console.log(data);
            setData(data);
            setError(null);
        } catch (e) {
            console.log(e);
            setError(e.message);
        }
    };

    // 連到後端的 API，取得訂單記錄
    useEffect(() => {
        console.log('read API_URL', API_URL);
        getOrderRecord();
        cartAdd();
    }, [member]);

    return (
        <>
            {member ? (
                <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                    <Aside />
                    <article className="flex-grow flex-col rounded-lg overflow-hidden text-white text-opacity-85 shadow-2xl ">
                        <div className="bg-gray-700 pl-5 py-5 user-page-title font-bold">
                            購買紀錄
                        </div>
                        <section className="my-2.5 p-4 leading-relaxed border-2 border-yellow-400">
                            <h6 className="text-xl ">注意事項：</h6>
                            <p>
                                1.產品均享有10天猶豫期之權益(注意！猶豫期非試用期)，若退/換回產品非全新狀態且包裝完整，將影響您的退貨權益及需負擔回復原狀責任。
                                <br />
                                2.個人衛生之商品暫不提供退/換貨，其它商品僅限換貨1次。
                                <br />
                                3.若無法線上操作，請與我們聯絡。
                            </p>
                            <h6 className="text-xl ">退/換貨規範：</h6>
                            <p>
                                1.取消訂單，若有多個商品於同張訂單時，須同單其他商品一同取消、退貨。
                                <br />
                                2.限定配送狀態為『已送達』，且為同一品號之商品，方可進行換貨服務。
                            </p>
                        </section>
                        {/* 選取時間 */}
                        <div className="my-4 mx-auto flex items-center justify-between border-b-2 border-yellow-400 w-96">
                            <input
                                type="date"
                                className="outline-none bg-transparent"
                            />
                            <span>至</span>
                            <input
                                type="date"
                                className="outline-none bg-transparent"
                            />
                            <FaSearch className=" text-xl" />
                        </div>
                        <section className="text-white bg-gray-900 w-full h-full object-cover object-center text-opacity-85 text-lg lg:px-10 px-4 py-6">
                            {/* 購買紀錄卡片 */}
                            {data &&
                                data.map((item, index) => (
                                    <OrderRecord
                                        key={item.id}
                                        order_no={item.order_no}
                                        order_date={item.order_date.slice(
                                            0,
                                            10
                                        )}
                                        price={item.price}
                                        paytype={item.paytype}
                                        delivery={item.delivery}
                                        status={item.status}
                                        total_amount={item.total_amount}
                                    />
                                ))}
                        </section>
                    </article>
                </main>
            ) : (
                <NotAuth />
            )}
        </>
    );
}

export default TradingRecord;
