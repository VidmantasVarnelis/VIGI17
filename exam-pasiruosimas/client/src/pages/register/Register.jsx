import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URI}register`,
        {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (data.err) return alert('User is not created!');
      navigate('/');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Link to='/'>Home</Link>
      <h2>Create User</h2>
      <form onSubmit={onFormSubmit}>
        <input
          type='email'
          name='email'
          id='email'
          onChange={(event) =>
            setUserData((prev) => ({ ...prev, email: event.target.value }))
          }
          value={userData.email}
          required
        />
        <input
          type='text'
          name='name'
          id='name'
          onChange={(event) =>
            setUserData((prev) => ({ ...prev, name: event.target.value }))
          }
          value={userData.name}
          required
        />
        <input
          type='password'
          name='password'
          id='password'
          value={userData.password}
          onChange={(event) =>
            setUserData((prev) => ({ ...prev, password: event.target.value }))
          }
          required
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
