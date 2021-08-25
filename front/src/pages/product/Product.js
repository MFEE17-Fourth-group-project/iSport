import React from "react";
import productHeader from "../../images/product-header.png";

export default function Product() {
  return (
    <>
      <header className="relative w-full h-4/5 overflow-hidden">
        <div className="text-white absolute w-1/2 top-1/2 left-32 transform -translate-y-1/2">
          <p className="text-2xl break-all w-full leading-normal">
            Practice Hard, Play Strong, Pain Is Glory. ( Only For Women )
          </p>
          <h1 className="text-6xl break-all w-full leading-normal">
            Solutions For Moving Better And Feeling Althier.
          </h1>
        </div>
        <figure className="h-full w-full ">
          <img
            src={productHeader}
            alt="productHeader"
            className="w-full h-full object-cover object-center"
          />
        </figure>
      </header>
      <nav className="bg-gray-900 flex justify-center">
        <div className="border-b-2 border-yellow-400 w-36 text-white text-center text-base py-3">
          所有商品
        </div>
        <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-3">
          運動服飾
        </div>
        <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-3">
          運動鞋類
        </div>
        <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-3">
          健身器材
        </div>
        <div className="border-b-2 border-transparent w-36 text-white text-center text-base py-3">
          營養補給
        </div>
      </nav>
      <main className="max-w-screen-xl my-0 mx-auto">
        main
        {/* filter按鈕 */}
        <section>
          <div className="flex justify-between" >
            <div className="flex items-center" >
              <i class="fas fa-filter text-white text-2xl"></i>
              <button className="btn-yellow mx-4">價格</button>
              <button className="btn-yellow mx-4">價格</button>
              <button className="btn-yellow mx-4">最熱銷</button>
            </div>
            <div className="w-1/3 bg-gray-700 rounded-full flex items-center px-4" >
              <input className="bg-transparent outline-none border-none flex-grow placeholder-gray-700::placeholder text-white " placeholder="關鍵字..." />
              <i class="fas fa-search text-white text-xl"></i>
            </div>
          </div>
          <div></div>
        </section>
        <section>products</section>
      </main>
    </>
  );
}
