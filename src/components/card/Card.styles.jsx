import styled from 'styled-components';

export const CardContainer = styled.div`
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    :hover, :focus {
        transform: scale(1.05);
    }
    width: 16rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: white;
`;

export const CardImageContainer = styled.img`
    border-radius: 0.5rem;
    height: 16rem;
    width: 100%;
`;