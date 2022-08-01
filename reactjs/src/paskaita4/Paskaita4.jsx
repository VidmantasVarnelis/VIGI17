import React, { useState, useEffect } from 'react';

export default function Paskaita4() {
  const [age, setAge] = useState(30);
  let variable = 5;
  const [varbiableState, setVariableState] = useState(variable);
  const [data, setData] = useState([]);
  const [dataTab, setDataTab] = useState('posts');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${dataTab}`
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [dataTab]);

  // useEffect(() => {
  //   console.log('Testing useEfect');
  //   alert('Pakeitem duomenis');
  // }, [age]);

  const onClick = () => {
    // setAge(15);
    setVariableState((prevState) => {
      return prevState + 1;
    });
    // setAge((prevState) => {
    //   return prevState + 1;
    // });
  };

  console.log(dataTab);
  console.log(data);
  return (
    <div>
      <h1>Functional Component</h1>
      <h2>{varbiableState}</h2>
      <h1>This is my age - {age}</h1>
      <button onClick={onClick}>Increaase Count</button>
      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => setDataTab('posts')}>Posts</button>
        <button onClick={() => setDataTab('comments')}>Comments</button>
        {data
          .filter((item) => item.id < 5)
          .map((item) => {
            return (
              <div key={item.id}>
                <h1>
                  {dataTab === 'posts'
                    ? item.title
                    : `Email - ${item.email}; Name - ${item.name} `}
                </h1>
                <p>{item.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
