import React from 'react';
import ArticleHeader from '../../images/11.jpeg';
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
                />
                <ArticleNav />

                <main className="bg-gray-800">
                    <article className="flex justify-center mt-4 w-3/4 m-auto">
                        <div className="w-1/4 h-60"></div>
                        {/* <Link to="/ArticleldCategory"> */}
                        <ArticleCardRight />
                        {/* </Link> */}
                    </article>

                    <article className="flex justify-center mt-4 w-3/4 m-auto">
                        {/* <Link to="/ArticleldCategory"> */}
                        <ArticleCardLeft />
                        {/* </Link> */}
                        <div className="w-1/4 h-60"></div>
                    </article>

                    <article className="flex justify-center mt-4 w-3/4 m-auto">
                        <div className="w-1/4 h-60"></div>
                        {/* <Link to="/ArticleldCategory"> */}
                        <ArticleCardRight />
                        {/* </Link> */}
                    </article>

                    <a href="#"></a>
                    <article className="flex justify-center mt-4 w-3/4 m-auto">
                        {/* <Link to="/ArticleldCategory"> */}
                        <ArticleCardLeft />
                        {/* </Link> */}
                        <div className="w-1/4 h-60"></div>
                    </article>

                    <a href="#">
                        <article className="flex justify-center mt-4 mb-4 w-3/4 m-auto">
                            <div className="w-1/4 h-60"></div>
                            {/* <Link to="/ArticleldCategory"> */}
                            <ArticleCardRight />
                            {/* </Link> */}
                        </article>
                    </a>
                </main>
            </div>
        </>
    );
}

export default Article;
