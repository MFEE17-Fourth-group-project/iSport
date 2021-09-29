import React, { useState, useEffect } from 'react';
import { API_URL } from '../../../../utils/config';
import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import { TiPlus, TiMinus } from 'react-icons/ti';
import product from '../../../../images/product/1002-3.png';
import axios from 'axios';

function CartItem(props) {
    // 取得後端資料
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // 連到後端的 API，取得商品資訊
    useEffect(() => {
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
        getItemDetail();
    }, []);

    // 存取 localStorage
    const [mycart, setMycart] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [mycartDisplay, setMycartDisplay] = useState([]);

    function getCartFromLocalStorage() {
        // 開啟載入的指示圖示
        setDataLoading(true);

        // 初始化：一開始開啟這個網站時，取得 localStorage 中 cart 資料，如果 localStorage 中沒有 cart 時，存一個空的 []。
        const newCart = localStorage.getItem('cart') || '[]';

        console.log('newCart', JSON.parse(newCart));

        setMycart(JSON.parse(newCart));
    }
    // componentDidMount 一進到此頁面，從 localStorage 得到 cart 資料
    useEffect(() => {
        getCartFromLocalStorage();
    }, []);

    // 每次mycart資料有改變，1秒後關閉載入指示
    // componentDidUpdate
    useEffect(() => {
        setTimeout(() => setDataLoading(false), 1000);

        // mycartDisplay運算
        let newMycartDisplay = [];

        //尋找mycartDisplay
        for (let i = 0; i < mycart.length; i++) {
            //尋找mycartDisplay中有沒有此mycart[i].id
            //有找到會返回陣列成員的索引值
            //沒找到會返回-1
            const index = newMycartDisplay.findIndex(
                (value) => value.id === mycart[i].id
            );
            //有的話就數量+1
            if (index !== -1) {
                //每次只有加1個數量
                //newMycartDisplay[index].qty++
                //假設是加數量的
                newMycartDisplay[index].qty += mycart[i].qty;
            } else {
                //沒有的話就把項目加入，數量為1
                const newItem = { ...mycart[i] };
                newMycartDisplay = [...newMycartDisplay, newItem];
            }
        }

        console.log('newMycartDisplay', newMycartDisplay);
        setMycartDisplay(newMycartDisplay);
    }, [mycart]);

    // 更新購物車中的商品數量
    const updateCartTolocalStorage = (item, isAdded = true) => {
        console.log(item, isAdded);
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

        // find if the product in the localStorage with its id
        const index = currentCart.findIndex((v) => v.id === item.id);

        console.log('index', index);
        // found: index! == -1
        if (index > -1) {
            isAdded ? currentCart[index].qty++ : currentCart[index].qty--;
        }

        localStorage.setItem('cart', JSON.stringify(currentCart));

        // 設定資料
        setMycart(currentCart);
    };

    // 移除該品項

    // 計算總價用的函式
    const sum = (items) => {
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            total += items[i].qty * items[i].price;
        }
        return total;
    };

    const display = (
        <>
            <ul className="list-group">
                {mycartDisplay.map((item, index) => {
                    return (
                        <li className="list-group-item" key={item.id}>
                            產品：{item.name}/數量：
                            <button
                                onClick={() => {
                                    if (item.qty === 1) return;
                                    updateCartTolocalStorage(item, false);
                                }}
                            >
                                -
                            </button>
                            {item.qty}
                            <button
                                onClick={() =>
                                    updateCartTolocalStorage(item, true)
                                }
                            >
                                +
                            </button>
                            /單價：{item.price}/{'   '}
                            小計：{item.qty * item.price}
                        </li>
                    );
                })}
            </ul>
            <h3>總價：{sum(mycartDisplay)}</h3>
        </>
    );

    return (
        <>
            {mycartDisplay.map((item, index) => {
                console.log(item.id);
                return (
                    <div
                        className="sm:p-2.5 lg:p-4 p-1.5 flex flex-row"
                        key={item.id}
                    >
                        {/* ========== 商品圖片 ========== */}
                        <figure className="sm:w-36 w-2/5 sm:mx-5 mx-0 self-center">
                            <img
                                className="w-full"
                                src={product}
                                alt="good product"
                            ></img>
                        </figure>
                        <div className="flex flex-col flex-grow lg:ml-10 ml-5">
                            <div className="flex flex-row justify-between pb-2.5 cursor-default">
                                <h3 className="sm:text-xl text-lg font-bold">
                                    女款路跑背心
                                </h3>
                                <p className="text-yellow-400 font-bold">
                                    $350
                                </p>
                            </div>
                            <div className="pb-1.5 text-sm text-yellow-400 cursor-default">
                                MIZUNO 美津濃
                            </div>
                            <div className="flex flex-row items-center pb-1.5 cursor-default">
                                <p className="sm:mr-2.5 mr-6">顏色：</p>
                                <div className="btn-yellow-tag px-4">黑</div>
                            </div>
                            <div className="flex flex-row items-center pb-1.5 cursor-default">
                                <p className="sm:mr-2.5 mr-6">尺寸：</p>
                                <div className="btn-yellow-tag px-4">M</div>
                            </div>
                            <div className="flex sm:flex-row sm:items-center flex-col">
                                <div className="flex flex-row pb-1.5 sm:pb-0">
                                    <p className="sm:mr-2.5 mr-4 cursor-default">
                                        數量：
                                    </p>

                                    {/* ============= 數量加減鈕 ============= */}
                                    <div className="px-2 sm:mr-2.5 mr-0 border border-yellow-400 rounded-md flex flex-row items-center bg-transparent">
                                        <div
                                            className="cursor-pointer"
                                            onClick={() => {
                                                if (item.qty === 1) return;
                                                updateCartTolocalStorage(
                                                    item,
                                                    false
                                                );
                                            }}
                                        >
                                            <TiMinus />
                                        </div>
                                        <div>
                                            <div className="w-5 text-center">
                                                {item.qty}
                                            </div>
                                        </div>
                                        <div
                                            className="cursor-pointer"
                                            onClick={() =>
                                                updateCartTolocalStorage(
                                                    item,
                                                    true
                                                )
                                            }
                                        >
                                            <TiPlus />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row">
                                    <div className=" cursor-pointer mr-2.5 text-red-400 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white hover:text-opacity-85 active:bg-red-600 font-md uppercase text-sm sm:px-2 px-4 py-1 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center">
                                        <FaHeart className="mx-1 sm:mr-2.5" />
                                        <p className="sm:block hidden">
                                            移至收藏
                                        </p>
                                    </div>
                                    <div className="cursor-pointer btn text-yellow-400 bg-transparent border border-solid border-yellow-300 hover:bg-yellow-400 hover:text-gray-800 active:bg-yellow-600 font-md uppercase text-sm sm:px-2 px-4 py-1 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center">
                                        <FaTrashAlt className="mx-1 sm:mr-2.5" />
                                        <p className="sm:block hidden">
                                            移除商品
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CartItem;
