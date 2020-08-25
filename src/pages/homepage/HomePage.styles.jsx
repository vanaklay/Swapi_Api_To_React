import styled from 'styled-components';

export const HomePageContainerStyles = styled.div`
    background-color: red;
    height: 70vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (min-width: 769px) and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;

    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const CategoryCardStyles = styled.div`
    height: 10rem;
    width: 10rem;
`;

