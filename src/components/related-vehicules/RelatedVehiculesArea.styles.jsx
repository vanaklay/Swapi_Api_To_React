import styled from 'styled-components';

export const AreaContainer = styled.div`
    min-height: 20rem;
    background-color: white;
    border-radius: 3px;
    width: 30%;
    margin: 1rem;
    @media (max-width: 1200px) {
        width: 90%;
    }
`;

export const AreaHeader = styled.div`
    padding-top: 2rem;
    height: 25%;
    border-bottom: 1px solid lightgray;
    text-align: center;
    
`;