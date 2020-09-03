import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { requestAllSpecies } from '../../redux/species/SpeciesActions';

import Spinner from '../../components/spinner/Spinner';
import NavPages from '../../components/navigation-bars/NavPages';
import CardPreview from '../../components/card-preview/CardPreview';

import { SpeciesPageContainer, Container } from './SpeciesPage.styles';

const SpeciesPage = ({ onRequestSpecies, species }) => {
    const [page, setPage] = useState(1);
    const pages = [1, 2, 3, 4];
    useEffect(() => {
        onRequestSpecies(page);
    }, [onRequestSpecies, page]);

    return (
        <Container>
            <NavPages 
                pages={pages} 
                handlePage={(event) => setPage(event)}
                previous={species && species.previous }
                next={species && species.next}
                currentPage={page}
                />
            <SpeciesPageContainer>
                { species ? (
                    <CardPreview items={species.results} /> 
                ) : (
                    <Spinner />
                ) }
            </SpeciesPageContainer>
        </Container>
    );
};

const mapStateToProps = state => ({
    species: state.species.all
});

const mapDispatchToProps = dispatch => ({
    onRequestSpecies: (page = 1) => dispatch(requestAllSpecies(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(SpeciesPage);