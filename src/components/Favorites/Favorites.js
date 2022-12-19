import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveList, deleteNameFromList } from '../../Redux/movieSlice';
import { NavLink } from 'react-router-dom';
import './Favorites.css';


function Favorites() {

    const dispatch = useDispatch()
    const isActive = useSelector(state => state.movies.isActive)
    const saveName = useSelector(state => state.movies.listOfName
        .filter((item, index) => state.movies.listOfName.indexOf(item) === index))

    return (
        <div className="favorites">
            <ul className="favorites__list">
                {
                    saveName.map((element, index) => (
                        <li className='favorites__list_li' key={index}>{element} <i onClick={() => dispatch(deleteNameFromList({ index }))} className="fa-solid fa-circle-xmark"></i></li>
                    ))
                }
            </ul>
            <button disabled={true} type="button" onClick={() => {
                console.log('clicked !')
                dispatch(saveList(saveName))
                }} className={isActive ? 'favorites__save' : 'un-favorites'}><NavLink className='navLink__style' to='/list'>Save List</NavLink></button>
        </div>
    );
}

export default Favorites;
