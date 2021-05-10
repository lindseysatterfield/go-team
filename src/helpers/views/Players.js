import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../../components/PlayerCard';

function Players({ players, user, setPlayers }) {
  return (
    <>
      <h1 className="mt-3">
        <img src={user.profileImage} className="profile-img" alt="Image of user"></img>{user.fullName}&apos;s Team
      </h1>
      <div className="cards-container">
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
    </>
  );
}

Players.propTypes = {
  players: PropTypes.array,
  user: PropTypes.any,
  setPlayers: PropTypes.func.isRequired
};

export default Players;
