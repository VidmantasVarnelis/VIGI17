import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';
import Card from '../components/card/Card';

const Home = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        setUserData(data);
      } catch {
        console.log('error');
      }
    };
    fetchData();
  }, []);

  const onCardClick = (id) => {
    navigate(`/profile/${id}`);
  };

  const onCardDelete = (id) => {
    setUserData((prevState) => prevState.filter((data) => data.id !== id));
    // Siusti uzklausa delete metodu i serveri ir istrinti su tuo id irasa
    // poto setUserData(reponseData)
  };

  return (
    <div>
      <div className="user_container">
        {userData.map((data) => (
          <Card
            key={data.id}
            data={data}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
