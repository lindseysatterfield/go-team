import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addPlayer, updatePlayer } from '../helpers/data/playerData';

const PlayerForm = ({
  user,
  formTitle,
  setPlayers,
  imageUrl,
  name,
  position,
  firebaseKey
}) => {
  const [player, setPlayer] = useState({
    name: name || '',
    position: position || '',
    imageUrl: imageUrl || '',
    uid: user.uid,
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(player, firebaseKey, user.uid).then((response) => setPlayers(response));
      console.warn(true);
    } else {
      addPlayer(player, user.uid).then((playerArray) => setPlayers(playerArray));
    }
  };

  return (
    <>
      <div className='player-form'>
        <form
          id='AddPlayerForm'
          autoComplete='off'
          onSubmit={handleSubmit}
          >
          <h2>{formTitle}</h2>
          <label>Name:</label>
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={player.name}
            onChange={handleInputChange}
          >
          </input>

          <label>Position:</label>
          <input
            name='position'
            type='text'
            placeholder='Position'
            value={player.position}
            onChange={handleInputChange}
          >
          </input>

          <label>Image URL:</label>
          <input
            name='imageUrl'
            type='url'
            placeholder='Image URL'
            value={player.imageUrl}
            onChange={handleInputChange}
          >
          </input>
          <button className='mt-5' type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

PlayerForm.propTypes = {
  user: PropTypes.any,
  formTitle: PropTypes.string.isRequired,
  setPlayers: PropTypes.func,
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default PlayerForm;
