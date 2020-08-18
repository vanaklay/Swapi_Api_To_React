import React from 'react';

import { DescriptionContainer, DetailsContainer, ImageContainer } from './CharacterDescriptionCard.styles';

import { requireImage } from '../../utils/useRequireImage';

const CharacterDescriptionCard = ({ people, imageUrl }) => {

    return (
        <DescriptionContainer>
            <ImageContainer src={requireImage(imageUrl)} alt={people.name} />
            <DetailsContainer>
                <p>{people.name.toUpperCase()}</p>
                <p>Année de naissance : {people.birth_year}</p>
                <p>Taille : {people.height}</p>
                <p>Poids : {people.mass} kg</p>
                <p>Genre : {people.gender}</p>
                <p>Couleur des yeux : {people.eye_color}</p>
                <p>Couleur de cheveux : {people.hair_color}</p>
                <p>Couleur de peau : {people.skin_color}</p>
                <p>Planète : {people.homeworld}</p>
            </DetailsContainer>
        </DescriptionContainer>
    );
};

export default CharacterDescriptionCard;