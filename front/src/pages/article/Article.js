import React from 'react';
import ArticleHeader from '../../images/11.jpeg';
import ArticleCardRight from './components/ArticleCardRight';
import ArticleCardLeft from './components/ArticleCardLeft';
function Articles(props) {
  return (
    <>
      <div className="">
        <img className="h-112 object-cover w-full" src={ArticleHeader} />
        <nav className="bg-gray-900 flex justify-center">
          <div className="border-b-2 border-yellow-400 w-36 text-white text-center text-base py-5">
            所有文章
          </div>
          <a
            href="#/"
            className="border-b-2 border-transparent w-36 text-white text-center text-base py-5"
          >
            有氧運動
          </a>
          <a
            href="#/"
            className="border-b-2 border-transparent w-36 text-white text-center text-base py-5"
          >
            重量訓練
          </a>
          <a
            href="#/"
            className="border-b-2 border-transparent w-36 text-white text-center text-base py-5"
          >
            核心強化
          </a>
          <a
            href="#/"
            className="border-b-2 border-transparent w-36 text-white text-center text-base py-5"
          >
            健康料理
          </a>
        </nav>

        <main className="bg-gray-800">
          <article className="flex justify-center mt-4 w-3/4 m-auto">
            <div className="w-1/4 h-60"></div>
            <a href="#">
              <ArticleCardRight />
            </a>
          </article>

          <article className="flex justify-center mt-4 w-3/4 m-auto">
            <a href="#">
              <ArticleCardLeft />
            </a>
            <div className="w-1/4 h-60"></div>
          </article>

          <article className="flex justify-center mt-4 w-3/4 m-auto">
            <div className="w-1/4 h-60"></div>
            <a href="#">
              <ArticleCardRight />
            </a>
          </article>

          <a href="#"></a>
          <article className="flex justify-center mt-4 w-3/4 m-auto">
            <a href="#">
              <ArticleCardLeft />
            </a>
            <div className="w-1/4 h-60"></div>
          </article>

          <a href="#">
            <article className="flex justify-center mt-4 mb-4 w-3/4 m-auto">
              <div className="w-1/4 h-60"></div>
              <a href="#">
                <ArticleCardRight />
              </a>
            </article>
          </a>
        </main>
      </div>
    </>
  );
}

export default Articles;
