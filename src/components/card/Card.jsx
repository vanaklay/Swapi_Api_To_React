import React from 'react';

import { CardContainer, CardImageContainer } from './Card.styles';

const Card = ({name }) => {
    return (
      <CardContainer>
          <CardImageContainer src={require(`../../img/default.jpg`)} alt={name} />
          <h2>{name}</h2>
      </CardContainer>
    );
};

export default Card;