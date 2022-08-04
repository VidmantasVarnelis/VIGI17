import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  AuthNavigation,
  HomeNavigation,
} from './components/navigation/AuthNavigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Paskaita8 = () => {
  return (
    <PageContainer>
      <Routes>
        <Route element={<HomeNavigation />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route element={<AuthNavigation />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </PageContainer>
  );
};

export default Paskaita8;
