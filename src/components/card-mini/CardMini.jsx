import React from 'react';

import { Li, DivImageContainer, ImageContainer, DivTitleContainer, TitleStyles } from './CardMini.styles';

import { requireImage } from '../../utils/useRequireImage';

const CardMini = ({ item }) => {
    const category = item.url.split('/')[4]; 
    const id = item.url.split('/')[5];
    const imageUrl = category + '/' + id + '.jpg';
    return (
        <Li>
            <DivImageContainer>
                <ImageContainer src={requireImage(imageUrl)} alt={imageUrl} />
            </DivImageContainer>
            <DivTitleContainer>
                <TitleStyles to={`/${category}/${id}`} >
                    { item.name ? item.name : item.title }
                </TitleStyles>
            </DivTitleContainer>
        </Li>
    );
};

export default CardMini;