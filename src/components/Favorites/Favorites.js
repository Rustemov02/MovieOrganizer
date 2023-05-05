import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveList, deleteNameFromList } from '../../Redux/movieSlice';
import { NavLink } from 'react-router-dom';
import './Favorites.css';


function Favorites() {

    const dispatch = useDispatch()
    const saveName = useSelector(state => state.movies.listOfName)

    return (
        <div className="favorites">
            <div className='favorites_header'>
                <p>Your Favorite Movies</p>
            </div>

            <div className='favorites_body'>
                <ul className="favorites__list">
                    {
                        saveName.map((element, index) => (
                            <li className='favorites__list_li' key={index}>{element} <i onClick={() => dispatch(deleteNameFromList(element))} className="fa-solid fa-circle-xmark"></i></li>
                        ))
                    }
                </ul>
                {saveName.length == 0 ? <p className='emptyBox'>favorite box is empty</p> : <button style={{background : "transparent",border : "none"}} type="button"><NavLink className='navLink__style' to='/list'>Save List</NavLink></button>}
           
            </div>
        </div>
    );
}

export default Favorites;
