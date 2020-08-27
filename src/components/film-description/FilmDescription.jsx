import React from 'react';

import { DescriptionContainer, DetailsContainer, ImageContainer, NameStyles } from './FilmDescription.styles';
import { requireImage } from '../../utils/useRequireImage';

const FilmDescription = ({ imageUrl, film }) => {
    return (
        <DescriptionContainer>
            <ImageContainer src={requireImage(imageUrl)} alt={imageUrl} />
            <DetailsContainer>
                <NameStyles>{film.title}</NameStyles>
                <p>Episode : {film.episode_id}</p>
                <p>Directeur : {film.director}</p>
                <p>Producteur : {film.producer}</p>
                <p>Date de sortie : {film.release_date}</p>
            </DetailsContainer>
        </DescriptionContainer>
    );
};

export default FilmDescription;