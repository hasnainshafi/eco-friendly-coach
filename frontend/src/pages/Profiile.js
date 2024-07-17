// frontend/src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/profile', {
          headers: { Authorization: localStorage.getItem('token') },
        });
        setUser(res.data);
      } catch (error) {
        alert('Failed to fetch profile');
      }
    };

    fetchUser();
  }, []);

  return user ? <div>Welcome, {user.username}</div> : <div>Loading...</div>;
};

export default Profile;
