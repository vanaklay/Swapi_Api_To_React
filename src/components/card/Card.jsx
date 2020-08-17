import React from 'react';
import { Redirect } from 'react-router-dom';

import { CardContainer, CardImageContainer } from './Card.styles';

const Card = ({ items }) => {
    const requireImage = imageUrl => {
      try {
        return require(`../../img/${imageUrl}`);
      } catch(err) {
        return require('../../img/default.jpg');
      }
    };
    const id = items.id.split('-')[0];
    const handleClick = (id) => {
      return <Redirect to={`/characters/${id}`} />;
    };
    return (
      <CardContainer onClick={() => handleClick(id)} >
        <CardImageContainer src={requireImage(items.imageUrl)} alt={items.name} />
        <h2>{items.name}</h2>
      </CardContainer>
    );
};

export default Card;