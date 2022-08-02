import React from 'react';
import styled from 'styled-components';
import Button from '../components/button/Button';
import Input from '../components/input/Input';

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0 1rem;
  margin-top: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
  input {
    margin-bottom: 0.5rem;
  }
`;

const Login = () => {
  return (
    <div>
      <FormContainer>
        <StyledForm>
          <Input type='text' placeholder='Enter Username' />
          <Input type='password' placeholder='Enter Password' />
          <Button title='Login' />
        </StyledForm>
      </FormContainer>
    </div>
  );
};

export default Login;
