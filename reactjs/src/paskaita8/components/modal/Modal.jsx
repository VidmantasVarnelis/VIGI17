import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import Input from '../input/Input';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
  top: 0;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledModal = styled.div`
  background-color: white;
  min-height: 20rem;
  min-width: 20rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Modal = ({ onModalClose, onFormSubmit }) => {
  const [formValues, setFormValues] = useState({
    title: '',
    url: '',
    desc: '',
  });

  return (
    <Container>
      <ModalContainer>
        <StyledModal>
          <StyledForm onSubmit={(event) => onFormSubmit(event, formValues)}>
            <Input
              type='text'
              placeholder='Enter Title'
              onChange={(event) =>
                setFormValues((prevState) => ({
                  ...prevState,
                  title: event.target.value,
                }))
              }
              value={formValues.title}
              required
            />
            <Input
              type='text'
              placeholder='Enter Img src'
              onChange={(event) =>
                setFormValues((prevState) => ({
                  ...prevState,
                  url: event.target.value,
                }))
              }
              value={formValues.url}
              required
            />
            <Input
              type='text'
              placeholder='Enter Description'
              onChange={(event) =>
                setFormValues((prevState) => ({
                  ...prevState,
                  desc: event.target.value,
                }))
              }
              value={formValues.desc}
              required
            />
            <Button title='Add post!' />
            <Button title='Close Modal' onClick={onModalClose} />
          </StyledForm>
        </StyledModal>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
