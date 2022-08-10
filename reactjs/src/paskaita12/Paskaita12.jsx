import React, { useState } from 'react';
import Button from './components/button/Button';

const Paskaita12 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <h1 data-testid='heading'>Count - {count}</h1>
      <Button title='Increment' onClick={handleIncrement} />
      <Button title='Decrement' onClick={handleDecrement} />
    </div>
  );
};

export default Paskaita12;
