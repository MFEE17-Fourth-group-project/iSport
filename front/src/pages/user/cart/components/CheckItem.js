import React, { useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';
import product from '../../../../images/product/1002-3.png';
import axios from 'axios';

function CheckItem() {
    // 取得後端資料
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    // 連到後端的 API，取得商品資訊
    console.log('read API_URL', API_URL);
    const getItemDetail = async () => {
        try {
            let res = await axios.get(`${API_URL}/cart`);
            let data = res.data;
            console.log('data', data);
            setData(data);
            setError(null);
        } catch (e) {
            console.log(e);
            setError(e.message);
        }
    };

    // 存取 localStorage
    const [myCart, setMyCart] = useState([]);
    // 初始化：一開始開啟這個網站時，取得 localStorage 中 cart 資料，如果 localStorage 中沒有 cart 時，存一個空的 []。
    const getDataFromLocalStorage = async () => {
        try {
            const myCartItem = JSON.parse(localStorage.getItem('cart'));
            let getSkuCode = myCartItem.map((item) => item.sku_code);
            console.log('getSkuCode', getSkuCode);
            // TODO: async await post 資料到後端 --> 後端再丟資料回來
            let result = await axios.post(
                `${API_URL}/cart`,
                { getSkuCode },
                { withCredentials: true }
            );
            setMyCart(myCartItem);
            console.log('myCart in CheckItem', myCartItem);
            setError('');
        } catch (e) {
            console.log(e);
            setError(e.message);
        }
    };

    // componentDidMount 一進到此頁面，從 localStorage 得到 cart 資料
    useEffect(() => {
        getItemDetail();
        getDataFromLocalStorage();
    }, []);

    return (
        <>
            {myCart.map((item, index) => {
                return (
                    <div
                        className="sm:p-2.5 h-180 lg:p-4 p-1.5 flex flex-row"
                        key={item.id}
                    >
                        <div className="sm:w-36 w-2/5 sm:mx-5 mx-0 self-center text-center">
                            <img
                                className="w-full"
                                src={product}
                                alt="good product"
                            ></img>
                        </div>
                        <div className="flex flex-col flex-grow lg:ml-10 ml-5">
                            <div className="flex flex-row justify-between pb-2.5">
                                <h3 className="sm:text-xl text-lg font-bold">
                                    女款路跑背心
                                </h3>
                                <p className="text-yellow-400 font-bold">
                                    $350
                                </p>
                            </div>
                            <div className="pb-1.5 text-sm text-yellow-400">
                                MIZUNO 美津濃
                            </div>
                            <div className="flex flex-row items-center pb-1.5">
                                <p className="mr-2.5">顏色：</p>
                                <div className="px-4 text-white text-opacity-85 text-center text-sm rounded-full">
                                    黑
                                </div>
                            </div>
                            <div className="flex flex-row items-center pb-1.5">
                                <p className="mr-2.5">尺寸：</p>
                                <div className="px-4 text-white text-opacity-85 text-center text-sm rounded-full">
                                    M
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="mr-2.5">數量：</p>
                                <div className="w-16 px-4 mr-2.5 border-l-2 border-transparent rounded-md flex items-center">
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CheckItem;
