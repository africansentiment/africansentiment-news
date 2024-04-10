import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ArticleContext = createContext();

// Define the provider component
export const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/articles')
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });
    }, []);

    return (
        <ArticleContext.Provider value={{ articles, loading }}>
            {children}
        </ArticleContext.Provider>
    );
};
