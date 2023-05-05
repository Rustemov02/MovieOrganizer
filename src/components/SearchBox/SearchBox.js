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

    const getMovies = () => {
        if (value.trim() === '') {
            console.log('empty')
        } else {
            dispatch(fetchMovies(value))
        }
        setValue('')
    }

    return (
        <div className="search-box" >
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
                onClick={getMovies}
                type="submit"
                className="search-box__form-submit"
            >
                Search
            </button>


        </div>
    );
}

export default SearchBox;