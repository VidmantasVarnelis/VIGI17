import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './paskaita5.scss';
import Loader from './components/loader/Loader';

export default function Paskaita5() {
  const [isLoading, setIsLoading] = useState('idle');
  const [isLoading2, setIsLoading2] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setIsLoading2(true);
    const onFetchData = async () => {
      try {
        setIsLoading('pending');
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        setUserData(data);
        setIsLoading('fulfilled');
      } catch (err) {
        setIsLoading('rejected');
      }
    };
    onFetchData();
    // setTimeout(() => {
    //   setIsLoading('fulfilled');
    //   setIsLoading2(false);
    // }, 1500);
  }, []);

  const onClick = () => {
    console.log('Pauspaudziau 2');
  };

  const onClick2 = (value) => {
    console.log(value);
  };

  const postUserData = async () => {
    try {
      setIsLoading('pending');
      const resp = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(await resp.json());
      setIsLoading('fulfilled');
      alert('Success!');
    } catch (err) {
      setIsLoading('rejected');
      alert('Failed!');
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    postUserData();
  };
  return (
    <div>
      {isLoading === 'pending' ? (
        <Loader />
      ) : (
        <div>
          CodeAcademy Vigi 17
          {/* 1 budas */}
          <button
            onClick={() => {
              console.log('Paspaudziau');
            }}
          >
            Click me
          </button>
          {/* 2 budas */}
          <button onClick={onClick}>Click me2</button>
          {/* 3 budas */}
          {/* 
            Pavyzdys:
            document.querySelector('button').addEventListener('click', () => {})
          */}
          <button onClick={() => onClick2('Paspaudziau 3')}>Click 3</button>
          <div className="form_container">
            <form onSubmit={onFormSubmit}>
              <h1>Add User Data</h1>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(event) =>
                  setFormValues((prevState) => ({
                    ...prevState,
                    username: event.target.value,
                  }))
                }
                value={formValues.username}
                placeholder="Enter username"
              />
              <input
                type="text"
                name="password"
                id="password"
                onChange={(event) =>
                  setFormValues((prevState) => ({
                    ...prevState,
                    password: event.target.value,
                  }))
                }
                value={formValues.password}
                placeholder="Enter password"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="user_container">
            {userData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="user_card"
                  onMouseEnter={() => console.log('Mouse enter')}
                  onMouseLeave={() => console.log('Mouse leave')}
                >
                  <h1 onCopy={() => console.log('copy')}>
                    {data.name} - {data.username}
                  </h1>
                  <p>Website - {data.website}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
