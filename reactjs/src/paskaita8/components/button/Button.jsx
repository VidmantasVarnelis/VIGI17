import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4b4b4b;
  border: none;
  border-radius: 0.25rem;
  color: white;
  font-size: 1rem;
`;

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;
