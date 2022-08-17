import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URI}user/${Number(id)}`
        );
        const data = await response.json();
        setUserData((prev) => ({
          ...prev,
          name: data.name,
          email: data.email,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [id]);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const user = {
      name: userData.name,
      email: userData.email,
    };
    if (userData.password) user.password = userData.password;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URI}user/${Number(id)}`,
        {
          method: 'PATCH',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (data.err) return alert('User is not updated!');
      navigate('/');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Link to='/'>Home</Link>
      <h2>Update User</h2>
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
        />
        <button type='submit'>Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
