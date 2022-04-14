import React, {useState} from 'react';
import './Search.scss';

const Search = ({onSearchChange}) => {
    const [term, setTerm] = useState('');

    const onSearch = (evt) => {
        const term = evt.target.value.toLowerCase();
        setTerm(term)
        onSearchChange(term);
    };

    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="type to search"
            value={term}
            onChange={onSearch}
        />
    );
};

export default Search;

