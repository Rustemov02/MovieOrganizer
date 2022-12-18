import React, { Component } from 'react';
import './MovieItem.css';
import {useSelector ,useDispatch} from 'react-redux'


function MovieItem(){

    const data = useSelector(state => state.movies.data)
    return (
        <article className="movie-item">
            {/* <img className="movie-item__poster" src={poster} alt={title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                <button type="button" className="movie-item__add-button">Добавить в список</button>
            </div> */}
        {/* <button onClick={()=>{console.log}}>show Data</button> */}
        </article>
    );
}
 
export default MovieItem;