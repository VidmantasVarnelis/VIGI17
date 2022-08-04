import React from 'react';
import { Link, useLocation, Outlet, Navigate } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 6rem;
  align-items: center;
`;

const SyledLink = styled(Link)`
  text-decoration: none;
  color: #333333;
  font-size: 1.25rem;
  position: relative;
  ${({ $divider }) => {
    if ($divider) {
      return `&:before{
        content: '';
        position: absolute;
        width: 70%;
        height: .25rem;
        border-radius: 1rem;
        background-color: #333333;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }`;
    }
  }}
`;

const AuthNavigation = () => {
  const location = useLocation();
  return (
    <>
      <NavigationContainer>
        <SyledLink to='/login' $divider={location.pathname === '/login'}>
          Login
        </SyledLink>
        <SyledLink to='/register' $divider={location.pathname === '/register'}>
          Become a user!
        </SyledLink>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

const HomeNavigation = () => {
  const location = useLocation();
  if (!localStorage.getItem('jwt'))
    return <Navigate to='/login' replace={true} />;
  return (
    <>
      <NavigationContainer>
        <SyledLink to='/' $divider={location.pathname === '/'}>
          Posts
        </SyledLink>
        <SyledLink to='/profile' $divider={location.pathname === '/profile'}>
          My Profile
        </SyledLink>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export { AuthNavigation, HomeNavigation };
