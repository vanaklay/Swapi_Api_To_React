import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LinkStyles = styled(Link)`
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    margin-top: 2rem;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    border-radius: 3px;
    padding: 1rem;
    &:hover {
        background-color: gold;
        color: black;
    }
`;