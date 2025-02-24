// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './pages/Home/Home';
// eslint-disable-next-line no-unused-vars
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
};

export default App;