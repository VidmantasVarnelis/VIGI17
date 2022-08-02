import React, { useState } from 'react';
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
const Register = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    lastname: '',
  });

  const [username, setUsername] = useState('');

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8080/api/register', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onInputChange = (event, property) => {
    setFormValues((prevState) => ({
      ...prevState,
      [property]: event.target.value,
    }));
  };

  return (
    <div>
      <FormContainer onSubmit={onFormSubmit}>
        <StyledForm>
          <Input
            type='text'
            placeholder='Enter Username'
            required
            onChange={(event) =>
              setFormValues((prevState) => ({
                ...prevState,
                username: event.target.value,
              }))
            }
            // onChange={(event) => setUsername(event.target.value)}
            // onChange={(event) => onInputChange(event, 'username')}
            value={formValues.username}
          />
          <Input
            type='email'
            placeholder='Enter Email'
            required
            // onChange={(event) => onInputChange(event, 'email')}
            onChange={(event) =>
              setFormValues((prevState) => ({
                ...prevState,
                email: event.target.value,
              }))
            }
            value={formValues.email}
          />
          <Input
            type='password'
            placeholder='Enter Password'
            required
            // onChange={(event) => onInputChange(event, 'password')}
            onChange={(event) =>
              setFormValues((prevState) => ({
                ...prevState,
                password: event.target.value,
              }))
            }
            value={formValues.password}
          />
          <Input
            type='text'
            placeholder='Enter Name'
            // onChange={(event) => onInputChange(event, 'name')}
            onChange={(event) =>
              setFormValues((prevState) => ({
                ...prevState,
                name: event.target.value,
              }))
            }
            value={formValues.name}
          />
          <Input
            type='text'
            placeholder='Enter Lastname'
            // onChange={(event) => onInputChange(event, 'lastname')}
            onChange={(event) =>
              setFormValues((prevState) => ({
                ...prevState,
                lastname: event.target.value,
              }))
            }
            value={formValues.lastname}
          />
          <Button title='Become a user!' />
        </StyledForm>
      </FormContainer>
    </div>
  );
};

export default Register;
