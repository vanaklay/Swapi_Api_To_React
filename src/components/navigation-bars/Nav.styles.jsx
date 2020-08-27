import styled, { css } from 'styled-components';
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
    color: gold;
    font-size: 2rem;
    font-weight: bold;
    &:hover {
        color: white;
    }
`;

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
const activeButton = css`
    background-color: black;
    color: white;
`;
const getButtonStyles = props => {
    if (props.active) {
        return activeButton;
    }
}

export const ButtonPageStyles = styled.button`
    ${ButtonStyles}
    ${getButtonStyles}
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    @media (max-width: 1200px) {
        width: 100%;
        flex-direction: column;

    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    @media (max-width: 1200px) {
        justify-content: center;
    }
`;

export const PaginationLink = styled.button`
    ${ButtonStyles}
    

    @media (max-width: 768px) {
        display: none;
    }
`;
