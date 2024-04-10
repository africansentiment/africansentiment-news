// apiService.js
const API_BASE_URL = 'http://localhost:5000';

export const fetchArticles = async () => {
    const response = await fetch(`${API_BASE_URL}/articles`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

export const fetchArticleById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

// Add more API functions as needed
