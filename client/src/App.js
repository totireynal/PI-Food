import React from 'react';
import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import { LandingPage, Home, Form, Detail, Error } from './views';
import NavBar from './components/NavBar/NavBar';

import { useState} from "react";




function App() {
  
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [isActive, setIsActive] = useState(1)
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] =useState(true)

    
  
  return (
      <div className>
        {location.pathname !=='/' && <NavBar setCurrentPage={setCurrentPage} setLoading={setLoading} setIsActive={setIsActive}/>}
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home 
                              currentPage={currentPage}
                              setCurrentPage={setCurrentPage}
                              isActive={isActive}
                              setIsActive={setIsActive}
                              loading={loading}
                              setLoading={setLoading}
                              refresh={refresh}
                              setRefresh={setRefresh}
                              />}/>
          <Route path='/form' element={<Form setRefresh={setRefresh}/>}/>
          <Route path='/detail/:detailId' element={<Detail setRefresh={setRefresh}/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
