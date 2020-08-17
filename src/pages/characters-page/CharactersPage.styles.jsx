import styled from 'styled-components';

export const CharactersPageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const PreviewCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    text-align: center;
    @media (min-width: 769px) and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;

    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;