import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 20rem;
  min-height: 20rem;
  background-color: #fafafa;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all 200ms ease-in-out;
  cursor: default;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 10rem;
  border-radius: 0.25rem;
`;

const CardContentContainer = styled.div`
  padding: 0.5rem 0.5rem 2rem;
`;

const CardHeading = styled.h1`
  color: ${({ headingColor }) => headingColor};
`;

const CardDescription = styled.p`
  color: #555555;
`;

const Card = ({ title, headingColor }) => {
  return (
    <CardContainer>
      <CardImage src='https://picsum.photos/600' />
      <CardContentContainer>
        <CardHeading headingColor={headingColor}>{title}</CardHeading>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At error,
          incidunt laboriosam tempore temporibus enim laborum ipsum, praesentium
          eligendi ducimus ab provident facere saepe nesciunt, molestiae cum
          quia sint corporis.
        </CardDescription>
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
