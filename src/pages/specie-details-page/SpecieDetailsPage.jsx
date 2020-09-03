import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { requestOneSpecie } from '../../redux/species/SpeciesActions';

import SpecieDescription from '../../components/descriptions/SpecieDescription';
import Spinner from '../../components/spinner/Spinner';
import RelatedItemsArea from '../../components/related-items-area/RelatedItemsArea';
import NavDetails from '../../components/navigation-bars/NavDetails';

import { SpecieDetailContainer, AreasContainer } from './SpecieDetailsPage.styles';

const SpecieDetailsPage = ({ match, onResquestThisSpecie, specie, errorMessage }) => {
    const idSpecie = match.params.id;
    const imageUrl = 'species/' + idSpecie + '.jpg';
    useEffect(() => {
        onResquestThisSpecie(idSpecie)
    }, [onResquestThisSpecie, idSpecie],);

    if (specie) {
        return (
            <SpecieDetailContainer>
                <NavDetails 
                    url='species'
                    />
                <SpecieDescription imageUrl={imageUrl} specie={specie} />
                <AreasContainer>
                    <RelatedItemsArea relatedItems={specie.people} category='characters'>Personnages</RelatedItemsArea>
                    <RelatedItemsArea relatedItems={specie.films} category='films'>Films</RelatedItemsArea>
                </AreasContainer>
            </SpecieDetailContainer>);
    } else if (errorMessage) {
        return <Redirect to='/404' />;
    } else {
        return <Spinner />;
    }
};



const mapStateToProps = state => ({
    specie: state.species.one,
    errorMessage: state.species.errorMessageOne
});

const mapDispatchToProps = dispatch => ({
    onResquestThisSpecie: (id) => dispatch(requestOneSpecie(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(SpecieDetailsPage);