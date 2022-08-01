import React from 'react';

const Card = ({ onCardClick, data, onCardDelete }) => {
  return (
    <div>
      <div className="user_card" onClick={() => onCardClick(data.id)}>
        <h1>
          {data.name} - {data.username}
        </h1>
        <p>Website - {data.website}</p>
      </div>
      <button onClick={() => onCardDelete(data.id)}>Delete</button>
    </div>
  );
};

export default Card;
