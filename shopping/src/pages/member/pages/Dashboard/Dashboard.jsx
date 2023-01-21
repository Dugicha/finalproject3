import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { parseJwt } from '../../../../helpers/jwt.helper';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const { sub } = parseJwt(token);

    fetchUser(sub);

    fetchUsers();
  }, []);


  const fetchUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      const data = await response.json();

      setUser(data);
    } catch (e) {
      console.error(e);
      setUser(null);
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await axios('/users');

      console.log(response);

      setUsers(response.data);
    } catch (e) {
      console.error(e);
      setUsers([]);
    }
  }

  const handleDelete = async (userId) => {
    try {
      await fetch(`http://localhost:8000/users/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      const newUsers = users.filter(item => item.id !== userId);

      setUsers(newUsers);
    } catch (e) {
      console.error(e);
      setUsers([]);
    }
  }

  return (
    <div className='dashboard'>
      <h3>Dashboard</h3>

      {user && (
        <div>{user.name}</div>
      )}

      {users.map(item => (
        <div key={item.id}>
          <span>#{item.id} {item.name}</span>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
