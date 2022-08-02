import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5rem 0.5rem;
  border: 1px solid #b9b9b9;
  font-size: 1rem;
  border-radius: 0.25rem;
`;

const Input = ({ onChange, value, type, placeholder, required }) => {
  return (
    <StyledInput
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
