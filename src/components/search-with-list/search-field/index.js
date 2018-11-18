import React from 'react';

const SearchField = props => (
    <div className="search-field">
        Search <input type="text" className="title-input" onChange={(e) => props.getSearchValue(e.target.value)} />
    </div>
);

export default SearchField;