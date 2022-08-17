import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App';

const Home = () => {
  const { isLoggedIn, setUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URI}users`
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  const onDelete = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URI}user/${id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await response.json();
      if (data.affectedRows > 0) {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onUserLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <div>
      <Link to='/login'>Login</Link>
      {isLoggedIn && <Link to='/create'>Create</Link>}
      {isLoggedIn && <button onClick={onUserLogout}>Logout</button>}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            {isLoggedIn && <th>Email</th>}
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, email, name }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                {isLoggedIn && <td>{email}</td>}
                <td>{name}</td>
                {isLoggedIn && (
                  <td>
                    <button onClick={() => onDelete(id)}>Delete</button>
                  </td>
                )}
                {isLoggedIn && (
                  <td>
                    <button>
                      <Link to={`/update/${id}`}>Update</Link>
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
