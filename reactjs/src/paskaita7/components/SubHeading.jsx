import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  background-color: lightgrey;
  font-size: 3rem;
  color: ${({ color }) => color};
  ${({ primary }) => {
    if (primary) {
      return {
        fontWeight: 'bold',
        letterSpacing: '7px',
      };
    }
  }}
`;

const FlexContainer = styled.div`
  display: flex;
`;

const SubHeading = ({ color }) => {
  return (
    <FlexContainer>
      <StyledHeading color={color} primary>
        SubHeading - CodeAcademy
      </StyledHeading>
    </FlexContainer>
  );
};

export default SubHeading;
