import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './ListPage.css';

 function ListPage(){

    const saveList = useSelector(state => state.movies.listOfName)
 
    return (
        <div className="list-page">
            <h1 className="list-page__title">My list</h1>
            <ul>
                {saveList.map( (item,index) => ( 
                    <li key={index}> {item}</li>
                ))}
            </ul>
                
                <button className='list__button'> <NavLink to='/' className='navLink'> Main page</NavLink></button>
        </div>
    ); 
}
  
export default ListPage;