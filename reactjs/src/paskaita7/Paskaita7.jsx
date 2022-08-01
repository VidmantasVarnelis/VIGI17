import React from 'react';
import styled from 'styled-components';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import Card from './components/Card';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Paskaita7 = () => {
  return (
    <div>
      {/* <Heading />
      <SubHeading color='crimson' />
      <SubHeading color='blue' />
      <h1>CodeAcademy</h1>
      <h1>CodeAcademy2</h1>
      <button>Click Me</button> */}
      <CardContainer>
        <Card title='Card Heading' headingColor='red' />
      </CardContainer>
    </div>
  );
};

export default Paskaita7;
