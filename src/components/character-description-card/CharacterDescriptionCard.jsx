import React from 'react';
import { DescriptionContainer, DetailsContainer, ImageContainer } from './CharacterDescriptionCard.styles';
import { requireImage } from '../../utils/useRequireImage';

const CharacterDescriptionCard = ({ character, imageUrl }) => {
    return (
        <DescriptionContainer>
            <ImageContainer src={requireImage(imageUrl)} alt={imageUrl} />
            <DetailsContainer>
                <p>{character.name.toUpperCase()}</p>
                <p>Année de naissance : {character.birth_year}</p>
                <p>Taille : {character.height}</p>
                <p>Poids : {character.mass} kg</p>
                <p>Genre : {character.gender}</p>
                <p>Couleur des yeux : {character.eye_color}</p>
                <p>Couleur de cheveux : {character.hair_color}</p>
                <p>Couleur de peau : {character.skin_color}</p>
                <p>Planète : {character.homeworld}</p>
            </DetailsContainer>
        </DescriptionContainer>
    );
};

export default CharacterDescriptionCard;