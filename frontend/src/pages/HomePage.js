import React from 'react';
import Navbar from '../components/Navbar';
import ArticleList from '../components/ArticleList';
import FilterBar from '../components/FilterBar';
import SentimentGraph from '../components/SentimentGraph';
import CountryMap from '../components/CountryMap';

const HomePage = () => {
    const handleFilterChange = (filters) => {
        // Implement the logic to handle filter changes
        console.log('Filters changed:', filters);
    };

    const handleCountrySelect = (country) => {
        // Implement the logic to handle country selection
        console.log('Country selected:', country);
    };

    return (
        <div>
            <Navbar />
            <FilterBar onFilterChange={handleFilterChange} />
            <ArticleList />
            <SentimentGraph />
            <CountryMap onCountrySelect={handleCountrySelect} />
        </div>
    );
};

export default HomePage;
