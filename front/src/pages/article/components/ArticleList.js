import React, { useState } from 'react';
import Article from './Article';
function ArticleList(props) {
    const { article } = props;
    return (
        <div className="col-md-8 cart">
            {article.map((article, index) => (
                <Article
                    key={index}
                    article_name={article.article_name}
                    added_by={article.added_by}
                    upload_date={article.upload_date}
                    content={article.content}
                    category={article.category}
                />
            ))}
        </div>
    );
}

export default ArticleList;
