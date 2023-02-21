import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { LandingPage, Home, Form, Detail, Error } from './views';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();
  
  
  
  return (
      <div>
        {location.pathname !== '/' && <NavBar/>}
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
