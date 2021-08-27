import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './components/CartItem';
import { FaArrowRight } from 'react-icons/fa';

function Cart() {
    return (
        <>
            <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                <div className="w-64 mr-2.5 bg-yellow-100">放側欄</div>
                <div className="flex-grow flex-col">
                    <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-4xl rounded-t-xl">
                        購物車
                    </div>
                    <div className="text-white px-12 py-6 bg-gray-900">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <div className="pt-2.5 mb-9 border-t-2 border-yellow-400 text-yellow-400 flex flex-row justify-end">
                            <p className="text-lg font-bold">Total :</p>
                            <span className="text-lg font-bold">1400</span>
                        </div>
                        <div className="flex flex-row justify-end">
                            <Link
                                to="/checkout"
                                className="btn-yellow flex flex-row justify-end items-center"
                            >
                                <FaArrowRight className="mr-2.5" />
                                <p className="font-bold text-xl">前往結帳</p>
                            </Link>
                        </div>
                        {/* <button className="flex flex-row justify-end">前往結帳</button> */}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cart;
