import styled from 'styled-components';

export const FilmDetailContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const AreasContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 769px) and (max-width: 1200px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;