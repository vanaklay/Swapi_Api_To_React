import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestPlanetsArray } from '../../redux/related-planets/RelatedPlanetsActions';
import { requestArrayOfCharacters } from '../../redux/related-characters/RelatedCharactersActions';
import { requestMovies } from '../../redux/related-movies/RelatedMoviesActions';
import { requestStarships } from '../../redux/related-starships/RelatedStarshipsActions';
import { requestVehicles } from '../../redux/related-vehicules/RelatedVehiculesActions';

import Spinner from '../spinner/Spinner';

import { AreaContainer, AreaHeader, NothingRelated } from './RelatedItemsArea.styles';

const RelatedItemsArea = ({ onRequestArray, relatedItems, itemsArray, children }) => {
    useEffect(() => {
        if (relatedItems) {
            onRequestArray(relatedItems)
        }
    }, [onRequestArray, relatedItems]);

    const renderRelatedFeatures = () => {
        if (relatedItems.length) {
            if (itemsArray) {
                return itemsArray.map(item => item.name ? (
                    <p key={item.name} >{ item.name }</p>
                    ) : (
                        <p key={item.title} >{ item.title }</p>
                    ))
            } else {
                return <Spinner />;
            }
        } else {
            return <NothingRelated>n/a</NothingRelated>
        }
    }
    return (
            <AreaContainer>
                <AreaHeader>{children}</AreaHeader>
                { renderRelatedFeatures() }
            </AreaContainer>
        );
};

const mapStateToProps = (state, props) => {
    switch (props.category) {
        case 'planets':
            return { itemsArray: state.planetsArray.planets };
        case 'characters':
            return { itemsArray: state.charactersArray.arrayCharacters};
        case 'films':
            return { itemsArray: state.movies.movies };
        case 'starships':
            return { itemsArray: state.starships.items };
        case 'vehicles':
            return { itemsArray: state.vehicles.items };
        default:
            return null;
    }
};

const mapDispatchToProps = (dispatch, props) => {
    switch (props.category) {
        case 'planets':
            return { onRequestArray: (relatedItems) => dispatch(requestPlanetsArray(relatedItems)) };
        case 'characters':
            return { onRequestArray: (relatedItems) => dispatch(requestArrayOfCharacters(relatedItems)) };
        case 'films':
            return { onRequestArray: (relatedItems) => dispatch(requestMovies(relatedItems)) };
        case 'starships':
            return { onRequestArray: (relatedItems) => dispatch(requestStarships(relatedItems)) };
        case 'vehicles':
            return { onRequestArray: (relatedItems) => dispatch(requestVehicles(relatedItems)) };
        default:
            return null;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedItemsArea);