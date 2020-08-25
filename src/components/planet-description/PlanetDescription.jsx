import React from 'react';
import { DescriptionContainer, DetailsContainer, ImageContainer, NameStyles } from './planetDescription.styles';
import { requireImage } from '../../utils/useRequireImage';

const PlanetDescription = ({ planet, imageUrl }) => {
    return (
        <DescriptionContainer>
            <ImageContainer src={requireImage(imageUrl)} alt={imageUrl} />
            <DetailsContainer>
                <NameStyles>{planet.name}</NameStyles>
                <p>Période de rotation : {planet.rotation_period}</p>
                <p>Période orbitale : {planet.orbital_period}</p>
                <p>Diamètre : {planet.diameter} kg</p>
                <p>Climat : {planet.climate}</p>
                <p>Gravité : {planet.gravity}</p>
                <p>Terrain : {planet.terrain}</p>
                <p>Surface de l'eau : {planet.surface_water}</p>
                <p>Population : {planet.population}</p>
            </DetailsContainer>
        </DescriptionContainer>
    );
};

export default PlanetDescription;