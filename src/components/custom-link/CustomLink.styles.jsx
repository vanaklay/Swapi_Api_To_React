import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LinkContainerStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 1rem;
    @media (max-width: 1200px) {
        justify-content: center;
    }
`;

export const LinkStyles = styled(Link)`
    font-size: 2rem;
    font-weight: bold;
`;