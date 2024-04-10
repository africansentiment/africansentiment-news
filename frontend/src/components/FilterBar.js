import React from 'react';

const FilterBar = ({ onFilterChange }) => {
    return (
        <div>
            <label>
                Country:
                <input type="text" onChange={e => onFilterChange(e.target.value)} />
            </label>
            {/* Add more filters as needed */}
        </div>
    );
};

export default FilterBar;
