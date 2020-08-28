import styled from 'styled-components';

export const Subtitle = styled.p`
    color: #333;
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0px;
    text-align: center;
`;

export const NothingRelated = styled.div`
    padding-top: 1rem;
    padding-left: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  margin: 1rem;
  width: 30%;
  background-color: white;
  max-height: 400px;
  @media (max-width: 1200px) {
        width: 90%;
    }
`;

export const Ul = styled.ul`
  list-style: none;
  border-radius: 2px;
  padding: 0px;
  margin: 0px;
`;


