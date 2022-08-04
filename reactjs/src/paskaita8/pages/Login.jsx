import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      if (data.status) {
        localStorage.setItem('jwt', data.token);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <FormContainer onSubmit={onFormSubmit}>
        <StyledForm>
          <Input
            type='text'
            placeholder='Enter Username'
            onChange={(event) =>
              setFormValues((prevState) => ({
                ...prevState,
                username: event.target.value,
              }))
            }
            required
          />
          <Input
            type='password'
            placeholder='Enter Password'
            onChange={(event) =>
              setFormValues((prevState) => ({
                ...prevState,
                password: event.target.value,
              }))
            }
            required
          />
          <Button title='Login' />
        </StyledForm>
      </FormContainer>
    </div>
  );
};

export default Login;
