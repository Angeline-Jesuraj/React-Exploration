// src/components/UserComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../actions';
const UserComponent = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <h2>User Information</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <p>User ID: {user.id}</p>
          <p>User Name: {user.name}</p>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
