import React from 'react';
import { Link } from 'react-router-dom';
import ArticleHeader from '../../images/tabata/1.jpeg';
import ArticleNav from './components/ArticleNav';
import ArticleCardRight from './components/ArticleCardRight';
import ArticleCardLeft from './components/ArticleCardLeft';
function Article() {
    return (
        <>
            <div className="">
                <img
                    className="object-cover w-full h-44 xs:h-64 sm:h-72 md:h-96 lg:h-112"
                    src={ArticleHeader}
                    alt=""
                />
                <ArticleNav />

                <main className="bg-gray-800">
                    <article className="w-full md:w-3/4 xs:m-auto">
                        {/* <div className="w-1/4 h-60"></div> */}
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-center lg:justify-end mt-4"
                        >
                            <ArticleCardRight />
                        </Link>
                    </article>

                    <article className="w-full md:w-3/4 m-auto">
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-center lg:justify-start mt-4"
                        >
                            <ArticleCardLeft />
                        </Link>
                        {/* <div className="w-1/4 h-60"></div> */}
                    </article>

                    <article className="w-full md:w-3/4 m-auto">
                        {/* <div className="w-1/4 h-60"></div> */}
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-center lg:justify-end mt-4"
                        >
                            <ArticleCardRight />
                        </Link>
                    </article>

                    <article className="w-full md:w-3/4 m-auto">
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-center lg:justify-start mt-4"
                        >
                            <ArticleCardLeft />
                        </Link>
                        {/* <div className="w-1/4 h-60"></div> */}
                    </article>

                    <article className="w-full md:w-3/4 m-auto">
                        {/* <div className="w-1/4 h-60"></div> */}
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-center lg:justify-end mt-4  mb-4"
                        >
                            <ArticleCardRight />
                        </Link>
                    </article>
                </main>
            </div>
        </>
    );
}

export default Article;
