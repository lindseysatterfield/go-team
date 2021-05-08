import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../../components/PlayerCard';

function Players({ players, user }) {
  return (
    <div>
      {players.map((playerInfo) => (
        <PlayerCard key={playerInfo.firebaseKey}
        imageUrl={playerInfo.imageUrl}
        name={playerInfo.name}
        position={playerInfo.position}
        user={user}
        />
      ))}
    </div>
  );
}

Players.propTypes = {
  players: PropTypes.array,
  user: PropTypes.any
};

export default Players;
