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

export { StyledHeading, FlexContainer };
