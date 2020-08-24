import React from 'react';
import { withRouter } from 'react-router-dom';

import { CardContainer, CardImageContainer } from './Card.styles';

import { requireImage } from '../../utils/useRequireImage';

const Card = ({ item, history, match }) => {
    console.log(item);
    console.log(match);
    const id = item.url.split('/')[5];
    const imageUrl = id + '.jpg';
    const handleClick = (id) => {
      history.push(`${match.path}${id}`);
    };
    return (
        <CardContainer onClick={() => handleClick(id)} >
          <CardImageContainer src={requireImage(imageUrl)} alt={item.name} />
          <h2>{item.name}</h2>
        </CardContainer>
    );
};

export default withRouter(Card);