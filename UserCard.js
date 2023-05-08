import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

const UserCard = ({ user, onUserSelected }) => {
  const [selected, setSelected] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (selected) {
      onUserSelected(user);
    }
  }, [selected, onUserSelected, user]);

  const handleClick = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <div
      style={{
        backgroundColor: theme.cardBackground,
        color: theme.textColor,
        padding: '16px',
        margin: '8px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.address.street}, {user.address.city}, {user.address.zipcode}</p>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onUserSelected: PropTypes.func.isRequired,
};

export default UserCard;
