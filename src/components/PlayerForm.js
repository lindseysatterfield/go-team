import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addPlayer } from '../helpers/data/playerData';

const PlayerForm = ({ user }) => {
  const [player, setPlayer] = useState({
    name: '',
    position: '',
    imageUrl: '',
    uid: user.uid
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(player);
  };

  return (
    <>
      <div className='player-form'>
        <form
          id='AddPlayerForm'
          autoComplete='off'
          onSubmit={handleSubmit}
          >
          <h2>Player Form</h2>
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
  user: PropTypes.any
};

export default PlayerForm;
