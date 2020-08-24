import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyles = css`
    box-sizing: border-box;
    border-style: solid;
    border-width: 1px;
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    background-color: white;
    color: black;
    :hover {
        background-color: black;
        color: white;
    }
`;

export const ButtonPageStyles = styled.button`
    ${ButtonStyles}
`;

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export const PaginationLink = styled(Link)`
    text-decoration: none;
    ${ButtonStyles}

    @media (max-width: 768px) {
        display: none;
    }
`;