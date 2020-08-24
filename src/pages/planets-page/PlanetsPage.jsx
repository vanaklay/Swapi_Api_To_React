import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { requestAllPlanetsPerPage } from '../../redux/planets/PlanetsActions';

import Spinner from '../../components/spinner/Spinner';
import CardPlanet from '../../components/card/CardPlanet';
import Pagination from '../../components/pagination/Pagination';
import CardPreview from '../../components/card-preview/CardPreview';

import { PreviewCard } from './PlanetsPage.styles';

const PlanetsPage = ({ onRequestPlanets, planets }) => {
    const [page, setPage] = useState(1);
    const pages = [1, 2, 3, 4, 5, 6]
    useEffect(() => {
        onRequestPlanets(page);
    }, [onRequestPlanets, page]);

    // const renderPreviewCard = () => {
    //     if (planets) {
    //         return (
    //             <PreviewCard>
    //                 { planets.results.map(planet => {
    //                     return (
    //                         <CardPlanet 
    //                             key={planet.name} 
    //                             items={planet} 
    //                         />);
    //                     }) }
    //             </PreviewCard>
    //             );
    //     } else {
    //         return <Spinner />;
    //     }
    // };
    return (
        <div>
            <Pagination pages={pages} handlePage={(event) => setPage(event)}/>
            { planets && <CardPreview items={planets.results} />}
        </div>
    );
};

const mapStateToProps = state => ({
    planets: state.planets.allPlanets
});

const mapDispatchToProps = dispatch => ({
    onRequestPlanets: (page = 1) => dispatch(requestAllPlanetsPerPage(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(PlanetsPage);