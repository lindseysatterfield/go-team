import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../../components/PlayerCard';

function Players({ players, user, setPlayers }) {
  return (
    <div>
      {players.map((playerInfo) => (
        <PlayerCard key={playerInfo.firebaseKey}
        firebaseKey={playerInfo.firebaseKey}
        imageUrl={playerInfo.imageUrl}
        name={playerInfo.name}
        position={playerInfo.position}
        user={user}
        setPlayers={setPlayers}
        />
      ))}
    </div>
  );
}

Players.propTypes = {
  players: PropTypes.array,
  user: PropTypes.any,
  setPlayers: PropTypes.func.isRequired
};

export default Players;
