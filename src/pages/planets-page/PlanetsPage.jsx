import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { requestAllPlanetsPerPage } from '../../redux/planets/PlanetsActions';

import Spinner from '../../components/spinner/Spinner';
import NavPages from '../../components/navigation-bars/NavPages';
import CardPreview from '../../components/card-preview/CardPreview';

import { PlanetsPageContainer, Container } from './PlanetsPage.styles';


const PlanetsPage = ({ onRequestPlanets, planets }) => {
    const [page, setPage] = useState(1);
    const pages = [1, 2, 3, 4, 5, 6];
    useEffect(() => {
        onRequestPlanets(page);
    }, [onRequestPlanets, page]);

    return (
        <Container>
            <NavPages 
                pages={pages} 
                handlePage={(event) => setPage(event)}
                previous={planets && planets.previous }
                next={planets && planets.next}
                currentPage={page}
                />
            <PlanetsPageContainer>
                { planets ? (
                    <CardPreview items={planets.results} /> 
                ) : (
                    <Spinner />
                ) }
            </PlanetsPageContainer>
        </Container>
    );
};

const mapStateToProps = state => ({
    planets: state.planets.allPlanets
});

const mapDispatchToProps = dispatch => ({
    onRequestPlanets: (page = 1) => dispatch(requestAllPlanetsPerPage(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(PlanetsPage);