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
                    className="h-112 object-cover w-full"
                    src={ArticleHeader}
                    alt=""
                />
                <ArticleNav />

                <main className="bg-gray-800">
                    <article className="">
                        {/* <div className="w-1/4 h-60"></div> */}
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-end mt-4 w-3/4 m-auto"
                        >
                            <ArticleCardRight />
                        </Link>
                    </article>

                    <article className="">
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-start mt-4 w-3/4 m-auto"
                        >
                            <ArticleCardLeft />
                        </Link>
                        {/* <div className="w-1/4 h-60"></div> */}
                    </article>

                    <article className="">
                        {/* <div className="w-1/4 h-60"></div> */}
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-end mt-4 w-3/4 m-auto"
                        >
                            <ArticleCardRight />
                        </Link>
                    </article>

                    <article className="">
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-start mt-4 w-3/4 m-auto"
                        >
                            <ArticleCardLeft />
                        </Link>
                        {/* <div className="w-1/4 h-60"></div> */}
                    </article>

                    <article className="">
                        {/* <div className="w-1/4 h-60"></div> */}
                        <Link
                            to="/ArticleCategory"
                            className="flex justify-end mt-4 w-3/4 m-auto mb-4"
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
