import React from "react";

export default function Product() {
  return (
    <>
      <header>header</header>
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
