import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/button/Button';
import PostCard from '../components/card/PostCard';
import Modal from '../components/modal/Modal';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  console.log(posts);

  useEffect(() => {
    const fectPosts = async () => {
      try {
        const reponse = await fetch('http://localhost:8080/api/posts', {
          credentials: 'include',
        });
        const data = await reponse.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fectPosts();
  }, []);

  const onDeleteClick = async (id) => {
    try {
      const reponse = await fetch(`http://localhost:8080/api/posts/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await reponse.json();
      if (data.deletedCount > 0) {
        setPosts((prevState) => prevState.filter((post) => post._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const onFormSubmit = async (event, values) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      if (!data.error) {
        setPosts((prevState) => [...prevState, data]);
        closeModal();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {modal ? (
        <Modal onModalClose={closeModal} onFormSubmit={onFormSubmit} />
      ) : null}
      <ButtonContainer>
        <Button title='Add Posts' onClick={openModal} />
      </ButtonContainer>
      {posts.map((post) => {
        return (
          <PostCard
            key={post._id}
            title={post.title}
            src={post.url}
            description={post.desc}
            owner={post.owner}
            onDeleteClick={() => onDeleteClick(post._id)}
          />
        );
      })}
    </div>
  );
};

export default Home;
