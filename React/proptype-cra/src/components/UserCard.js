import React from 'react';
import PropTypes from 'prop-types';
import '../UserCard.css';

const UserCard = ({
  name,
  age,
  isActive,
  hobbies,
  address,
  status,
  nationality ,
}) => {
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <p><strong>Age: </strong>{age}</p>
      <p><strong>Status:</strong> {isActive ? 'Active' : 'Inactive'}</p>
      <p><strong>Hobbies:</strong> {hobbies.join(', ')}</p>
      <p><strong>Address:</strong> {address.city}, {address.state}</p>
      <p><strong>Nationality:</strong> {nationality}</p>
      <p className={`status ${status}`}><strong>Status: </strong>{status}</p>
    </div>
  ); 
};


UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
  status: PropTypes.oneOf(['active', 'inactive', 'pending', 'suspended']).isRequired, 
  nationality: PropTypes.string, 
};

// Default Props
UserCard.defaultProps = {
  nationality: 'Indian', 
};

export default UserCard;
