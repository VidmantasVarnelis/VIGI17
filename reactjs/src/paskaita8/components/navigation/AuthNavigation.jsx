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

const StyledLink = styled(Link)`
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
    <NavigationContainer>
      <StyledLink to='/login' $divider={location.pathname === '/login'}>
        Login
      </StyledLink>
      <StyledLink to='/register' $divider={location.pathname === '/register'}>
        Become a user!
      </StyledLink>
    </NavigationContainer>
  );
};

export default AuthNavigation;
