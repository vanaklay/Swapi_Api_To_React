import React from 'react';

import { ButtonPageStyles, PaginationContainer, PaginationLink } from './Pagination.styles';

const Pagination = ({ pages, handlePage }) => {
    return (
        <PaginationContainer >
            <PaginationLink to='/'>Précédent</PaginationLink>
            { pages.map(page => (
                <ButtonPageStyles key={page} onClick={() => handlePage(page)}>{page}</ButtonPageStyles>
                )) }
            <PaginationLink to='/'>Suivant</PaginationLink>
        </PaginationContainer>
        
    );
};

export default Pagination;