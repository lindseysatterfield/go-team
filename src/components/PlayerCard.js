import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { deletePlayer } from '../helpers/data/playerData';

function PlayerCard({
  firebaseKey,
  imageUrl,
  name,
  position,
  setPlayers
}) {
  const handleClick = () => {
    deletePlayer(firebaseKey).then((playerArray) => setPlayers(playerArray));
    console.warn(setPlayers);
  };
  return (
    <Card body className="card">
      <CardImg top width="100%" className="player-img" src={imageUrl} alt="Image of Mighty Duck player" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{position}</CardSubtitle>
        <Button color="danger" onClick={handleClick}>Delete</Button>
      </CardBody>
    </Card>
  );
}

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  setPlayers: PropTypes.func
};

export default PlayerCard;
