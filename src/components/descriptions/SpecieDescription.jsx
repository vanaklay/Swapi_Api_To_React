import React from 'react';
import { DescriptionContainer, DetailsContainer, ImageContainer, NameStyles } from './Descriptions.styles';
import { requireImage } from '../../utils/useRequireImage';

const SpecieDescription = ({ specie, imageUrl }) => {
    return (
        <DescriptionContainer>
            <ImageContainer src={requireImage(imageUrl)} alt={imageUrl} />
            <DetailsContainer>
                <NameStyles>{specie.name}</NameStyles>
                <p>Classification : {specie.classification}</p>
                <p>Désignation : {specie.designation}</p>
                <p>Taille moyenne : {specie.average_height} cm</p>
                <p>Types de peaux : {specie.skin_colors}</p>
                <p>Couleurs des cheveux : {specie.hair_colors}</p>
                <p>Couleurs des yeux : {specie.eye_colors}</p>
                <p>Langues : {specie.language}</p>
            </DetailsContainer>
        </DescriptionContainer>
    );
};

export default SpecieDescription;