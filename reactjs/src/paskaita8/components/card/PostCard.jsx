import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.75rem;
`;
const PostContainer = styled.div`
  display: flex;
  width: 50rem;
  height: 20rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const ContentContainer = styled.div`
  position: relative;
  flex: 0.5;
  padding: 1rem;
`;
const StyledImage = styled.img`
  flex: 0.5;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;
const StyledTitle = styled.h1`
  margin-bottom: 0.5rem;
`;
const StyledDescription = styled.p`
  color: #444444;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 1rem;
  border: none;
  background-color: transparent;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const PostCard = ({ title, src, description, onDeleteClick, owner }) => {
  return (
    <Container>
      <PostContainer>
        <StyledImage src={src} alt='' />
        <ContentContainer>
          <StyledButton onClick={onDeleteClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='329pt'
              viewBox='0 0 329.26933 329'
              width='329pt'
            >
              <path d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0' />
            </svg>
          </StyledButton>
          <p>Created By - {owner.username}</p>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </ContentContainer>
      </PostContainer>
    </Container>
  );
};

export default PostCard;
