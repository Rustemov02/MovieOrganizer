import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addNameToList } from '../../Redux/movieSlice';

// import './MovieItem.css'; 
import './Movies.css';

function Movies() {
    const data = useSelector(state => state.movies.data)
    const dispatch = useDispatch()
    return (
        <div>

            {data ? <ul className="movies">
                {data.map((item) => (
                    <li className='movies__item' key={item.imdbID}>
                        <img className="movie-item__poster" src={item.Poster} alt={item.Title} />
                        <div className="movie-item__info">
                            <h3 className="movie-item__title">{item.Title}&nbsp;({item.Year})</h3>
                            <button onClick={() => { 
                                dispatch(addNameToList(item.Title))
                            }} type="button" className="movie-item__add-button">Add to the list</button>
                        </div>
                    </li>
                ))}
            </ul> : <div><p>Not Found ! Please enter the full name of the movie </p></div>}
           
        </div>
    );
}

export default Movies;







// {this.state.movies.map((movie) => (
//     <li className="movies__item" key={movie.imdbID}>
//         <MovieItem {...movie} />
//     </li>
// ))}