import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  ${({ bottomDivider }) => {
    if (bottomDivider) {
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
    <NavigationContainer>
      <SyledLink to='/login' bottomDivider={location.pathname === '/login'}>
        Login
      </SyledLink>
      <SyledLink
        to='/register'
        bottomDivider={location.pathname === '/register'}
      >
        Become a user!
      </SyledLink>
    </NavigationContainer>
  );
};

export default AuthNavigation;
