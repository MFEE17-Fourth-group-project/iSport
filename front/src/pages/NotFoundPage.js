import React from 'react';
import ArticleHeader from '../images/—Pngtree—404 error interface theme design_4043818.png';
function NotFoundPage() {
    return (
        <>
            <img className="w-1/3 m-auto" src={ArticleHeader} alt="" />
            <h1 className="text-5xl  text-white text-center">
                抱歉!您所訪問的頁面不存在，請重新加載!
            </h1>
            <h5 className="text-xl  text-white text-center">
                <a
                    href="https://zh.pngtree.com/freepng/404-error-interface-theme-design_4043818.html"
                    target="_blank"
                    title="連結替代文字"
                    rel="noreferrer"
                >
                    圖片來自:pngtree.com
                </a>
            </h5>
        </>
    );
}

export default NotFoundPage;
