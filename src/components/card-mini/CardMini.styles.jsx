import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageContainer = styled.img`
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, .1);
    display: block;
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
`;

export const DivImageContainer = styled.div`
    width: 2rem;
    vertical-align: middle;
    display: table-cell;
`;

export const DivTitleContainer = styled.div`
    display: table-cell;
    vertical-align: middle;
    padding-left: 1rem;
`;

export const TitleStyles = styled(Link)`
    text-decoration: none;
    line-height: 1rem;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 0;
    margin-bottom: 0;
    &:hover {
        color: black;
    }
`;

export const Li = styled.li`
  padding: 15px;
  color: #333;
  display: table;
`;
