import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { deletePlayer } from '../helpers/data/playerData';
import PlayerForm from './PlayerForm';

function PlayerCard({
  firebaseKey,
  imageUrl,
  name,
  position,
  setPlayers,
  user
}) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey, user.uid).then((playerArray) => setPlayers(playerArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('no');
    }
  };

  return (
    <Card body className="card">
      <CardImg top width="100%" className="player-img" src={imageUrl} alt="Image of Mighty Duck player" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{position}</CardSubtitle>
        <div className="buttons">
          <Button color="danger" onClick={() => handleClick('delete')}>Delete</Button>
          <Button color="info" onClick={() => handleClick('edit')}>Edit</Button>
          {editing && <PlayerForm
            formTitle='Edit Player'
            setPlayers={setPlayers}
            user={user}
            firebaseKey={firebaseKey}
            imageUrl={imageUrl}
            name={name}
            position={position}
          />}
        </div>
      </CardBody>
    </Card>
  );
}

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};

export default PlayerCard;
