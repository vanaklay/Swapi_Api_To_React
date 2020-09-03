import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { requestPlanet } from '../../redux/planets/PlanetsActions';

import PlanetDescription from '../../components/descriptions/PlanetDescription';
import Spinner from '../../components/spinner/Spinner';
import RelatedItemsArea from '../../components/related-items-area/RelatedItemsArea';
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
                        <RelatedItemsArea relatedItems={planet.films} category='films'>Films</RelatedItemsArea>
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