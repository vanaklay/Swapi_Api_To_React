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
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    margin: 0.5rem;
`;

export const CardImageContainer = styled.img`
    border-radius: 0.5rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 16rem;
    width: 100%;
`;