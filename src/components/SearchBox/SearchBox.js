import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../Redux/movieSlice';

import './SearchBox.css';

function SearchBox() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="search-box">
            <label className="search-box__form-label">
                Search movie by title :
                <input
                    value={value}
                    onChange={handleChange}
                    type="text"
                    className="search-box__form-input"
                />
            </label>
            <button
                onClick={() => { dispatch(fetchMovies(value)) }}
                type="submit"
                className="search-box__form-submit"
            >
                Search
            </button>


        </div>
    );
}

export default SearchBox;