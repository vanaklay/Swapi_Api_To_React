import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { requestPlanet } from '../../redux/planets/PlanetsActions';

import PlanetDescription from '../../components/planet-description/PlanetDescription';
import Spinner from '../../components/spinner/Spinner';
import RelatedMoviesArea from '../../components/related-movies-area/RelatedMoviesArea';
import NavDetails from '../../components/navigation-bars/NavDetails';

import { PlanetDetailContainer, AreasContainer } from './PlanetDetailsPage.styles';

const PlanetDetailsPage = ({ match, onResquestThisPlanet, planet, errorMessage }) => {
    const idPlanet = match.params.page;
    const imageUrl = 'planets/' + idPlanet + '.jpg';
    useEffect(() => {
        onResquestThisPlanet(idPlanet)
    }, [onResquestThisPlanet, idPlanet],);

    if (errorMessage) {
        return <Redirect to='/404' />;
    } else {
        return (
            <PlanetDetailContainer>
                <NavDetails url='planets' />
                { planet ? (
                    <PlanetDescription planet={planet} imageUrl={imageUrl} /> 
                ) : (
                    <Spinner />
                )}
                <AreasContainer>
                    { planet ? (
                        <RelatedMoviesArea relatedItems={planet.films}>Films</RelatedMoviesArea>
                    ) : (
                        <Spinner />
                    )}
                </AreasContainer>
            </PlanetDetailContainer>
        );
    }
};

const mapStateToProps = state => ({
    planet: state.planets.planet,
    errorMessage: state.planets.errorMessage
});

const mapDispatchToProps = dispatch => ({
    onResquestThisPlanet: (id) => dispatch(requestPlanet(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetailsPage);