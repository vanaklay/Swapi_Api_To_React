import React, { useEffect } from 'react';
import { useParams, Redirect, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';

import FilmDescription from '../../components/film-description/FilmDescription';
import Spinner from '../../components/spinner/Spinner';
import NavDetails from '../../components/navigation-bars/NavDetails';
import RelatedCharactersArea from '../../components/related-characters-area/RelatedCharactersArea';

import { FilmDetailContainer, AreasContainer } from './FilmDetailsPage.styles';

import { requestOneFilm } from '../../redux/films/FilmsActions';

const FilmDetailsPage = ({ film, onRequestOneFilm, errorMessage }) => {
    const id = useParams().id;
    const url = useRouteMatch().url.split('/')[1];
    const imageUrl = 'films/' + id + '.jpg';

    useEffect(() => {
        onRequestOneFilm(id);
    },[id, onRequestOneFilm]);

    if (film) {
        return (
            <FilmDetailContainer>
                <NavDetails 
                    url={url}
                    />
                <FilmDescription id={id} imageUrl={imageUrl} film={film} />
                <AreasContainer>
                    <RelatedCharactersArea relatedItems={film.characters}/>
                </AreasContainer>
            </FilmDetailContainer>);
    } else if (errorMessage) {
        return <Redirect to='/404' />;
    } else {
        return <Spinner />;
    }
};

const mapStateToProps = state => ({
    film: state.films.one,
    errorMessage: state.films.oneError
});
const mapDispatchToProps = dispatch => ({
    onRequestOneFilm: (id) => dispatch(requestOneFilm(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailsPage);