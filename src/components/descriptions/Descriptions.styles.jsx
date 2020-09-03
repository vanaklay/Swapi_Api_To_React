import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DescriptionContainer = styled.div`
    height: 24em;
    display: flex;
    margin: 1rem;
`;

export const DetailsContainer = styled.div`
    background-color: white;
    padding-left: 1rem;
    margin-top: 1rem;
    width: 68%;
    height: 100%;
    border-radius: 3px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`;

export const ImageContainer = styled.img`
    margin-top: 1rem;
    background-size: cover;
    width: 32%;
    height: 100%;
    border-radius: 3px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

export const NameStyles = styled.p`
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: bold;
`;

export const PlanetLink = styled(Link)`
    cursor: pointer;
    text-decoration: none
`;