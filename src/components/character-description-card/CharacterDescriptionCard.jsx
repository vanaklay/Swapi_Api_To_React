import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestPlanet } from '../../redux/planets/PlanetsActions';
import { DescriptionContainer, DetailsContainer, ImageContainer } from './CharacterDescriptionCard.styles';
import { requireImage } from '../../utils/useRequireImage';

const CharacterDescriptionCard = ({ character, imageUrl, onRequestPlanet, planet }) => {
    const idHomeworld = character.homeworld.split('/')[5];

    useEffect(() => {
        onRequestPlanet(idHomeworld);
    }, [idHomeworld, onRequestPlanet]);
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
                <p>Planète : {planet ? planet.name : null}</p>
            </DetailsContainer>
        </DescriptionContainer>
    );
};

const mapStateToProps = state => ({
    planet: state.planets.planet
});

const mapDispatchToProps = dispatch => ({
    onRequestPlanet: (idPlanet) => dispatch(requestPlanet(idPlanet)) 
});
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDescriptionCard);