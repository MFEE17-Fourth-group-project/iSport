import React, { useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';
import axios from 'axios';

function CheckItem(props) {
    const [error, setError] = useState('');
    const [myCart, setMyCart] = useState([]);
    const { setTotalAmount } = props;

    // 取得 localStorage 中 cart 資料
    const getDataFromLocalStorage = async () => {
        try {
            // post localStorage 資料到後端 API 並取得後端丟回來的商品資訊
            let myCartItem = JSON.parse(localStorage.getItem('cart'));
            let result = await axios.post(`${API_URL}/cart`, {
                myCartItem,
            });
            // console.log('result.data', result.data);
            // 設定回 useState render 到網頁
            // brand_name: "MIZUNO 美津濃"
            // price: 476
            // product_id: 1
            // product_name: "【MIZUNO 美津濃】女款路跑背心 J2TA1201XX（任選）(T恤)"
            // product_sku_id: 5
            // sku_code: '10011015';

            // 將總金額傳回父母元件
            setTotalAmount(result.data.totalAmount);
            setMyCart(result.data.myCart);
            console.log('myCart in CheckItem', myCartItem);

            setError('');
        } catch (e) {
            console.log(e);
            setError(e.message);
        }
    };

    // componentDidMount 一進到此頁面，從 localStorage 得到 cart 資料
    useEffect(() => {
        getDataFromLocalStorage();
    }, []);

    return (
        <>
            {myCart &&
                myCart.map((item) => {
                    return (
                        <div
                            className="sm:p-2.5 h-180 lg:p-4 p-1.5 flex flex-row"
                            key={item.product_sku_id}
                        >
                            <div className="sm:w-36 w-2/5 sm:mx-5 mx-0 self-center text-center">
                                <img
                                    className="sm:w-36 w-full"
                                    // 引入圖片
                                    src={
                                        require('../../../../images/product/' +
                                            item.img.img_name).default
                                    }
                                    alt={item.img.img_name}
                                ></img>
                            </div>
                            <div className="flex flex-col flex-grow lg:ml-10 ml-5">
                                <div className="flex flex-row justify-between pb-2.5">
                                    <h3 className="sm:text-xl text-lg font-bold">
                                        {item.product_name}
                                    </h3>
                                    <p className="text-yellow-400 font-bold">
                                        ${item.amount}
                                    </p>
                                </div>
                                <div className="pb-1.5 text-sm text-yellow-400">
                                    {item.brand_name}
                                </div>
                                {item.typeValue.map((value) => {
                                    console.log(value);
                                    console.log(value.type_name);
                                    return (
                                        <div
                                            className="flex flex-row items-center pb-1.5"
                                            key={value.type_id}
                                        >
                                            <p className="sm:mr-2.5 mr-6">
                                                {value.type_name}：
                                            </p>
                                            <div className="px-4 text-white text-opacity-85 text-center text-sm">
                                                {value.type_value}
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className="flex flex-row items-center">
                                    <p className="mr-2.5">數量：</p>
                                    <div className="w-16 px-4 mr-2.5 border-l-2 border-transparent rounded-md flex items-center">
                                        <p>{item.qty}</p>
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
