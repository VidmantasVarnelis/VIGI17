import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthNavigation from './components/navigation/AuthNavigation';
import Login from './pages/Login';
import Register from './pages/Register';

const Paskaita8 = () => {
  return (
    <div>
      <AuthNavigation />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default Paskaita8;
