import React from 'react';
import { withRouter } from 'react-router-dom';

import { CardContainer, CardImageContainer } from './Card.styles';

import { requireImage } from '../../utils/useRequireImage';

const Card = ({ item, history, match }) => {
    let id = '';
    let imageUrl = '';
    if (match.url === '/people') {
      id = item.url.split('/')[5];
      imageUrl = 'people/' + id + '.jpg';
    } else if (match.url === '/planets') {
      id = item.url.split('/')[5];
      imageUrl = 'planets/' + id + '.jpg';
    } else if (match.url === '/films') {
      id = item.url.split('/')[5];
      imageUrl = 'films/' + id + '.jpg';
    } 
    const handleClick = (id) => {

      history.push(`${match.path}${id}`);
    };
    return (
        <CardContainer onClick={() => handleClick(id)} >
          <CardImageContainer src={requireImage(imageUrl)} alt={item.name} />
          <h2>{item.name ? item.name : item.title}</h2>
        </CardContainer>
    );
};

export default withRouter(Card);