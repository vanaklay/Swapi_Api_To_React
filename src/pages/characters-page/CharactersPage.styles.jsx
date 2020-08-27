import styled from 'styled-components';

export const CharactersPageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const PagesContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;
