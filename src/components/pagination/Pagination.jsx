import React, { useState, useEffect } from 'react';

import { ButtonPageStyles, 
        PaginationContainer, 
        PaginationLink, 
        Container } from './Pagination.styles';

import CustomLink from '../custom-link/CustomLink';

const Pagination = ({ pages, handlePage, previous, next, currentPage }) => {
    const [newPrevious, setPrevious] = useState('');
    const [newNext, setNext] = useState('');
    useEffect(()=> {
        if (previous) {
            setPrevious(previous.substr(-1))
        }
        if (next) {
            setNext(next.substr(-1))
        }
    },[next, previous, currentPage]);
    const getPage = (page, currentPage) => {
        if (page === currentPage) {
            return true;
        } else {
            return false;
        }
    };
    return (
        <Container>
            <CustomLink home='Accueil' />
            <PaginationContainer >
                { previous && <PaginationLink onClick={() => handlePage(newPrevious)}>Précédent</PaginationLink> }
                { pages.map(page => (
                    <ButtonPageStyles 
                        key={page} 
                        onClick={() => handlePage(page)}
                        active={getPage(page, currentPage)}
                    >{page}</ButtonPageStyles>
                    )) }
                {next && <PaginationLink onClick={() => handlePage(newNext)}>Suivant</PaginationLink>}
            </PaginationContainer>
        </Container>
    );
};

export default Pagination;