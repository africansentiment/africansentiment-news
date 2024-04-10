import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
    const [article, setArticle] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/articles/${id}`)
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div>
                <h3>Summary</h3>
                <p>{article.summary}</p>
            </div>
            <div>
                <h3>Details</h3>
                <p>{article.text}</p>
            </div>
            {/* Add more fields as needed */}
        </div>
    );
};

export default Article;
