import React from "react";
import productHeader from "../../images/product-header.png";

export default function Product() {
  return (
    <>
      <header className="relative w-full h-4/5 overflow-hidden">
        <div className="text-white absolute">
          <p className="text-h5">
            Practice Hard, Play Strong, Pain Is Glory. ( Only For Women )
          </p>
          <h1 className="text-h1">
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
        <section>filter</section>
        <section>products</section>
      </main>
    </>
  );
}
