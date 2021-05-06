import React, { useState } from 'react';

export default function PlayerForm() {
  const [player, setPlayer] = useState({
    name: '',
    position: '',
    imageUrl: ''
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <div className='player-form'>
        <form
          id='addPlayerForm'
          autoComplete='off'
          onSubmit={handleInputChange}
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
          <button className='mt-5' type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}
