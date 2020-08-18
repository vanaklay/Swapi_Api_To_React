import React from 'react';
import { withRouter } from 'react-router-dom';

import { CardContainer, CardImageContainer } from './Card.styles';

import { requireImage } from '../../utils/useRequireImage';

const Card = ({ items, history, match }) => {
    const id = items.id.split('-')[0];
    const handleClick = (id) => {
      history.push(`${match.path}${id}`);
    };
    return (
      <CardContainer onClick={() => handleClick(id)} >
        <CardImageContainer src={requireImage(items.imageUrl)} alt={items.name} />
        <h2>{items.name}</h2>
      </CardContainer>
    );
};

export default withRouter(Card);