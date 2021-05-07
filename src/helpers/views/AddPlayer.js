import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../../PlayerForm';

function AddPlayer({ user }) {
  return (
    <div>
      <PlayerForm user={user}/>
    </div>
  );
}

AddPlayer.propTypes = {
  user: PropTypes.any
};

export default AddPlayer;
