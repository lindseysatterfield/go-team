import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../../components/PlayerForm';

function AddPlayer({ user, setPlayers }) {
  return (
    <div>
      <PlayerForm
      user={user}
      formTitle='Add a Player'
      setPlayers={setPlayers}
      />
    </div>
  );
}

AddPlayer.propTypes = {
  user: PropTypes.any,
  setPlayers: PropTypes.func
};

export default AddPlayer;
