import React from 'react';
import PropTypes from 'prop-types';
import formatRelative from 'date-fns/formatRelative';

function User({ userName, highestScore, updatedAt }) {
  return (
    <tr>
      <td>{userName}</td>
      <td>{highestScore}</td>
      <td>{formatRelative(new Date(updatedAt), new Date())}</td>
    </tr>
  );
}

User.defaultProps = {};
User.propTypes = {
  userName: PropTypes.string.isRequired,
  highestScore: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
};
export default User;
