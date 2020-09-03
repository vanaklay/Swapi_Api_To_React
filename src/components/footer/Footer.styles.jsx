import styled from 'styled-components';

export const FooterContainerStyles = styled.div`
    margin: 1rem;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-size: 1rem;
    font-weight: 700;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;