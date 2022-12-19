import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import { Route, Routes } from 'react-router-dom'


import './reset.css';
import './common.css';


function App() {

  return (
    <div> 
        <Routes>
          <Route  path='/' element={<MainPage/>} />
          <Route  path='/list' element={<ListPage/>} /> 
        </Routes>
    </div>
  )
}

export default App;
