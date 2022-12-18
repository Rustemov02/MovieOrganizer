import React from 'react';
import { useSelector } from 'react-redux';

import './ListPage.css';

 function ListPage(){

    const saveList = useSelector(state => state.movies.saveNameOfList)

    return (
        <div className="list-page">
            <h1 className="list-page__title">My list</h1>
            <ul>
                {saveList.map( (item,index) => ( 
                    <li key={index}> {item}</li>
                ))}
            </ul>
        </div>
    ); 
}
  
export default ListPage;