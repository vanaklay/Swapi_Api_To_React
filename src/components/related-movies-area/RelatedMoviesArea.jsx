import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestMovies } from '../../redux/related-items/RelatedItemsActions';

import Spinner from '../spinner/Spinner';

import { AreaContainer, AreaHeader } from './RelatedMovieArea.styles';

const RelatedArea = ({ relatedItems, children, onRequestMovies, movies }) => {
    useEffect(() => {
        if (relatedItems) {
            onRequestMovies(relatedItems)
        }
    }, [relatedItems, onRequestMovies]);
    const renderRelatedFeatures = () => {
        if (movies) {
            return movies.map(movie => <p>{ movie.title }</p>)
        } else {
            return <Spinner />;
        }
    }
    return (
        <AreaContainer>
            <AreaHeader>{ children }</AreaHeader>
            {renderRelatedFeatures()}
        </AreaContainer>
        );
};

const mapStateToProps = state => ({
    movies: state.movies.movies
});
const mapDispatchToProps = dispatch => ({
    onRequestMovies: (relatedItems) => dispatch(requestMovies(relatedItems))
});
export default connect(mapStateToProps, mapDispatchToProps)(RelatedArea);