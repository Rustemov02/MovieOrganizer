import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './ListPage.css';

 function ListPage(){

    const saveList = useSelector(state => state.movies.listOfName)
 
    return (
        <div className="list-page">
            <h1 className="list-page__title">My list</h1>
            <ul className='saveList'>
                {saveList.map( (item,index) => ( 
                    <li key={index} className='saveList_li'> {item}</li>
                ))}
            </ul>
            <button style={{background : "transparent",border : "none"}} type="button"><NavLink className='navLink__style' to='/'>Main Page</NavLink></button>
        </div>
    ); 
}
  
export default ListPage;