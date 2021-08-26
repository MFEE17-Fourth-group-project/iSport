import React from 'react';
import HomeRouter from './pages/HomeRouter';

function App() {
    return (
<<<<<<< HEAD
        <div className="App">
            <div className="bg-gray-900 px-4 py-1.5 flex justify-between items-center sticky">

                <div className="flex items-center">
                    <img src={Logo} width="48" alt="Logo" className="mr-2" />
                </div>

                <div className="flex items-center ">
                    <button className="btn-yellow mx-4">登入</button>
                    <a href="#" className="text-white text-opacity-70 mx-4">精選影片</a>
                    <a href="#" className="text-white text-opacity-70 mx-4">多樣商品</a>
                    <a href="#" className="text-white text-opacity-70 mx-4">優質文章</a>
                    <a href="#" className="text-white text-opacity-70 mx-4">健身房</a>
                    <a href="#" className="text-white text-opacity-70 mx-4">購物車</a>
                </div>
            </div>
=======
        <div className="bg-gray-800">
            <HomeRouter />
>>>>>>> c416a64a3ca77de34fe253c412d5c87909e55c8f
        </div>
    );
}

export default App;
