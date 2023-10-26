import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/search?query=${searchInput}`);
            if(response.data.success) {
                // handle search results
                console.log(response.data.searchResults);
            } else {
                console.log('Search failed');
            }
        } catch (error) {
            console.error('Error during search', error);
        }
    }

    return (
        <div>
            <input type="text" value={searchInput} onChange={handleInputChange} placeholder="Search..." />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;