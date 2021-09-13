import React from 'react';
import ArticleItem from './ArticleItem';

function ArticleList(props) {
    const { Article } = props;

    return (
        <div className="col-md-8 cart">
            {Article.map((Article, index) => (
                <ArticleItem
                    key={index}
                    phone={Article.phone}
                    name={Article.name}
                    image={Article.image}
                    address={Article.address}
                />
            ))}
        </div>
    );
}

export default ArticleList;
