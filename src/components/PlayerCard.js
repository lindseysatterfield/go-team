import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function PlayerCard({
  imageUrl,
  name,
  position
}) {
  return (
    <Card body className="card">
      <CardImg top width="100%" className="player-img" src={imageUrl} alt="Image of Mighty Duck player" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{position}</CardSubtitle>
      </CardBody>
    </Card>
  );
}

PlayerCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
};

export default PlayerCard;
