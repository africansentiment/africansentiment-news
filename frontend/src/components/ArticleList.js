import React, { useEffect, useState } from 'react';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            {articles.map(article => (
                <div key={article._id}>
                    <h2>{article.title}</h2>
                    <p>{article.summary}</p>
                    // Add more details as needed
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
